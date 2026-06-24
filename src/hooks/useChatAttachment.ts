import { useState, useEffect } from 'react';
import NetInfo from "@react-native-community/netinfo";
import { handleImageCompression, cleanupImage } from '../utils/ImageService';
import { useAlert } from '../context/AlertContext';
import apiClient from '../api/axios-interceptors-with-retry'

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

    const uploadChatMedia = async (selectedAsset: any, userid: string, roomId: string): Promise<string | null> => {
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
        const uploadUrl = '/files/chat_media_upload.php';

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
            uploadData.append('room_id', roomId); // Useful if your backend separates media folder streams by room

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

            // 5. Read back response parameters sent by your PHP script
            if (response.data && response.data.success) {
                // Assuming your PHP script returns the web location inside response.data.url
                return response.data.url;
            } else {
                throw new Error(response.data.message || "File upload transaction rejected by server.");
            }

        } catch (error: any) {
            showAlert({
                type: 'error',
                title: 'Attachment Error',
                message: error.message || "Something went wrong. Please try again.",
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