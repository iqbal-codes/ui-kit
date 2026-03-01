// Color Tokens - OKLCH-based color system for better perceptual uniformity
// Following Tailwind CSS v4 CSS-first configuration pattern

// Base color palette (brand colors)
export const baseColors = {
  // Primary brand color - Deep indigo
  primary: {
    50: 'oklch(97% 0.01 264)',
    100: 'oklch(93% 0.03 264)',
    200: 'oklch(87% 0.06 264)',
    300: 'oklch(78% 0.1 264)',
    400: 'oklch(67% 0.15 264)',
    500: 'oklch(55% 0.2 264)',
    600: 'oklch(45% 0.2 264)',
    700: 'oklch(38% 0.17 264)',
    800: 'oklch(32% 0.14 264)',
    900: 'oklch(26% 0.11 264)',
    950: 'oklch(18% 0.08 264)',
  },

  // Neutral gray scale
  gray: {
    50: 'oklch(98% 0.002 264)',
    100: 'oklch(96% 0.005 264)',
    200: 'oklch(92% 0.01 264)',
    300: 'oklch(85% 0.015 264)',
    400: 'oklch(70% 0.02 264)',
    500: 'oklch(55% 0.025 264)',
    600: 'oklch(45% 0.025 264)',
    700: 'oklch(35% 0.025 264)',
    800: 'oklch(25% 0.025 264)',
    900: 'oklch(15% 0.025 264)',
    950: 'oklch(10% 0.02 264)',
  },

  // Destructive/Error colors - Red
  red: {
    50: 'oklch(97% 0.02 27)',
    100: 'oklch(93% 0.05 27)',
    200: 'oklch(88% 0.1 27)',
    300: 'oklch(80% 0.15 27)',
    400: 'oklch(68% 0.2 27)',
    500: 'oklch(57% 0.23 27)',
    600: 'oklch(53% 0.22 27)',
    700: 'oklch(45% 0.19 27)',
    800: 'oklch(38% 0.16 27)',
    900: 'oklch(30% 0.13 27)',
    950: 'oklch(18% 0.08 27)',
  },

  // Warning colors - Amber
  amber: {
    50: 'oklch(98% 0.02 85)',
    100: 'oklch(95% 0.05 85)',
    200: 'oklch(90% 0.1 85)',
    300: 'oklch(84% 0.15 85)',
    400: 'oklch(76% 0.18 85)',
    500: 'oklch(68% 0.2 85)',
    600: 'oklch(60% 0.18 85)',
    700: 'oklch(50% 0.15 85)',
    800: 'oklch(42% 0.12 85)',
    900: 'oklch(34% 0.1 85)',
    950: 'oklch(20% 0.06 85)',
  },

  // Success colors - Green
  green: {
    50: 'oklch(98% 0.02 145)',
    100: 'oklch(95% 0.04 145)',
    200: 'oklch(90% 0.08 145)',
    300: 'oklch(83% 0.13 145)',
    400: 'oklch(75% 0.17 145)',
    500: 'oklch(65% 0.2 145)',
    600: 'oklch(55% 0.18 145)',
    700: 'oklch(45% 0.15 145)',
    800: 'oklch(37% 0.12 145)',
    900: 'oklch(29% 0.09 145)',
    950: 'oklch(17% 0.05 145)',
  },

  // Info colors - Blue
  blue: {
    50: 'oklch(97% 0.02 240)',
    100: 'oklch(93% 0.05 240)',
    200: 'oklch(87% 0.1 240)',
    300: 'oklch(78% 0.15 240)',
    400: 'oklch(68% 0.2 240)',
    500: 'oklch(58% 0.23 240)',
    600: 'oklch(50% 0.22 240)',
    700: 'oklch(42% 0.19 240)',
    800: 'oklch(35% 0.16 240)',
    900: 'oklch(28% 0.13 240)',
    950: 'oklch(18% 0.08 240)',
  },
} as const

// Semantic color tokens - Maps to CSS variables used by components
export const semanticColors = {
  light: {
    background: 'oklch(100% 0 0)',
    foreground: 'oklch(14.5% 0.025 264)',

    primary: 'oklch(45% 0.2 264)',
    'primary-foreground': 'oklch(98% 0.01 264)',

    secondary: 'oklch(96% 0.01 264)',
    'secondary-foreground': 'oklch(14.5% 0.025 264)',

    muted: 'oklch(96% 0.01 264)',
    'muted-foreground': 'oklch(46% 0.02 264)',

    accent: 'oklch(96% 0.01 264)',
    'accent-foreground': 'oklch(14.5% 0.025 264)',

    destructive: 'oklch(53% 0.22 27)',
    'destructive-foreground': 'oklch(98% 0.01 264)',

    warning: 'oklch(68% 0.2 85)',
    'warning-foreground': 'oklch(20% 0.06 85)',

    success: 'oklch(65% 0.2 145)',
    'success-foreground': 'oklch(98% 0.02 145)',

    info: 'oklch(58% 0.23 240)',
    'info-foreground': 'oklch(98% 0.02 240)',

    border: 'oklch(91% 0.01 264)',
    input: 'oklch(91% 0.01 264)',
    ring: 'oklch(45% 0.2 264)',
    'ring-offset': 'oklch(100% 0 0)',

    card: 'oklch(100% 0 0)',
    'card-foreground': 'oklch(14.5% 0.025 264)',

    popover: 'oklch(100% 0 0)',
    'popover-foreground': 'oklch(14.5% 0.025 264)',

    sidebar: 'oklch(98% 0.01 264)',
    'sidebar-foreground': 'oklch(14.5% 0.025 264)',
    'sidebar-primary': 'oklch(45% 0.2 264)',
    'sidebar-primary-foreground': 'oklch(98% 0.01 264)',
    'sidebar-accent': 'oklch(96% 0.01 264)',
    'sidebar-accent-foreground': 'oklch(14.5% 0.025 264)',
    'sidebar-border': 'oklch(91% 0.01 264)',
    'sidebar-ring': 'oklch(45% 0.2 264)',

    chart: {
      1: 'oklch(55% 0.2 264)',
      2: 'oklch(65% 0.2 145)',
      3: 'oklch(68% 0.2 85)',
      4: 'oklch(58% 0.23 240)',
      5: 'oklch(67% 0.15 264)',
    },
  },
  dark: {
    background: 'oklch(14.5% 0.025 264)',
    foreground: 'oklch(98% 0.01 264)',

    primary: 'oklch(98% 0.01 264)',
    'primary-foreground': 'oklch(14.5% 0.025 264)',

    secondary: 'oklch(22% 0.02 264)',
    'secondary-foreground': 'oklch(98% 0.01 264)',

    muted: 'oklch(22% 0.02 264)',
    'muted-foreground': 'oklch(65% 0.02 264)',

    accent: 'oklch(22% 0.02 264)',
    'accent-foreground': 'oklch(98% 0.01 264)',

    destructive: 'oklch(42% 0.15 27)',
    'destructive-foreground': 'oklch(98% 0.01 264)',

    warning: 'oklch(60% 0.18 85)',
    'warning-foreground': 'oklch(20% 0.06 85)',

    success: 'oklch(55% 0.18 145)',
    'success-foreground': 'oklch(98% 0.02 145)',

    info: 'oklch(50% 0.22 240)',
    'info-foreground': 'oklch(98% 0.02 240)',

    border: 'oklch(22% 0.02 264)',
    input: 'oklch(22% 0.02 264)',
    ring: 'oklch(83% 0.02 264)',
    'ring-offset': 'oklch(14.5% 0.025 264)',

    card: 'oklch(14.5% 0.025 264)',
    'card-foreground': 'oklch(98% 0.01 264)',

    popover: 'oklch(14.5% 0.025 264)',
    'popover-foreground': 'oklch(98% 0.01 264)',

    sidebar: 'oklch(12% 0.02 264)',
    'sidebar-foreground': 'oklch(98% 0.01 264)',
    'sidebar-primary': 'oklch(83% 0.02 264)',
    'sidebar-primary-foreground': 'oklch(14.5% 0.025 264)',
    'sidebar-accent': 'oklch(22% 0.02 264)',
    'sidebar-accent-foreground': 'oklch(98% 0.01 264)',
    'sidebar-border': 'oklch(22% 0.02 264)',
    'sidebar-ring': 'oklch(83% 0.02 264)',

    chart: {
      1: 'oklch(67% 0.15 264)',
      2: 'oklch(75% 0.17 145)',
      3: 'oklch(76% 0.18 85)',
      4: 'oklch(68% 0.2 240)',
      5: 'oklch(78% 0.15 264)',
    },
  },
} as const

// Export type definitions
export type BaseColors = typeof baseColors
export type SemanticColors = typeof semanticColors
export type ColorScale = keyof typeof baseColors.primary
