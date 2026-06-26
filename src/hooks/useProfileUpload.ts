import { useState, useEffect } from 'react';
import { Alert, Platform } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import NetInfo from "@react-native-community/netinfo";
import { cleanupImage, handleImageCompression } from '../utils/ImageService';
import { useAlert } from '../context/AlertContext';
import apiClient from '../api/axios-interceptors-with-retry'
export const useProfileUpload = (userid: string, profileid: any, onUploadSuccess: (urls: any) => void) => {
    const { showAlert, hideAlert } = useAlert();

    const [isUploading, setIsUploading] = useState(false);
    const [uploadProgress, setUploadProgress] = useState(0);
    const [isOffline, setIsOffline] = useState(false);

    // Monitor Network
    useEffect(() => {
        const unsubscribe = NetInfo.addEventListener(state => {
            setIsOffline(!state.isConnected);
        });
        return () => unsubscribe();
    }, []);

    const startUpload = async (from: any, profilepic: any) => {
        //console.log('profileid=', from, profileid);
        let url = `/files/${from === 'gallery' ? 'profile_gallery_upload.php' : 'profile_photo_upload.php'}`;

        if (isOffline) {
            Alert.alert("Offline", "Please check your internet connection.");
            return;
        }

        let tempUri: string | undefined;

        try {
            // 1. Open Native Photo Picker
            const result = await launchImageLibrary({
                mediaType: 'photo',
                quality: 1,
                selectionLimit: 1,
            });

            // Handle cancellation gracefully
            if (result.didCancel || !result.assets || result.assets.length === 0) {
                return;
            }

            const selectedImage = result.assets[0];

            setIsUploading(true);
            setUploadProgress(0);

            // Map format for compression utility
            const mappedImageForCompression = {
                path: selectedImage.uri || '',
                mime: selectedImage.type || 'image/jpeg',
                filename: selectedImage.fileName || `${userid}_${Date.now()}.jpg`,
            };

            // 2. Optimize image using compression engine
            const compressed = await handleImageCompression(mappedImageForCompression as any);
            if (!compressed) throw new Error("Compression failed");
            tempUri = compressed.uri;

            // 3. Setup FormData payload variables
            const uploadData = new FormData();

            uploadData.append('file', {
                uri: compressed.uri,
                type: compressed.type,
                name: compressed.name,
            } as any);

            // ✅ FIX: Send raw URI string parameter explicitly to satisfy backend requirements (like Line 84 lookup)
            uploadData.append('uri', compressed.uri);

            uploadData.append('userid', userid);
            uploadData.append('profile_id', profileid);
            uploadData.append('is_profile_pic', profilepic ? '1' : '0'); // Pass profile placement parameter safely

            const response = await apiClient.post(url, uploadData, {
                headers: { 'Content-Type': 'multipart/form-data' },
                onUploadProgress: ({ loaded, total }: any) => {
                    if (total && total > 0) {
                        const progressPercentage = Math.min(Math.round((loaded * 100) / total), 100);
                        setUploadProgress(progressPercentage);
                    }
                }
            });

            if (response.data.success) {
                onUploadSuccess(response.data);

            } else {
                throw new Error(response.data.message || "Upload failed");
            }

        } catch (error: any) {
            showAlert({
                type: 'error',
                title: 'Gallery Info.',
                message: error.message || "Something went wrong. Please try again.",
                confirmText: "OK",
                onConfirm: async () => {
                    setIsUploading(false);
                    hideAlert();
                }
            });
        } finally {
            setIsUploading(false);
            if (tempUri) await cleanupImage(tempUri);
        }
    };

    return { startUpload, isUploading, uploadProgress, isOffline };
};