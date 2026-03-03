// Spacing & Layout Tokens - Consistent spacing scale and layout values
// Following Tailwind CSS v4 CSS-first configuration pattern

// Spacing scale (in rem) - Matches Tailwind's default with additional values
export const spacing = {
  0: "0px",
  px: "1px",
  0.5: "0.125rem", // 2px
  1: "0.25rem", // 4px
  1.5: "0.375rem", // 6px
  2: "0.5rem", // 8px
  2.5: "0.625rem", // 10px
  3: "0.75rem", // 12px
  3.5: "0.875rem", // 14px
  4: "1rem", // 16px
  5: "1.25rem", // 20px
  6: "1.5rem", // 24px
  7: "1.75rem", // 28px
  8: "2rem", // 32px
  9: "2.25rem", // 36px
  10: "2.5rem", // 40px
  11: "2.75rem", // 44px
  12: "3rem", // 48px
  14: "3.5rem", // 56px
  16: "4rem", // 64px
  20: "5rem", // 80px
  24: "6rem", // 96px
  28: "7rem", // 112px
  32: "8rem", // 128px
  36: "9rem", // 144px
  40: "10rem", // 160px
  44: "11rem", // 176px
  48: "12rem", // 192px
  52: "13rem", // 208px
  56: "14rem", // 224px
  60: "15rem", // 240px
  64: "16rem", // 256px
  72: "18rem", // 288px
  80: "20rem", // 320px
  96: "24rem", // 384px
} as const;

// Semantic spacing tokens
export const semanticSpacing = {
  // Component padding
  "component-xs": spacing[1], // 4px - Tight padding
  "component-sm": spacing[2], // 8px - Compact padding
  "component-md": spacing[3], // 12px - Default padding
  "component-lg": spacing[4], // 16px - Comfortable padding
  "component-xl": spacing[6], // 24px - Spacious padding

  // Gap between elements
  "gap-xs": spacing[1], // 4px
  "gap-sm": spacing[2], // 8px
  "gap-md": spacing[4], // 16px
  "gap-lg": spacing[6], // 24px
  "gap-xl": spacing[8], // 32px
  "gap-2xl": spacing[12], // 48px

  // Section spacing
  "section-sm": spacing[8], // 32px
  "section-md": spacing[12], // 48px
  "section-lg": spacing[16], // 64px
  "section-xl": spacing[24], // 96px
  "section-2xl": spacing[32], // 128px
} as const;

// Border radius tokens
export const borderRadius = {
  none: "0px",
  sm: "0.375rem", // calc(0.625rem - 4px)
  DEFAULT: "0.5rem", // calc(0.625rem - 2px)
  md: "0.5rem", // calc(0.625rem - 2px)
  lg: "0.625rem", // var(--radius)
  xl: "0.875rem", // calc(0.625rem + 4px)
  "2xl": "1.125rem", // calc(0.625rem + 8px)
  "3xl": "1.375rem", // calc(0.625rem + 12px)
  "4xl": "1.625rem", // calc(0.625rem + 16px)
  full: "9999px",
} as const;

// Base radius value (matches --radius in globals.css)
export const baseRadius = "0.625rem" as const;

// Container max-widths
export const container = {
  xs: "20rem", // 320px
  sm: "24rem", // 384px
  md: "28rem", // 448px
  lg: "32rem", // 512px
  xl: "36rem", // 576px
  "2xl": "42rem", // 672px
  "3xl": "48rem", // 768px
  "4xl": "56rem", // 896px
  "5xl": "64rem", // 1024px
  "6xl": "72rem", // 1152px
  "7xl": "80rem", // 1280px
  prose: "65ch",
} as const;

// Breakpoints (in pixels) - Matches Tailwind defaults
export const breakpoints = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
} as const;

// Z-index scale
export const zIndex = {
  hide: -1,
  auto: "auto",
  base: 0,
  docked: 10,
  dropdown: 1000,
  sticky: 1100,
  banner: 1200,
  overlay: 1300,
  modal: 1400,
  popover: 1500,
  skipLink: 1600,
  toast: 1700,
  tooltip: 1800,
} as const;

// Shadow tokens
export const shadows = {
  none: "none",
  xs: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
  sm: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
  DEFAULT: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
  md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
  lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
  xl: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
  "2xl": "0 25px 50px -12px rgb(0 0 0 / 0.25)",
  inner: "inset 0 2px 4px 0 rgb(0 0 0 / 0.05)",
} as const;

// Grid configuration
export const grid = {
  columns: 12,
  gutter: spacing[6], // 24px
  gutterMobile: spacing[4], // 16px
  margin: spacing[4], // 16px
  marginMobile: spacing[4], // 16px
} as const;

// Export type definitions
export type Spacing = typeof spacing;
export type SemanticSpacing = typeof semanticSpacing;
export type BorderRadius = typeof borderRadius;
export type BaseRadius = typeof baseRadius;
export type Container = typeof container;
export type Breakpoints = typeof breakpoints;
export type ZIndex = typeof zIndex;
export type Shadows = typeof shadows;
export type Grid = typeof grid;
