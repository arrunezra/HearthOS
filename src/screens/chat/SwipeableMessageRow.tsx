import React from 'react';
import { StyleSheet } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withSpring,
    runOnJS,
    interpolate,
    Extrapolate
} from 'react-native-reanimated';
import { CornerUpLeft } from 'lucide-react-native';
import { scale, moderateScale } from '@/src/utils/scaling';
import { Box } from '@/src/components/HOSGluestackUI';

interface SwipeableMessageRowProps {
    children: React.ReactNode;
    onReplyTrigger: () => void;
    isMe: boolean;
}

const SWIPE_THRESHOLD = scale(60);

export default function SwipeableMessageRow({ children, onReplyTrigger, isMe }: SwipeableMessageRowProps) {
    const translateX = useSharedValue(0);

    const panGesture = Gesture.Pan()
        .activeOffsetX([-10, 10])
        .failOffsetY([-5, 5])
        .onUpdate((event) => {
            if (event.translationX > 0) {
                translateX.value = event.translationX;
            }
        })
        .onEnd(() => {
            if (translateX.value > SWIPE_THRESHOLD) {
                runOnJS(onReplyTrigger)();
            }
            translateX.value = withSpring(0, { damping: 15, stiffness: 150 });
        });

    const rMessageStyle = useAnimatedStyle(() => ({
        transform: [{ translateX: translateX.value }],
    }));

    const rIconStyle = useAnimatedStyle(() => {
        const opacity = interpolate(translateX.value, [0, SWIPE_THRESHOLD], [0, 1], Extrapolate.CLAMP);
        const scaleValue = interpolate(translateX.value, [0, SWIPE_THRESHOLD], [0.5, 1], Extrapolate.CLAMP);
        return {
            opacity,
            transform: [{ scale: scaleValue }],
        };
    });

    return (
        <GestureDetector gesture={panGesture}>
            <Box style={styles.container}>
                {/* Fixed Underlay Reply Icon */}
                <Animated.View style={[styles.iconContainer, rIconStyle]}>
                    <CornerUpLeft color="#E65100" size={moderateScale(20)} />
                </Animated.View>

                {/* 🎯 FIX: Dynamically align content container based on who sent the message */}
                <Animated.View
                    style={[
                        styles.swipeableContent,
                        { alignItems: isMe ? 'flex-end' : 'flex-start' },
                        rMessageStyle
                    ]}
                >
                    {children}
                </Animated.View>
            </Box>
        </GestureDetector>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        position: 'relative',
        justifyContent: 'center',
    },
    iconContainer: {
        position: 'absolute',
        left: scale(16),
        zIndex: 0,
    },
    swipeableContent: {
        width: '100%',
        zIndex: 1,
        paddingHorizontal: scale(16), // Gives clear breathing room near screen edges
    },
}); 