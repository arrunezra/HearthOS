import React from 'react';
import { Modal, StyleSheet, TouchableOpacity, StatusBar } from 'react-native';
import Gallery from 'react-native-awesome-gallery';
import { GestureHandlerRootView } from 'react-native-gesture-handler'; // 🚀 CRITICAL FOR MODALS
import { Box } from '@/src/components/HOSGluestackUI';
import { scale, verticalScale } from '@/src/utils/scaling';
import { X } from 'lucide-react-native';
import FastImage from '@d11/react-native-fast-image';

interface ModernImageViewerProps {
    visible: boolean;
    imageUrl: string;
    onClose: () => void;
}

export const ModernImageViewer = ({ visible, imageUrl, onClose }: ModernImageViewerProps) => {
    if (!imageUrl) return null;

    return (
        <Modal
            visible={visible}
            transparent={true}
            animationType="fade"
            onRequestClose={onClose}
            statusBarTranslucent
        >
            {/* 🎯 THE ANDROID FIX: GestureHandlerRootView must sit inside the Modal container */}
            <GestureHandlerRootView style={{ flex: 1 }}>
                <Box style={styles.container}>
                    <StatusBar barStyle="light-content" backgroundColor="#000000" />

                    {/* ❌ FLOATING CLOSE BUTTON */}
                    <TouchableOpacity
                        style={styles.closeButton}
                        onPress={onClose}
                        activeOpacity={0.7}
                    >
                        <X color="#FFFFFF" size={scale(22)} />
                    </TouchableOpacity>

                    {/* 🚀 REANIMATED V3 GALLERY ENGINE */}
                    <Gallery
                        data={[imageUrl]}
                        keyExtractor={(item) => item}
                        initialIndex={0}
                        onSwipeToClose={onClose} // Native swipe-down action handle
                        maxScale={5}
                        doubleTapEnabled={true}
                        renderItem={({ item, setImageDimensions }) => (
                            <FastImage
                                source={{ uri: item }}
                                style={styles.imageSize}
                                resizeMode={FastImage.resizeMode.contain}
                                // 🚀 REQUIRED BY AWESOME-GALLERY: Native layout sizing sync hook
                                onLoad={(e) => {
                                    const { width, height } = e.nativeEvent;
                                    setImageDimensions({ width, height });
                                }}
                            />
                        )}
                    />
                </Box>
            </GestureHandlerRootView>
        </Modal>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',
        position: 'relative',
    },
    imageSize: {
        width: '100%',
        height: '100%',
    },
    closeButton: {
        position: 'absolute',
        top: verticalScale(50),
        right: scale(20),
        zIndex: 999, // Floating safely above the image layer matrix bounds
        backgroundColor: 'rgba(15, 23, 42, 0.65)',
        padding: scale(10),
        borderRadius: scale(30),
    }
});