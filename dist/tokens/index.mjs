// src/tokens/animations.ts
var durations = {
  instant: "0s",
  fastest: "0.05s",
  faster: "0.1s",
  fast: "0.15s",
  normal: "0.2s",
  slow: "0.3s",
  slower: "0.4s",
  slowest: "0.5s"
};
var easings = {
  // Standard easings
  linear: "linear",
  ease: "ease",
  "ease-in": "ease-in",
  "ease-out": "ease-out",
  "ease-in-out": "ease-in-out",
  // Custom cubic-bezier easings
  "ease-out-quad": "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
  "ease-out-cubic": "cubic-bezier(0.215, 0.61, 0.355, 1)",
  "ease-out-quart": "cubic-bezier(0.165, 0.84, 0.44, 1)",
  "ease-out-back": "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
  "ease-in-quad": "cubic-bezier(0.55, 0.085, 0.68, 0.53)",
  "ease-in-cubic": "cubic-bezier(0.55, 0.055, 0.675, 0.19)",
  "ease-in-quart": "cubic-bezier(0.895, 0.03, 0.685, 0.22)",
  "ease-in-back": "cubic-bezier(0.6, -0.28, 0.735, 0.045)",
  "ease-in-out-quad": "cubic-bezier(0.455, 0.03, 0.515, 0.955)",
  "ease-in-out-cubic": "cubic-bezier(0.645, 0.045, 0.355, 1)",
  "ease-in-out-quart": "cubic-bezier(0.77, 0, 0.175, 1)",
  "ease-in-out-back": "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
  // Spring easings
  spring: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
  "spring-soft": "cubic-bezier(0.34, 1.56, 0.64, 1)"
};
var animations = {
  // Fade animations
  "fade-in": {
    duration: durations.normal,
    easing: easings["ease-out"],
    keyframe: "fade-in"
  },
  "fade-out": {
    duration: durations.fast,
    easing: easings["ease-in"],
    keyframe: "fade-out"
  },
  // Scale animations
  "scale-in": {
    duration: durations.normal,
    easing: easings["ease-out-back"],
    keyframe: "scale-in"
  },
  "scale-out": {
    duration: durations.fast,
    easing: easings["ease-in"],
    keyframe: "scale-out"
  },
  // Slide animations
  "slide-in-from-top": {
    duration: durations.normal,
    easing: easings["ease-out"],
    keyframe: "slide-in-from-top"
  },
  "slide-in-from-bottom": {
    duration: durations.normal,
    easing: easings["ease-out"],
    keyframe: "slide-in-from-bottom"
  },
  "slide-in-from-left": {
    duration: durations.normal,
    easing: easings["ease-out"],
    keyframe: "slide-in-from-left"
  },
  "slide-in-from-right": {
    duration: durations.normal,
    easing: easings["ease-out"],
    keyframe: "slide-in-from-right"
  },
  // Dialog/Modal animations
  "dialog-in": {
    duration: durations.normal,
    easing: easings["ease-out-cubic"],
    keyframe: "dialog-in"
  },
  "dialog-out": {
    duration: durations.fast,
    easing: easings["ease-in-cubic"],
    keyframe: "dialog-out"
  },
  // Popover/Dropdown animations
  "popover-in": {
    duration: durations.fast,
    easing: easings["ease-out-quad"],
    keyframe: "popover-in"
  },
  "popover-out": {
    duration: durations.faster,
    easing: easings["ease-in-quad"],
    keyframe: "popover-out"
  },
  // Collapsible animations
  "accordion-down": {
    duration: durations.normal,
    easing: easings["ease-out"],
    keyframe: "accordion-down"
  },
  "accordion-up": {
    duration: durations.normal,
    easing: easings["ease-out"],
    keyframe: "accordion-up"
  },
  // Spinner/Loading animations
  spin: {
    duration: "1s",
    easing: easings.linear,
    keyframe: "spin"
  },
  pulse: {
    duration: "2s",
    easing: easings.ease,
    keyframe: "pulse"
  },
  bounce: {
    duration: "1s",
    easing: easings.ease,
    keyframe: "bounce"
  }
};
var keyframes = {
  // Fade keyframes
  "fade-in": {
    from: { opacity: "0" },
    to: { opacity: "1" }
  },
  "fade-out": {
    from: { opacity: "1" },
    to: { opacity: "0" }
  },
  // Scale keyframes
  "scale-in": {
    from: { opacity: "0", transform: "scale(0.95)" },
    to: { opacity: "1", transform: "scale(1)" }
  },
  "scale-out": {
    from: { opacity: "1", transform: "scale(1)" },
    to: { opacity: "0", transform: "scale(0.95)" }
  },
  // Slide keyframes
  "slide-in-from-top": {
    from: { opacity: "0", transform: "translateY(-0.5rem)" },
    to: { opacity: "1", transform: "translateY(0)" }
  },
  "slide-in-from-bottom": {
    from: { opacity: "0", transform: "translateY(0.5rem)" },
    to: { opacity: "1", transform: "translateY(0)" }
  },
  "slide-in-from-left": {
    from: { opacity: "0", transform: "translateX(-0.5rem)" },
    to: { opacity: "1", transform: "translateX(0)" }
  },
  "slide-in-from-right": {
    from: { opacity: "0", transform: "translateX(0.5rem)" },
    to: { opacity: "1", transform: "translateX(0)" }
  },
  // Dialog keyframes
  "dialog-in": {
    from: { opacity: "0", transform: "scale(0.95) translateY(-0.5rem)" },
    to: { opacity: "1", transform: "scale(1) translateY(0)" }
  },
  "dialog-out": {
    from: { opacity: "1", transform: "scale(1) translateY(0)" },
    to: { opacity: "0", transform: "scale(0.95) translateY(-0.5rem)" }
  },
  // Popover keyframes
  "popover-in": {
    from: { opacity: "0", transform: "scale(0.98) translateY(-0.25rem)" },
    to: { opacity: "1", transform: "scale(1) translateY(0)" }
  },
  "popover-out": {
    from: { opacity: "1", transform: "scale(1) translateY(0)" },
    to: { opacity: "0", transform: "scale(0.98) translateY(-0.25rem)" }
  },
  // Accordion keyframes
  "accordion-down": {
    from: { height: "0", opacity: "0" },
    to: { height: "var(--radix-accordion-content-height)", opacity: "1" }
  },
  "accordion-up": {
    from: { height: "var(--radix-accordion-content-height)", opacity: "1" },
    to: { height: "0", opacity: "0" }
  },
  // Loading keyframes
  spin: {
    from: { transform: "rotate(0deg)" },
    to: { transform: "rotate(360deg)" }
  },
  pulse: {
    "0%, 100%": { opacity: "1" },
    "50%": { opacity: "0.5" }
  },
  bounce: {
    "0%, 100%": {
      transform: "translateY(-25%)",
      animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)"
    },
    "50%": { transform: "translateY(0)", animationTimingFunction: "cubic-bezier(0, 0, 0.2, 1)" }
  }
};
var animationCSS = {
  // Animation variables
  "--animate-fade-in": `${durations.normal} ${easings["ease-out"]} fade-in`,
  "--animate-fade-out": `${durations.fast} ${easings["ease-in"]} fade-out`,
  "--animate-scale-in": `${durations.normal} ${easings["ease-out-back"]} scale-in`,
  "--animate-scale-out": `${durations.fast} ${easings["ease-in"]} scale-out`,
  "--animate-slide-in": `${durations.normal} ${easings["ease-out"]} slide-in-from-bottom`,
  "--animate-slide-out": `${durations.fast} ${easings["ease-in"]} slide-out`,
  "--animate-dialog-in": `${durations.normal} ${easings["ease-out-cubic"]} dialog-in`,
  "--animate-dialog-out": `${durations.fast} ${easings["ease-in-cubic"]} dialog-out`,
  "--animate-popover-in": `${durations.fast} ${easings["ease-out-quad"]} popover-in`,
  "--animate-popover-out": `${durations.faster} ${easings["ease-in-quad"]} popover-out`,
  "--animate-accordion-down": `${durations.normal} ${easings["ease-out"]} accordion-down`,
  "--animate-accordion-up": `${durations.normal} ${easings["ease-out"]} accordion-up`,
  "--animate-spin": `1s ${easings.linear} spin`,
  "--animate-pulse": `2s ${easings.ease} pulse`,
  "--animate-bounce": `1s ${easings.ease} bounce`
};
var transitions = {
  default: `all ${durations.normal} ${easings["ease-in-out"]}`,
  colors: `color, background-color, border-color, text-decoration-color, fill, stroke ${durations.normal} ${easings["ease-in-out"]}`,
  opacity: `opacity ${durations.normal} ${easings["ease-in-out"]}`,
  shadow: `box-shadow ${durations.normal} ${easings["ease-in-out"]}`,
  transform: `transform ${durations.normal} ${easings["ease-in-out"]}`,
  none: "none"
};

// src/tokens/colors.ts
var baseColors = {
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
    950: "oklch(18% 0.08 264)"
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
    950: "oklch(10% 0.02 264)"
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
    950: "oklch(18% 0.08 27)"
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
    950: "oklch(20% 0.06 85)"
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
    950: "oklch(17% 0.05 145)"
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
    950: "oklch(18% 0.08 240)"
  }
};
var semanticColors = {
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
      5: "oklch(0.769 0.188 70.08)"
    }
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
      5: "oklch(0.645 0.246 16.439)"
    }
  }
};

// src/tokens/spacing.ts
var spacing = {
  0: "0px",
  px: "1px",
  0.5: "0.125rem",
  // 2px
  1: "0.25rem",
  // 4px
  1.5: "0.375rem",
  // 6px
  2: "0.5rem",
  // 8px
  2.5: "0.625rem",
  // 10px
  3: "0.75rem",
  // 12px
  3.5: "0.875rem",
  // 14px
  4: "1rem",
  // 16px
  5: "1.25rem",
  // 20px
  6: "1.5rem",
  // 24px
  7: "1.75rem",
  // 28px
  8: "2rem",
  // 32px
  9: "2.25rem",
  // 36px
  10: "2.5rem",
  // 40px
  11: "2.75rem",
  // 44px
  12: "3rem",
  // 48px
  14: "3.5rem",
  // 56px
  16: "4rem",
  // 64px
  20: "5rem",
  // 80px
  24: "6rem",
  // 96px
  28: "7rem",
  // 112px
  32: "8rem",
  // 128px
  36: "9rem",
  // 144px
  40: "10rem",
  // 160px
  44: "11rem",
  // 176px
  48: "12rem",
  // 192px
  52: "13rem",
  // 208px
  56: "14rem",
  // 224px
  60: "15rem",
  // 240px
  64: "16rem",
  // 256px
  72: "18rem",
  // 288px
  80: "20rem",
  // 320px
  96: "24rem"
  // 384px
};
var semanticSpacing = {
  // Component padding
  "component-xs": spacing[1],
  // 4px - Tight padding
  "component-sm": spacing[2],
  // 8px - Compact padding
  "component-md": spacing[3],
  // 12px - Default padding
  "component-lg": spacing[4],
  // 16px - Comfortable padding
  "component-xl": spacing[6],
  // 24px - Spacious padding
  // Gap between elements
  "gap-xs": spacing[1],
  // 4px
  "gap-sm": spacing[2],
  // 8px
  "gap-md": spacing[4],
  // 16px
  "gap-lg": spacing[6],
  // 24px
  "gap-xl": spacing[8],
  // 32px
  "gap-2xl": spacing[12],
  // 48px
  // Section spacing
  "section-sm": spacing[8],
  // 32px
  "section-md": spacing[12],
  // 48px
  "section-lg": spacing[16],
  // 64px
  "section-xl": spacing[24],
  // 96px
  "section-2xl": spacing[32]
  // 128px
};
var borderRadius = {
  none: "0px",
  sm: "0.375rem",
  // calc(0.625rem - 4px)
  DEFAULT: "0.5rem",
  // calc(0.625rem - 2px)
  md: "0.5rem",
  // calc(0.625rem - 2px)
  lg: "0.625rem",
  // var(--radius)
  xl: "0.875rem",
  // calc(0.625rem + 4px)
  "2xl": "1.125rem",
  // calc(0.625rem + 8px)
  "3xl": "1.375rem",
  // calc(0.625rem + 12px)
  "4xl": "1.625rem",
  // calc(0.625rem + 16px)
  full: "9999px"
};
var baseRadius = "0.625rem";
var container = {
  xs: "20rem",
  // 320px
  sm: "24rem",
  // 384px
  md: "28rem",
  // 448px
  lg: "32rem",
  // 512px
  xl: "36rem",
  // 576px
  "2xl": "42rem",
  // 672px
  "3xl": "48rem",
  // 768px
  "4xl": "56rem",
  // 896px
  "5xl": "64rem",
  // 1024px
  "6xl": "72rem",
  // 1152px
  "7xl": "80rem",
  // 1280px
  prose: "65ch"
};
var breakpoints = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px"
};
var zIndex = {
  hide: -1,
  auto: "auto",
  base: 0,
  docked: 10,
  dropdown: 1e3,
  sticky: 1100,
  banner: 1200,
  overlay: 1300,
  modal: 1400,
  popover: 1500,
  skipLink: 1600,
  toast: 1700,
  tooltip: 1800
};
var shadows = {
  none: "none",
  xs: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
  sm: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
  DEFAULT: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
  md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
  lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
  xl: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
  "2xl": "0 25px 50px -12px rgb(0 0 0 / 0.25)",
  inner: "inset 0 2px 4px 0 rgb(0 0 0 / 0.05)"
};
var grid = {
  columns: 12,
  gutter: spacing[6],
  // 24px
  gutterMobile: spacing[4],
  // 16px
  margin: spacing[4],
  // 16px
  marginMobile: spacing[4]
  // 16px
};

// src/tokens/typography.ts
var fontFamilies = {
  sans: [
    "var(--font-geist-sans)",
    "system-ui",
    "-apple-system",
    "BlinkMacSystemFont",
    '"Segoe UI"',
    "Roboto",
    '"Helvetica Neue"',
    "Arial",
    '"Noto Sans"',
    "sans-serif",
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
    '"Noto Color Emoji"'
  ].join(", "),
  serif: ["ui-serif", "Georgia", "Cambria", '"Times New Roman"', "Times", "serif"].join(", "),
  mono: [
    "var(--font-geist-mono)",
    "ui-monospace",
    "SFMono-Regular",
    '"SF Mono"',
    "Menlo",
    "Consolas",
    '"Liberation Mono"',
    "monospace"
  ].join(", ")
};
var fontSizes = {
  xs: "0.75rem",
  // 12px
  sm: "0.875rem",
  // 14px
  base: "1rem",
  // 16px
  lg: "1.125rem",
  // 18px
  xl: "1.25rem",
  // 20px
  "2xl": "1.5rem",
  // 24px
  "3xl": "1.875rem",
  // 30px
  "4xl": "2.25rem",
  // 36px
  "5xl": "3rem",
  // 48px
  "6xl": "3.75rem",
  // 60px
  "7xl": "4.5rem",
  // 72px
  "8xl": "6rem",
  // 96px
  "9xl": "8rem"
  // 128px
};
var fontWeights = {
  thin: "100",
  extralight: "200",
  light: "300",
  normal: "400",
  medium: "500",
  semibold: "600",
  bold: "700",
  extrabold: "800",
  black: "900"
};
var lineHeights = {
  none: "1",
  tight: "1.25",
  snug: "1.375",
  normal: "1.5",
  relaxed: "1.625",
  loose: "2",
  3: "0.75rem",
  4: "1rem",
  5: "1.25rem",
  6: "1.5rem",
  7: "1.75rem",
  8: "2rem",
  9: "2.25rem",
  10: "2.5rem"
};
var letterSpacings = {
  tighter: "-0.05em",
  tight: "-0.025em",
  normal: "0em",
  wide: "0.025em",
  wider: "0.05em",
  widest: "0.1em"
};
var typography = {
  // Display styles
  display: {
    large: {
      fontSize: fontSizes["6xl"],
      fontWeight: fontWeights.bold,
      lineHeight: lineHeights.tight,
      letterSpacing: letterSpacings.tight
    },
    medium: {
      fontSize: fontSizes["5xl"],
      fontWeight: fontWeights.bold,
      lineHeight: lineHeights.tight,
      letterSpacing: letterSpacings.tight
    },
    small: {
      fontSize: fontSizes["4xl"],
      fontWeight: fontWeights.bold,
      lineHeight: lineHeights.tight,
      letterSpacing: letterSpacings.tight
    }
  },
  // Heading styles
  heading: {
    h1: {
      fontSize: fontSizes["4xl"],
      fontWeight: fontWeights.bold,
      lineHeight: lineHeights.tight,
      letterSpacing: letterSpacings.tight
    },
    h2: {
      fontSize: fontSizes["3xl"],
      fontWeight: fontWeights.semibold,
      lineHeight: lineHeights.tight,
      letterSpacing: letterSpacings.tight
    },
    h3: {
      fontSize: fontSizes["2xl"],
      fontWeight: fontWeights.semibold,
      lineHeight: lineHeights.snug,
      letterSpacing: letterSpacings.normal
    },
    h4: {
      fontSize: fontSizes.xl,
      fontWeight: fontWeights.semibold,
      lineHeight: lineHeights.snug,
      letterSpacing: letterSpacings.normal
    },
    h5: {
      fontSize: fontSizes.lg,
      fontWeight: fontWeights.semibold,
      lineHeight: lineHeights.snug,
      letterSpacing: letterSpacings.normal
    },
    h6: {
      fontSize: fontSizes.base,
      fontWeight: fontWeights.semibold,
      lineHeight: lineHeights.normal,
      letterSpacing: letterSpacings.wide
    }
  },
  // Body text styles
  body: {
    large: {
      fontSize: fontSizes.lg,
      fontWeight: fontWeights.normal,
      lineHeight: lineHeights.relaxed,
      letterSpacing: letterSpacings.normal
    },
    base: {
      fontSize: fontSizes.base,
      fontWeight: fontWeights.normal,
      lineHeight: lineHeights.normal,
      letterSpacing: letterSpacings.normal
    },
    small: {
      fontSize: fontSizes.sm,
      fontWeight: fontWeights.normal,
      lineHeight: lineHeights.normal,
      letterSpacing: letterSpacings.normal
    },
    xs: {
      fontSize: fontSizes.xs,
      fontWeight: fontWeights.normal,
      lineHeight: lineHeights.normal,
      letterSpacing: letterSpacings.wide
    }
  },
  // UI element styles
  ui: {
    button: {
      fontSize: fontSizes.sm,
      fontWeight: fontWeights.medium,
      lineHeight: lineHeights.none,
      letterSpacing: letterSpacings.wide
    },
    label: {
      fontSize: fontSizes.sm,
      fontWeight: fontWeights.medium,
      lineHeight: lineHeights.none,
      letterSpacing: letterSpacings.normal
    },
    caption: {
      fontSize: fontSizes.xs,
      fontWeight: fontWeights.normal,
      lineHeight: lineHeights.normal,
      letterSpacing: letterSpacings.wide
    },
    overline: {
      fontSize: fontSizes.xs,
      fontWeight: fontWeights.medium,
      lineHeight: lineHeights.normal,
      letterSpacing: letterSpacings.widest,
      textTransform: "uppercase"
    }
  }
};

// src/tokens/index.ts
var tokens = {
  // Colors
  colors: {
    base: baseColors,
    semantic: semanticColors
  },
  // Typography
  typography: {
    fontFamilies,
    fontSizes,
    fontWeights,
    lineHeights,
    letterSpacings,
    styles: typography
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
    grid
  },
  // Animations
  animation: {
    durations,
    easings,
    animations,
    keyframes,
    transitions
  }
};

export { animationCSS, animations, baseColors, baseRadius, borderRadius, breakpoints, container, durations, easings, fontFamilies, fontSizes, fontWeights, grid, keyframes, letterSpacings, lineHeights, semanticColors, semanticSpacing, shadows, spacing, tokens, transitions, typography, zIndex };
//# sourceMappingURL=index.mjs.map
//# sourceMappingURL=index.mjs.map