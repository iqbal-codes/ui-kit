// Design Tokens - Centralized design system tokens
// Following Tailwind CSS v4 CSS-first configuration with OKLCH colors

export * from "./animations";
// Export all token categories
export * from "./colors";
export * from "./spacing";
export * from "./typography";

import { animations, durations, easings, keyframes, transitions } from "./animations";
// Combined tokens object for easy access
import { baseColors, semanticColors } from "./colors";
import {
  baseRadius,
  borderRadius,
  breakpoints,
  container,
  grid,
  semanticSpacing,
  shadows,
  spacing,
  zIndex,
} from "./spacing";
import {
  fontFamilies,
  fontSizes,
  fontWeights,
  letterSpacings,
  lineHeights,
  typography,
} from "./typography";

export const tokens = {
  // Colors
  colors: {
    base: baseColors,
    semantic: semanticColors,
  },

  // Typography
  typography: {
    fontFamilies,
    fontSizes,
    fontWeights,
    lineHeights,
    letterSpacings,
    styles: typography,
  },

  // Spacing & Layout
  spacing: {
    scale: spacing,
    semantic: semanticSpacing,
    borderRadius,
    baseRadius,
    container,
    breakpoints,
    zIndex,
    shadows,
    grid,
  },

  // Animations
  animation: {
    durations,
    easings,
    animations,
    keyframes,
    transitions,
  },
} as const;

// Type export for the complete token structure
export type Tokens = typeof tokens;
