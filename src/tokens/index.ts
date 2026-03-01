// Design Tokens - Centralized design system tokens
// Following Tailwind CSS v4 CSS-first configuration with OKLCH colors

// Export all token categories
export * from './colors'
export * from './typography'
export * from './spacing'
export * from './animations'

// Combined tokens object for easy access
import { baseColors, semanticColors } from './colors'
import { fontFamilies, fontSizes, fontWeights, lineHeights, letterSpacings, typography } from './typography'
import { spacing, semanticSpacing, borderRadius, container, breakpoints, zIndex, shadows, grid } from './spacing'
import { durations, easings, animations, keyframes, transitions } from './animations'

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
} as const

// Type export for the complete token structure
export type Tokens = typeof tokens
