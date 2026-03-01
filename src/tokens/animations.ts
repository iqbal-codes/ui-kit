// Animation Tokens - Durations, easings, and keyframe definitions
// Following Tailwind CSS v4 CSS-first configuration pattern with native CSS animations

// Animation durations (in seconds)
export const durations = {
  instant: '0s',
  fastest: '0.05s',
  faster: '0.1s',
  fast: '0.15s',
  normal: '0.2s',
  slow: '0.3s',
  slower: '0.4s',
  slowest: '0.5s',
} as const

// Animation easings
export const easings = {
  // Standard easings
  linear: 'linear',
  ease: 'ease',
  'ease-in': 'ease-in',
  'ease-out': 'ease-out',
  'ease-in-out': 'ease-in-out',

  // Custom cubic-bezier easings
  'ease-out-quad': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
  'ease-out-cubic': 'cubic-bezier(0.215, 0.61, 0.355, 1)',
  'ease-out-quart': 'cubic-bezier(0.165, 0.84, 0.44, 1)',
  'ease-out-back': 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',

  'ease-in-quad': 'cubic-bezier(0.55, 0.085, 0.68, 0.53)',
  'ease-in-cubic': 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
  'ease-in-quart': 'cubic-bezier(0.895, 0.03, 0.685, 0.22)',
  'ease-in-back': 'cubic-bezier(0.6, -0.28, 0.735, 0.045)',

  'ease-in-out-quad': 'cubic-bezier(0.455, 0.03, 0.515, 0.955)',
  'ease-in-out-cubic': 'cubic-bezier(0.645, 0.045, 0.355, 1)',
  'ease-in-out-quart': 'cubic-bezier(0.77, 0, 0.175, 1)',
  'ease-in-out-back': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',

  // Spring easings
  spring: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
  'spring-soft': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
} as const

// Animation presets - Common animation combinations
export const animations = {
  // Fade animations
  'fade-in': {
    duration: durations.normal,
    easing: easings['ease-out'],
    keyframe: 'fade-in',
  },
  'fade-out': {
    duration: durations.fast,
    easing: easings['ease-in'],
    keyframe: 'fade-out',
  },

  // Scale animations
  'scale-in': {
    duration: durations.normal,
    easing: easings['ease-out-back'],
    keyframe: 'scale-in',
  },
  'scale-out': {
    duration: durations.fast,
    easing: easings['ease-in'],
    keyframe: 'scale-out',
  },

  // Slide animations
  'slide-in-from-top': {
    duration: durations.normal,
    easing: easings['ease-out'],
    keyframe: 'slide-in-from-top',
  },
  'slide-in-from-bottom': {
    duration: durations.normal,
    easing: easings['ease-out'],
    keyframe: 'slide-in-from-bottom',
  },
  'slide-in-from-left': {
    duration: durations.normal,
    easing: easings['ease-out'],
    keyframe: 'slide-in-from-left',
  },
  'slide-in-from-right': {
    duration: durations.normal,
    easing: easings['ease-out'],
    keyframe: 'slide-in-from-right',
  },

  // Dialog/Modal animations
  'dialog-in': {
    duration: durations.normal,
    easing: easings['ease-out-cubic'],
    keyframe: 'dialog-in',
  },
  'dialog-out': {
    duration: durations.fast,
    easing: easings['ease-in-cubic'],
    keyframe: 'dialog-out',
  },

  // Popover/Dropdown animations
  'popover-in': {
    duration: durations.fast,
    easing: easings['ease-out-quad'],
    keyframe: 'popover-in',
  },
  'popover-out': {
    duration: durations.faster,
    easing: easings['ease-in-quad'],
    keyframe: 'popover-out',
  },

  // Collapsible animations
  'accordion-down': {
    duration: durations.normal,
    easing: easings['ease-out'],
    keyframe: 'accordion-down',
  },
  'accordion-up': {
    duration: durations.normal,
    easing: easings['ease-out'],
    keyframe: 'accordion-up',
  },

  // Spinner/Loading animations
  spin: {
    duration: '1s',
    easing: easings.linear,
    keyframe: 'spin',
  },
  pulse: {
    duration: '2s',
    easing: easings.ease,
    keyframe: 'pulse',
  },
  bounce: {
    duration: '1s',
    easing: easings.ease,
    keyframe: 'bounce',
  },
} as const

// Keyframe definitions for CSS
export const keyframes = {
  // Fade keyframes
  'fade-in': {
    from: { opacity: '0' },
    to: { opacity: '1' },
  },
  'fade-out': {
    from: { opacity: '1' },
    to: { opacity: '0' },
  },

  // Scale keyframes
  'scale-in': {
    from: { opacity: '0', transform: 'scale(0.95)' },
    to: { opacity: '1', transform: 'scale(1)' },
  },
  'scale-out': {
    from: { opacity: '1', transform: 'scale(1)' },
    to: { opacity: '0', transform: 'scale(0.95)' },
  },

  // Slide keyframes
  'slide-in-from-top': {
    from: { opacity: '0', transform: 'translateY(-0.5rem)' },
    to: { opacity: '1', transform: 'translateY(0)' },
  },
  'slide-in-from-bottom': {
    from: { opacity: '0', transform: 'translateY(0.5rem)' },
    to: { opacity: '1', transform: 'translateY(0)' },
  },
  'slide-in-from-left': {
    from: { opacity: '0', transform: 'translateX(-0.5rem)' },
    to: { opacity: '1', transform: 'translateX(0)' },
  },
  'slide-in-from-right': {
    from: { opacity: '0', transform: 'translateX(0.5rem)' },
    to: { opacity: '1', transform: 'translateX(0)' },
  },

  // Dialog keyframes
  'dialog-in': {
    from: { opacity: '0', transform: 'scale(0.95) translateY(-0.5rem)' },
    to: { opacity: '1', transform: 'scale(1) translateY(0)' },
  },
  'dialog-out': {
    from: { opacity: '1', transform: 'scale(1) translateY(0)' },
    to: { opacity: '0', transform: 'scale(0.95) translateY(-0.5rem)' },
  },

  // Popover keyframes
  'popover-in': {
    from: { opacity: '0', transform: 'scale(0.98) translateY(-0.25rem)' },
    to: { opacity: '1', transform: 'scale(1) translateY(0)' },
  },
  'popover-out': {
    from: { opacity: '1', transform: 'scale(1) translateY(0)' },
    to: { opacity: '0', transform: 'scale(0.98) translateY(-0.25rem)' },
  },

  // Accordion keyframes
  'accordion-down': {
    from: { height: '0', opacity: '0' },
    to: { height: 'var(--radix-accordion-content-height)', opacity: '1' },
  },
  'accordion-up': {
    from: { height: 'var(--radix-accordion-content-height)', opacity: '1' },
    to: { height: '0', opacity: '0' },
  },

  // Loading keyframes
  spin: {
    from: { transform: 'rotate(0deg)' },
    to: { transform: 'rotate(360deg)' },
  },
  pulse: {
    '0%, 100%': { opacity: '1' },
    '50%': { opacity: '0.5' },
  },
  bounce: {
    '0%, 100%': { transform: 'translateY(-25%)', animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)' },
    '50%': { transform: 'translateY(0)', animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)' },
  },
} as const

// CSS variable definitions for animations (for use in @theme blocks)
export const animationCSS = {
  // Animation variables
  '--animate-fade-in': `${durations.normal} ${easings['ease-out']} fade-in`,
  '--animate-fade-out': `${durations.fast} ${easings['ease-in']} fade-out`,
  '--animate-scale-in': `${durations.normal} ${easings['ease-out-back']} scale-in`,
  '--animate-scale-out': `${durations.fast} ${easings['ease-in']} scale-out`,
  '--animate-slide-in': `${durations.normal} ${easings['ease-out']} slide-in-from-bottom`,
  '--animate-slide-out': `${durations.fast} ${easings['ease-in']} slide-out`,
  '--animate-dialog-in': `${durations.normal} ${easings['ease-out-cubic']} dialog-in`,
  '--animate-dialog-out': `${durations.fast} ${easings['ease-in-cubic']} dialog-out`,
  '--animate-popover-in': `${durations.fast} ${easings['ease-out-quad']} popover-in`,
  '--animate-popover-out': `${durations.faster} ${easings['ease-in-quad']} popover-out`,
  '--animate-accordion-down': `${durations.normal} ${easings['ease-out']} accordion-down`,
  '--animate-accordion-up': `${durations.normal} ${easings['ease-out']} accordion-up`,
  '--animate-spin': `1s ${easings.linear} spin`,
  '--animate-pulse': `2s ${easings.ease} pulse`,
  '--animate-bounce': `1s ${easings.ease} bounce`,
} as const

// Transition presets for common use cases
export const transitions = {
  default: `all ${durations.normal} ${easings['ease-in-out']}`,
  colors: `color, background-color, border-color, text-decoration-color, fill, stroke ${durations.normal} ${easings['ease-in-out']}`,
  opacity: `opacity ${durations.normal} ${easings['ease-in-out']}`,
  shadow: `box-shadow ${durations.normal} ${easings['ease-in-out']}`,
  transform: `transform ${durations.normal} ${easings['ease-in-out']}`,
  none: 'none',
} as const

// Export type definitions
export type Durations = typeof durations
export type Easings = typeof easings
export type Animations = typeof animations
export type Keyframes = typeof keyframes
export type AnimationCSS = typeof animationCSS
export type Transitions = typeof transitions
