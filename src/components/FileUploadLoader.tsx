import React from 'react';
import { Modal, ActivityIndicator } from 'react-native';
import { Box, Text, Center, HStack } from '@/src/components/HOSGluestackUI'; // Adjust paths to your UI folder
import { scale, verticalScale, moderateScale } from '@/src/utils/scaling'; // Assuming you use a scaling utility

interface FileUploadLoaderProps {
    visible: boolean;
    progress: number;
}

export const FileUploadLoader = ({ visible, progress }: FileUploadLoaderProps) => {
    return (
        <Modal
            transparent
            visible={visible}
            animationType="fade"
            statusBarTranslucent
        >
            <Center style={{ flex: 1, backgroundColor: 'rgba(15, 23, 42, 0.75)' }}>
                <Box style={{
                    width: scale(280),
                    backgroundColor: '#1E293B', // Deep Slate Blue profile
                    borderRadius: scale(16),
                    padding: scale(20),
                    borderWidth: 1,
                    borderColor: 'rgba(255, 255, 255, 0.08)',
                    shadowColor: '#000',
                    shadowOffset: { width: 0, height: 4 },
                    shadowOpacity: 0.3,
                    shadowRadius: 8,
                    elevation: 5
                }}>
                    <HStack style={{ alignItems: 'center', gap: scale(14), marginBottom: verticalScale(12) }}>
                        <ActivityIndicator size="large" color="#E65100" />
                        <Box style={{ flex: 1 }}>
                            <Text style={{ color: '#FFFFFF', fontSize: moderateScale(15), fontWeight: '600' }}>
                                Processing File
                            </Text>
                            <Text style={{ color: '#94A3B8', fontSize: moderateScale(13), marginTop: verticalScale(2) }}>
                                Optimizing & uploading...
                            </Text>
                        </Box>
                    </HStack>

                    {/* 📊 PROGRESS BAR CONTAINER */}
                    <Box style={{
                        height: verticalScale(6),
                        width: '100%',
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        borderRadius: scale(3),
                        overflow: 'hidden',
                        marginTop: verticalScale(6)
                    }}>
                        <Box style={{
                            height: '100%',
                            width: `${progress}%`,
                            backgroundColor: '#E65100', // Matches your orange primary send color accent
                            borderRadius: scale(3)
                        }} />
                    </Box>

                    {/* 🎯 PERCENTAGE LABEL */}
                    <Text style={{
                        color: '#E65100',
                        fontSize: moderateScale(12),
                        fontWeight: '700',
                        textAlign: 'right',
                        marginTop: verticalScale(6)
                    }}>
                        {progress}%
                    </Text>
                </Box>
            </Center>
        </Modal>
    );
};