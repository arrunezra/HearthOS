// src/components/ScreenContainer.tsx
import React from 'react';
import { View, ScrollView, ViewStyle, StatusBar } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import HeaderSession from './HeaderSection';

// Define the structure of props your layout can accept
interface ScreenContainerProps {
    children: React.ReactNode;
    backgroundColor?: string;
    scrollable?: boolean;

    // Header configuration props
    showHeader?: boolean;
    headerTitle?: string;
    headerTheme?: 'midnight' | 'emerald' | 'slate' | 'blue' | 'sunset' | 'ocean' | 'cyan' | 'forest' | 'bordeaux' | 'charcoal' | 'white' | 'glass' | 'mint';
    showBackButton?: boolean;
    role?: string;
    onBackPress?: () => void;
    showRightIcon?: boolean;
    rightIconType?: 'menu' | 'bell' | 'search' | 'close';
    onRightPress?: () => void;
    showLogo?: boolean;
}

export default function ScreenContainer({
    children,
    backgroundColor = '#FFFFFF',
    scrollable = true,
    showHeader = true,
    headerTitle = '',
    headerTheme = 'midnight',
    showBackButton = true,
    role = 'user',
    onBackPress,
    showRightIcon = true,
    rightIconType = 'menu',
    onRightPress,
    showLogo = false,

}: ScreenContainerProps) {
    const insets = useSafeAreaInsets();

    return (
        <View
            style={{
                flex: 1,
                backgroundColor: backgroundColor,
                // 🛠️ Dynamic Safe Padding: 
                // If NO header is shown, pad the top so content doesn't hide behind the camera notch.
                paddingTop: insets.top,
                paddingBottom: insets.bottom,
            }}
        >

            {/* Conditionally render header based on layout choices */}
            {showHeader && (
                <HeaderSession
                    title={headerTitle}
                    theme={headerTheme}
                    showBackButton={showBackButton}
                    onBackPress={onBackPress}
                    showRightIcon={showRightIcon}
                    rightIconType={rightIconType}
                    onRightPress={onRightPress}
                    showLogo={showLogo}
                    role={role}
                />
            )}

            {/* Choose between a scrollable container view or a fixed frame container */}
            {scrollable ? (
                <ScrollView
                    contentContainerStyle={{ padding: 24 }}
                    keyboardShouldPersistTaps="handled"
                >
                    {children}
                </ScrollView>
            ) : (
                <View style={{ flex: 1, padding: 24 }}>
                    {children}
                </View>
            )}
        </View>
    );
}