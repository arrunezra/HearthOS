import React, { useState, useEffect } from 'react';
import { TouchableOpacity } from 'react-native'; // 🚀 Use basic button for just the icon element
import { Box, Text } from '@/src/components/HOSGluestackUI';
import { scale, verticalScale, moderateScale } from '@/src/utils/scaling';
import { Play, Pause } from 'lucide-react-native';
import FastImage from '@d11/react-native-fast-image';

interface OptimizedChatGifProps {
    mediaUrl: string;
    thumbUrl: string;
    timeString: string;
    isMe: boolean;
}

export const OptimizedChatGif = ({ mediaUrl, thumbUrl, timeString, isMe }: OptimizedChatGifProps) => {
    const [isPlaying, setIsPlaying] = useState(true);

    useEffect(() => {
        if (!isPlaying) return;

        const timer = setTimeout(() => {
            setIsPlaying(false);
        }, 6000);

        return () => clearTimeout(timer);
    }, [isPlaying]);

    const bubbleWidth = scale(220);
    const bubbleHeight = verticalScale(180);

    return (
        /* 🎯 NO MORE TOP-LEVEL PRESSABLE HERE. 
           This keeps the outer canvas open for the bubble's long-press delete handler! */
        <Box style={{
            borderRadius: scale(12),
            overflow: 'hidden',
            width: bubbleWidth,
            height: bubbleHeight,
            backgroundColor: '#1E293B',
            position: 'relative'
        }}>
            {/* 📸 Visual Media Container */}
            <FastImage
                source={{ uri: isPlaying ? mediaUrl : thumbUrl }}
                style={{ width: bubbleWidth, height: bubbleHeight }}
                resizeMode={FastImage.resizeMode.cover}
            />

            {/* 🎯 BOTTOM METRICS CONTAINER BAR */}
            <Box style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                paddingHorizontal: scale(10),
                paddingVertical: verticalScale(6),
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between'
            }}>

                {/* 🕹️ LEFT SIDE: Independent Play/Pause Button Pill */}
                <TouchableOpacity
                    onPress={() => setIsPlaying(!isPlaying)}
                    activeOpacity={0.7}
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: scale(4),
                        backgroundColor: 'rgba(15, 23, 42, 0.75)', // Added clean background to make the tiny button distinct
                        paddingHorizontal: scale(6),
                        paddingVertical: verticalScale(3),
                        borderRadius: scale(8)
                    }}
                >
                    {isPlaying ? (
                        <Pause color="#FFFFFF" size={scale(10)} />
                    ) : (
                        <Play color="#FFFFFF" size={scale(10)} fill="#FFFFFF" />
                    )}
                    <Text style={{ color: '#FFFFFF', fontSize: moderateScale(10), fontWeight: '800', letterSpacing: 0.5 }}>
                        {isPlaying ? 'LIVE' : 'GIF'}
                    </Text>
                </TouchableOpacity>

                {/* ⏰ RIGHT SIDE: Static Timestamp Info (Passes touch events through to parent bubble) */}
                <Box
                    pointerEvents="none" // 🚀 Guarantees this side ignores direct hits and falls back to delete handler
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: scale(4),
                        backgroundColor: 'rgba(15, 23, 42, 0.6)',
                        paddingHorizontal: scale(6),
                        paddingVertical: verticalScale(3),
                        borderRadius: scale(8)
                    }}
                >
                    <Text style={{ fontSize: moderateScale(11), color: '#FFFFFF', fontWeight: '500' }}>
                        {timeString}
                    </Text>
                    {isMe && (
                        <Text style={{ fontSize: moderateScale(11), color: '#34B7F1', marginLeft: scale(-2) }}>
                            ✓✓
                        </Text>
                    )}
                </Box>
            </Box>
        </Box>
    );
};