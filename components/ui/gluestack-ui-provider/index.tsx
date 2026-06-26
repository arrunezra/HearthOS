import React, { useEffect } from 'react';
import { config } from './config';
import { View, ViewProps } from 'react-native';
import { OverlayProvider } from '@gluestack-ui/core/overlay/creator';
import { ToastProvider } from '@gluestack-ui/core/toast/creator';
import { useColorScheme } from 'nativewind';

export type ModeType = 'light' | 'dark' | 'system';
export type ThemeFlavor = 'blue' | 'green';

export function GluestackUIProvider({
  mode = 'light',
  flavor = 'green',
  ...props
}: {
  mode?: ModeType;
  flavor?: ThemeFlavor;
  children?: React.ReactNode;
  style?: ViewProps['style'];
}) {
  const { colorScheme, setColorScheme } = useColorScheme();

  useEffect(() => {
    setColorScheme(mode);
  }, [mode]);
  const activeConfigKey = `${flavor}-${colorScheme}` as keyof typeof config;
  const activeStyles = config[activeConfigKey] || config['green-light'];
  return (
    <View style={[activeStyles, { flex: 1 }]}>
      <OverlayProvider>
        <ToastProvider>
          <View style={{ flex: 1 }}>
            {props.children}
          </View>
        </ToastProvider>
      </OverlayProvider>
    </View>
  );
}
