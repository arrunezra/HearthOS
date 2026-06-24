import React from 'react';
import { Canvas, Rect, LinearGradient, vec } from '@shopify/react-native-skia';
import { View, StyleProp, ViewStyle } from 'react-native';

interface GradientProps {
    colors: string[];
    locations?: number[];         // 📍 Added optional positions/locations array
    children?: React.ReactNode;
    style?: StyleProp<ViewStyle>;
    className?: string;
    horizontal?: boolean;
}

export default function GradientView({
    colors,
    locations,                    // 📥 Destructure locations here
    children,
    style,
    className,
    horizontal = true
}: GradientProps) {
    const [dimensions, setDimensions] = React.useState({ width: 0, height: 0 });

    return (
        <View
            className={className}
            style={[style, { position: 'relative', overflow: 'hidden' }]}
            onLayout={(event) => {
                const { width, height } = event.nativeEvent.layout;
                setDimensions({ width, height });
            }}
        >
            {dimensions.width > 0 && (
                <Canvas style={{ position: 'absolute', top: 0, left: 0, width: dimensions.width, height: dimensions.height }}>
                    <Rect x={0} y={0} width={dimensions.width} height={dimensions.height}>
                        <LinearGradient
                            start={vec(0, 0)}
                            end={horizontal ? vec(dimensions.width, 0) : vec(0, dimensions.height)}
                            colors={colors}
                            positions={locations} // 🎯 Mapping locations to Skia's positions prop
                        />
                    </Rect>
                </Canvas>
            )}
            {children}
        </View>
    );
}