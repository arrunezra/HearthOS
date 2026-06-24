const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
const { wrapWithReanimatedMetroConfig } = require('react-native-reanimated/metro-config');
const { withNativeWind } = require('nativewind/metro');

/**
 * Metro configuration
 * https://metrobundler.dev/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */
const defaultConfig = getDefaultConfig(__dirname);

const customConfig = {
    resolver: {
        // Ensuring modern library compatibility
        sourceExts: [...defaultConfig.resolver.sourceExts, 'mjs'],

        // This solves the "Unable to resolve module react-dom" error
        extraNodeModules: {
            'react-dom': require.resolve('react-native'),
        },
    },
};

// 1. Merge default with custom
const mergedConfig = mergeConfig(defaultConfig, customConfig);

// 2. Wrap with Reanimated (v4+ logic)
const reanimatedConfig = wrapWithReanimatedMetroConfig(mergedConfig);

// 3. Finally, export with NativeWind
module.exports = withNativeWind(reanimatedConfig, { input: './global.css' });