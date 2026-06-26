import { useState, useEffect } from 'react';
import NetInfo from "@react-native-community/netinfo";
import { handleImageCompression, cleanupImage } from '../utils/ImageService';
import { useAlert } from '../context/AlertContext';
import apiClient from '../api/axios-interceptors-with-retry'
import { API_BASE_URL_DEV } from '../utils/environment';

export const useChatAttachment = () => {
    const { showAlert } = useAlert();
    const [isUploading, setIsUploading] = useState(false);
    const [uploadProgress, setUploadProgress] = useState(0);
    const [isOffline, setIsOffline] = useState(false);

    // Monitor Network State
    useEffect(() => {
        const unsubscribe = NetInfo.addEventListener(state => {
            setIsOffline(!state.isConnected);
        });
        return () => unsubscribe();
    }, []);

    const uploadChatMedia = async (
        selectedAsset: any,
        userid: string,
        displayName: string
    ): Promise<{ url: string; thumbUrl: string } | null> => {
        if (isOffline) {
            showAlert({
                type: 'error',
                title: 'Connection Issue',
                message: 'You are offline. Please check your internet connection.',
                confirmText: 'OK'
            });
            return null;
        }

        let tempUri: string | undefined;
        // Update this endpoint path to match your PHP file layout (e.g., chat_media_upload.php)
        const uploadUrl = API_BASE_URL_DEV + '/chats/chat_media_upload.php';
        try {
            setIsUploading(true);
            setUploadProgress(0);

            // 1. Map asset properties for your compression engine
            const mappedMedia = {
                path: selectedAsset.uri || '',
                mime: selectedAsset.type || 'image/jpeg',
                filename: selectedAsset.fileName || `chat_${Date.now()}.jpg`,
                size: selectedAsset.fileSize || 0,

            };

            // 2. Run compression utility
            const compressed = await handleImageCompression(mappedMedia);
            if (!compressed) throw new Error("Compression failed");
            tempUri = compressed.uri;

            // 3. Assemble the multipart FormData bundle exactly like your profile logic
            const uploadData = new FormData();

            uploadData.append('file', {
                uri: compressed.uri,
                type: compressed.type,
                name: compressed.name,

            } as any);

            uploadData.append('uri', compressed.uri);
            uploadData.append('userid', userid);
            uploadData.append('displayName', displayName);
            uploadData.append('gifFrom', selectedAsset?.gifFrom || "");


            // 4. Dispatch the payload via your custom API engine setup
            const response = await apiClient.post(uploadUrl, uploadData, {
                headers: { 'Content-Type': 'multipart/form-data' },
                onUploadProgress: ({ loaded, total }: any) => {
                    if (total && total > 0) {
                        const progressPercentage = Math.min(Math.round((loaded * 100) / total), 100);
                        setUploadProgress(progressPercentage);
                    }
                }
            });
            console.log('Server Raw Response Target:', response);
            // 5. Read back response parameters sent by your PHP script
            if (response && response.data.success) {
                return {
                    url: response.data.url,
                    thumbUrl: response.data.thumbUrl || response.data.url
                };
            } else {
                // Safely grab backend error message if available
                const backendErrorMessage = response?.data?.message || "File upload transaction rejected by server.";
                throw new Error(backendErrorMessage);
            }

        } catch (error: any) {
            console.log('Caught Hook Execution Error:', error);

            // 🎯 THE FIX: Deep-defend against undefined error property lookups
            const finalAlertMessage = error?.response?.data?.message  // If it's an Axios network error payload
                || error?.message                                     // If it's a standard JS error object
                || "A network connection or server processing error occurred.";

            showAlert({
                type: 'error',
                title: 'Attachment Error',
                message: finalAlertMessage, // 🚀 Will never be undefined or crash again
                confirmText: "OK"
            });
            return null;
        } finally {
            setIsUploading(false);
            if (tempUri) await cleanupImage(tempUri); // 🧼 Evict local temp file cache from phone memory
        }
    };

    return { uploadChatMedia, isUploading, uploadProgress, isOffline };
};