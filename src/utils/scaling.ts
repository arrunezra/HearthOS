// src/utils/scaling.ts
import { Dimensions } from 'react-native';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

// Guideline sizes are based on standard design specs (e.g., iPhone 11/X baseline width)
const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

/**
 * Scales a size horizontally based on device width.
 * Best for: Widths, padding, margins, icon sizes.
 */
export const scale = (size: number) => (SCREEN_WIDTH / guidelineBaseWidth) * size;

/**
 * Scales a size vertically based on device height.
 * Best for: Component heights.
 */
export const verticalScale = (size: number) => (SCREEN_HEIGHT / guidelineBaseHeight) * size;

/**
 * Moderates the scaling factor so sizes don't explode on tablets.
 * Best for: Typography / Font Sizes.
 */
export const moderateScale = (size: number, factor = 0.5) => size + (scale(size) - size) * factor;