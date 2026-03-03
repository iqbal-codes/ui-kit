// Color Tokens - OKLCH-based color system for better perceptual uniformity
// Following Tailwind CSS v4 CSS-first configuration pattern

// Base color palette (brand colors)
export const baseColors = {
  // Primary brand color - Deep indigo
  primary: {
    50: "oklch(97% 0.01 264)",
    100: "oklch(93% 0.03 264)",
    200: "oklch(87% 0.06 264)",
    300: "oklch(78% 0.1 264)",
    400: "oklch(67% 0.15 264)",
    500: "oklch(55% 0.2 264)",
    600: "oklch(45% 0.2 264)",
    700: "oklch(38% 0.17 264)",
    800: "oklch(32% 0.14 264)",
    900: "oklch(26% 0.11 264)",
    950: "oklch(18% 0.08 264)",
  },

  // Neutral gray scale
  gray: {
    50: "oklch(98% 0.002 264)",
    100: "oklch(96% 0.005 264)",
    200: "oklch(92% 0.01 264)",
    300: "oklch(85% 0.015 264)",
    400: "oklch(70% 0.02 264)",
    500: "oklch(55% 0.025 264)",
    600: "oklch(45% 0.025 264)",
    700: "oklch(35% 0.025 264)",
    800: "oklch(25% 0.025 264)",
    900: "oklch(15% 0.025 264)",
    950: "oklch(10% 0.02 264)",
  },

  // Destructive/Error colors - Red
  red: {
    50: "oklch(97% 0.02 27)",
    100: "oklch(93% 0.05 27)",
    200: "oklch(88% 0.1 27)",
    300: "oklch(80% 0.15 27)",
    400: "oklch(68% 0.2 27)",
    500: "oklch(57% 0.23 27)",
    600: "oklch(53% 0.22 27)",
    700: "oklch(45% 0.19 27)",
    800: "oklch(38% 0.16 27)",
    900: "oklch(30% 0.13 27)",
    950: "oklch(18% 0.08 27)",
  },

  // Warning colors - Amber
  amber: {
    50: "oklch(98% 0.02 85)",
    100: "oklch(95% 0.05 85)",
    200: "oklch(90% 0.1 85)",
    300: "oklch(84% 0.15 85)",
    400: "oklch(76% 0.18 85)",
    500: "oklch(68% 0.2 85)",
    600: "oklch(60% 0.18 85)",
    700: "oklch(50% 0.15 85)",
    800: "oklch(42% 0.12 85)",
    900: "oklch(34% 0.1 85)",
    950: "oklch(20% 0.06 85)",
  },

  // Success colors - Green
  green: {
    50: "oklch(98% 0.02 145)",
    100: "oklch(95% 0.04 145)",
    200: "oklch(90% 0.08 145)",
    300: "oklch(83% 0.13 145)",
    400: "oklch(75% 0.17 145)",
    500: "oklch(65% 0.2 145)",
    600: "oklch(55% 0.18 145)",
    700: "oklch(45% 0.15 145)",
    800: "oklch(37% 0.12 145)",
    900: "oklch(29% 0.09 145)",
    950: "oklch(17% 0.05 145)",
  },

  // Info colors - Blue
  blue: {
    50: "oklch(97% 0.02 240)",
    100: "oklch(93% 0.05 240)",
    200: "oklch(87% 0.1 240)",
    300: "oklch(78% 0.15 240)",
    400: "oklch(68% 0.2 240)",
    500: "oklch(58% 0.23 240)",
    600: "oklch(50% 0.22 240)",
    700: "oklch(42% 0.19 240)",
    800: "oklch(35% 0.16 240)",
    900: "oklch(28% 0.13 240)",
    950: "oklch(18% 0.08 240)",
  },
} as const;

// Semantic color tokens - Maps to CSS variables used by components
export const semanticColors = {
  light: {
    background: "oklch(1 0 0)",
    foreground: "oklch(0.129 0.042 264.695)",

    primary: "oklch(0.208 0.042 265.755)",
    "primary-foreground": "oklch(0.984 0.003 247.858)",

    secondary: "oklch(0.968 0.007 247.896)",
    "secondary-foreground": "oklch(0.208 0.042 265.755)",

    muted: "oklch(0.968 0.007 247.896)",
    "muted-foreground": "oklch(0.554 0.046 257.417)",

    accent: "oklch(0.968 0.007 247.896)",
    "accent-foreground": "oklch(0.208 0.042 265.755)",

    destructive: "oklch(0.577 0.245 27.325)",
    "destructive-foreground": "oklch(0.984 0.003 247.858)",

    warning: "oklch(0.68 0.2 85)",
    "warning-foreground": "oklch(0.2 0.06 85)",

    success: "oklch(0.65 0.2 145)",
    "success-foreground": "oklch(0.98 0.02 145)",

    info: "oklch(0.58 0.23 240)",
    "info-foreground": "oklch(0.98 0.02 240)",

    border: "oklch(0.929 0.013 255.508)",
    input: "oklch(0.929 0.013 255.508)",
    ring: "oklch(0.704 0.04 256.788)",
    "ring-offset": "oklch(1 0 0)",

    card: "oklch(1 0 0)",
    "card-foreground": "oklch(0.129 0.042 264.695)",

    popover: "oklch(1 0 0)",
    "popover-foreground": "oklch(0.129 0.042 264.695)",

    sidebar: "oklch(0.984 0.003 247.858)",
    "sidebar-foreground": "oklch(0.129 0.042 264.695)",
    "sidebar-primary": "oklch(0.208 0.042 265.755)",
    "sidebar-primary-foreground": "oklch(0.984 0.003 247.858)",
    "sidebar-accent": "oklch(0.968 0.007 247.896)",
    "sidebar-accent-foreground": "oklch(0.208 0.042 265.755)",
    "sidebar-border": "oklch(0.929 0.013 255.508)",
    "sidebar-ring": "oklch(0.704 0.04 256.788)",

    chart: {
      1: "oklch(0.646 0.222 41.116)",
      2: "oklch(0.6 0.118 184.704)",
      3: "oklch(0.398 0.07 227.392)",
      4: "oklch(0.828 0.189 84.429)",
      5: "oklch(0.769 0.188 70.08)",
    },
  },
  dark: {
    background: "oklch(0.129 0.042 264.695)",
    foreground: "oklch(0.984 0.003 247.858)",

    primary: "oklch(0.929 0.013 255.508)",
    "primary-foreground": "oklch(0.208 0.042 265.755)",

    secondary: "oklch(0.279 0.041 260.031)",
    "secondary-foreground": "oklch(0.984 0.003 247.858)",

    muted: "oklch(0.279 0.041 260.031)",
    "muted-foreground": "oklch(0.704 0.04 256.788)",

    accent: "oklch(0.279 0.041 260.031)",
    "accent-foreground": "oklch(0.984 0.003 247.858)",

    destructive: "oklch(0.704 0.191 22.216)",
    "destructive-foreground": "oklch(0.984 0.003 247.858)",

    warning: "oklch(0.6 0.18 85)",
    "warning-foreground": "oklch(0.2 0.06 85)",

    success: "oklch(0.55 0.18 145)",
    "success-foreground": "oklch(0.98 0.02 145)",

    info: "oklch(0.5 0.22 240)",
    "info-foreground": "oklch(0.98 0.02 240)",

    border: "oklch(1 0 0 / 10%)",
    input: "oklch(1 0 0 / 15%)",
    ring: "oklch(0.551 0.027 264.364)",
    "ring-offset": "oklch(0.129 0.042 264.695)",

    card: "oklch(0.208 0.042 265.755)",
    "card-foreground": "oklch(0.984 0.003 247.858)",

    popover: "oklch(0.208 0.042 265.755)",
    "popover-foreground": "oklch(0.984 0.003 247.858)",

    sidebar: "oklch(0.208 0.042 265.755)",
    "sidebar-foreground": "oklch(0.984 0.003 247.858)",
    "sidebar-primary": "oklch(0.488 0.243 264.376)",
    "sidebar-primary-foreground": "oklch(0.984 0.003 247.858)",
    "sidebar-accent": "oklch(0.279 0.041 260.031)",
    "sidebar-accent-foreground": "oklch(0.984 0.003 247.858)",
    "sidebar-border": "oklch(1 0 0 / 10%)",
    "sidebar-ring": "oklch(0.551 0.027 264.364)",

    chart: {
      1: "oklch(0.488 0.243 264.376)",
      2: "oklch(0.696 0.17 162.48)",
      3: "oklch(0.769 0.188 70.08)",
      4: "oklch(0.627 0.265 303.9)",
      5: "oklch(0.645 0.246 16.439)",
    },
  },
} as const;

// Export type definitions
export type BaseColors = typeof baseColors;
export type SemanticColors = typeof semanticColors;
export type ColorScale = keyof typeof baseColors.primary;
