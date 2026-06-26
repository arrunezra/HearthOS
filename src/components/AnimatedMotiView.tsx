import React, { useEffect } from 'react';
import Animated, {
    FadeIn,
    FadeInDown,
    FadeInUp,
    LinearTransition,
    withTiming,
    withDelay,
    withSpring,
    withSequence,
    withRepeat,
    useAnimatedStyle,
    useSharedValue,
} from 'react-native-reanimated';
import { StyleProp, ViewStyle } from 'react-native';

// 🚀 Added 'shimmer' to the available preset layouts catalog
export type AnimationPreset = 'fade' | 'scale' | 'slideUp' | 'slideDown' | 'springUp' | 'accordion' | 'pulse' | 'shimmer';

interface AnimateViewProps {
    children?: React.ReactNode;
    className?: string;
    style?: StyleProp<ViewStyle>;
    preset?: AnimationPreset;
    duration?: number;
    delay?: number;
    disableAnimation?: boolean;
    animationType?: 'spring' | 'timing';
    damping?: number;
    stiffness?: number;
    initialTranslateY?: number;
    initialScale?: number;

    targetHeight?: number;

    isLiked?: boolean;
    initialBackgroundColor?: string;
    animateBackgroundColor?: string;
}

export default function AnimatedMotiView({
    children,
    className,
    style,
    preset = 'fade',
    duration = 350,
    delay = 0,
    disableAnimation = false,
    animationType = 'spring',
    damping = 15,
    stiffness = 150,
    initialTranslateY = 50,
    initialScale = 0,
    targetHeight = 42,
    initialBackgroundColor = 'transparent',
    animateBackgroundColor = 'transparent',
    isLiked,
}: AnimateViewProps) {

    const isLikedShared = useSharedValue(isLiked ? 1 : 0);

    useEffect(() => {
        if (isLiked !== undefined) {
            isLikedShared.value = isLiked ? 1 : 0;
        }
    }, [isLiked]);

    // Handles runtime state updates (like interactive favorites button scales)
    const dynamicActiveStyle = useAnimatedStyle(() => {
        if (isLiked === undefined) return {};
        const springConfig = { damping, stiffness };
        return {
            backgroundColor: withTiming(
                isLikedShared.value === 1 ? animateBackgroundColor : initialBackgroundColor,
                { duration: 250 }
            ),
            transform: [
                {
                    scale: isLikedShared.value === 1
                        ? withSequence(withSpring(1.3, springConfig), withSpring(1.0, springConfig))
                        : withSpring(1.0, springConfig),
                },
            ],
        };
    });

    // Handles all infinitely looping continuous configurations
    const loopStyle = useAnimatedStyle(() => {
        if (preset === 'pulse') {
            return {
                opacity: withRepeat(withTiming(0, { duration }), -1, false),
                transform: [{ scale: withRepeat(withTiming(1.6, { duration }), -1, false) }]
            };
        }

        if (preset === 'shimmer') {
            // 🎯 Chaining withDelay on top of withRepeat handles staggered timing resets flawlessly!
            // -1 loops infinitely. false ensures the value wraps back from 300 to -300 instantaneously.
            return {
                transform: [
                    {
                        translateX: withRepeat(
                            withDelay(
                                delay,
                                withTiming(300, { duration })
                            ),
                            -1,
                            false
                        )
                    }
                ]
            };
        }

        return {};
    });

    if (disableAnimation) {
        return <Animated.View className={className} style={style}>{children}</Animated.View>;
    }

    let configuredAnimation: any;
    let configuredExiting: any = undefined;

    switch (preset) {
        case 'pulse':
        case 'shimmer':
            // 🎯 Handled directly by the high-performance loopStyle matrix below
            configuredAnimation = () => {
                'worklet';
                return {
                    initialValues: {
                        transform: [{ translateX: preset === 'shimmer' ? -300 : 0 }]
                    },
                    animations: {},
                };
            };
            break;

        case 'accordion':
            configuredAnimation = () => {
                'worklet';
                return {
                    initialValues: { opacity: 0, height: 0 },
                    animations: {
                        opacity: withTiming(1, { duration }),
                        height: withTiming(targetHeight, { duration }),
                    },
                };
            };
            configuredExiting = () => {
                'worklet';
                return {
                    initialValues: { opacity: 1, height: targetHeight },
                    animations: {
                        opacity: withTiming(0, { duration }),
                        height: withTiming(0, { duration }),
                    },
                };
            };
            break;

        case 'springUp':
            configuredAnimation = () => {
                'worklet';
                const springConfig = { damping, stiffness };
                const timingConfig = { duration };
                return {
                    initialValues: {
                        opacity: 0,
                        backgroundColor: isLiked !== undefined ? initialBackgroundColor : 'transparent',
                        transform: [{ translateY: initialTranslateY }, { scale: initialScale }],
                    },
                    animations: {
                        opacity: animationType === 'timing' ? withDelay(delay, withTiming(1, timingConfig)) : withDelay(delay, withSpring(1, springConfig)),
                        transform: [
                            { translateY: animationType === 'timing' ? withDelay(delay, withTiming(0, timingConfig)) : withDelay(delay, withSpring(0, springConfig)) },
                            { scale: animationType === 'timing' ? withDelay(delay, withTiming(1, timingConfig)) : withDelay(delay, withSpring(1, springConfig)) },
                        ],
                    },
                };
            };
            break;

        case 'slideUp':
            configuredAnimation = FadeInDown.duration(duration);
            if (delay > 0) configuredAnimation = configuredAnimation.delay(delay);
            break;

        case 'slideDown':
            configuredAnimation = FadeInUp.duration(duration);
            if (delay > 0) configuredAnimation = configuredAnimation.delay(delay);
            break;

        case 'scale':
            configuredAnimation = () => {
                'worklet';
                return {
                    initialValues: { opacity: 0, transform: [{ scale: 0.95 }] },
                    animations: {
                        opacity: withDelay(delay, withTiming(1, { duration })),
                        transform: [{ scale: withDelay(delay, withTiming(1, { duration })) }],
                    },
                };
            };
            break;

        case 'fade':
        default:
            configuredAnimation = FadeIn.duration(duration);
            if (delay > 0) configuredAnimation = configuredAnimation.delay(delay);
            break;
    }

    return (
        <Animated.View
            entering={configuredAnimation}
            exiting={configuredExiting}
            layout={LinearTransition.duration(250)}
            className={className}
            style={[style, dynamicActiveStyle, loopStyle]}
        >
            {children}
        </Animated.View>
    );
}