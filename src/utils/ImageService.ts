import { Image as ImageCompressor } from 'react-native-compressor';
import ReactNativeBlobUtil from 'react-native-blob-util';
import { Platform } from 'react-native';

const MAX_SIZE = 1024 * 1024; // 1MB

export const handleImageCompression = async (image: any) => {
    try {
        // 🎯 FIX: Explicitly handle fallback if size wasn't parsed down correctly
        let finalUri = image.path;
        let finalSize = image.size || 0;

        // If size wasn't provided, fetch it using native fs stats before running comparison
        if (finalSize === 0 && finalUri) {
            const pathForStat = Platform.OS === 'ios' ? finalUri.replace('file://', '') : finalUri;
            // Wrap in try-catch to prevent crash if file is content provider path
            try {
                const stats = await ReactNativeBlobUtil.fs.stat(pathForStat);
                finalSize = stats.size;
            } catch {
                finalSize = MAX_SIZE + 1; // Force fallback compression block if unreadable natively
            }
        }

        // Only compress if it exceeds 1MB
        if (finalSize > MAX_SIZE) {
            console.log("Compressing high-res image payload...");

            // Stage 1: Native Auto-Compression (Hardware Accelerated)
            finalUri = await ImageCompressor.compress(image.path, {
                compressionMethod: 'auto',
                maxWidth: 1500,
                quality: 0.8,
            });

            const cleanPath = Platform.OS === 'ios' ? finalUri.replace('file://', '') : finalUri;
            const stats = await ReactNativeBlobUtil.fs.stat(cleanPath);
            finalSize = stats.size;

            // Stage 2: Emergency fallback if still over 1MB
            if (finalSize > MAX_SIZE) {
                finalUri = await ImageCompressor.compress(finalUri, {
                    compressionMethod: 'manual',
                    maxWidth: 1200,
                    quality: 0.6,
                });
                const finalStats = await ReactNativeBlobUtil.fs.stat(finalUri.replace('file://', ''));
                finalSize = finalStats.size;
            }
        }

        return {
            uri: finalUri,
            name: image.filename || `profile_${Date.now()}.jpg`,
            type: image.mime || 'image/jpeg',
            size: finalSize
        };
    } catch (error) {
        console.error("Compression Utility Error:", error);
        return null;
    }
};

export const cleanupImage = async (uri: string | undefined) => {
    if (!uri) return;
    try {
        if (uri.startsWith('file://') || uri.startsWith('/')) {
            const cleanPath = Platform.OS === 'ios' ? uri.replace('file://', '') : uri;
            const exists = await ReactNativeBlobUtil.fs.exists(cleanPath);
            if (exists) {
                await ReactNativeBlobUtil.fs.unlink(cleanPath);
                console.log("Successfully cleaned up temp cache:", cleanPath);
            }
        }
    } catch (error) {
        console.error("Cleanup Error:", error);
    }
};