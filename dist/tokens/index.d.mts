declare const durations: {
    readonly instant: "0s";
    readonly fastest: "0.05s";
    readonly faster: "0.1s";
    readonly fast: "0.15s";
    readonly normal: "0.2s";
    readonly slow: "0.3s";
    readonly slower: "0.4s";
    readonly slowest: "0.5s";
};
declare const easings: {
    readonly linear: "linear";
    readonly ease: "ease";
    readonly "ease-in": "ease-in";
    readonly "ease-out": "ease-out";
    readonly "ease-in-out": "ease-in-out";
    readonly "ease-out-quad": "cubic-bezier(0.25, 0.46, 0.45, 0.94)";
    readonly "ease-out-cubic": "cubic-bezier(0.215, 0.61, 0.355, 1)";
    readonly "ease-out-quart": "cubic-bezier(0.165, 0.84, 0.44, 1)";
    readonly "ease-out-back": "cubic-bezier(0.175, 0.885, 0.32, 1.275)";
    readonly "ease-in-quad": "cubic-bezier(0.55, 0.085, 0.68, 0.53)";
    readonly "ease-in-cubic": "cubic-bezier(0.55, 0.055, 0.675, 0.19)";
    readonly "ease-in-quart": "cubic-bezier(0.895, 0.03, 0.685, 0.22)";
    readonly "ease-in-back": "cubic-bezier(0.6, -0.28, 0.735, 0.045)";
    readonly "ease-in-out-quad": "cubic-bezier(0.455, 0.03, 0.515, 0.955)";
    readonly "ease-in-out-cubic": "cubic-bezier(0.645, 0.045, 0.355, 1)";
    readonly "ease-in-out-quart": "cubic-bezier(0.77, 0, 0.175, 1)";
    readonly "ease-in-out-back": "cubic-bezier(0.68, -0.55, 0.265, 1.55)";
    readonly spring: "cubic-bezier(0.175, 0.885, 0.32, 1.275)";
    readonly "spring-soft": "cubic-bezier(0.34, 1.56, 0.64, 1)";
};
declare const animations: {
    readonly "fade-in": {
        readonly duration: "0.2s";
        readonly easing: "ease-out";
        readonly keyframe: "fade-in";
    };
    readonly "fade-out": {
        readonly duration: "0.15s";
        readonly easing: "ease-in";
        readonly keyframe: "fade-out";
    };
    readonly "scale-in": {
        readonly duration: "0.2s";
        readonly easing: "cubic-bezier(0.175, 0.885, 0.32, 1.275)";
        readonly keyframe: "scale-in";
    };
    readonly "scale-out": {
        readonly duration: "0.15s";
        readonly easing: "ease-in";
        readonly keyframe: "scale-out";
    };
    readonly "slide-in-from-top": {
        readonly duration: "0.2s";
        readonly easing: "ease-out";
        readonly keyframe: "slide-in-from-top";
    };
    readonly "slide-in-from-bottom": {
        readonly duration: "0.2s";
        readonly easing: "ease-out";
        readonly keyframe: "slide-in-from-bottom";
    };
    readonly "slide-in-from-left": {
        readonly duration: "0.2s";
        readonly easing: "ease-out";
        readonly keyframe: "slide-in-from-left";
    };
    readonly "slide-in-from-right": {
        readonly duration: "0.2s";
        readonly easing: "ease-out";
        readonly keyframe: "slide-in-from-right";
    };
    readonly "dialog-in": {
        readonly duration: "0.2s";
        readonly easing: "cubic-bezier(0.215, 0.61, 0.355, 1)";
        readonly keyframe: "dialog-in";
    };
    readonly "dialog-out": {
        readonly duration: "0.15s";
        readonly easing: "cubic-bezier(0.55, 0.055, 0.675, 0.19)";
        readonly keyframe: "dialog-out";
    };
    readonly "popover-in": {
        readonly duration: "0.15s";
        readonly easing: "cubic-bezier(0.25, 0.46, 0.45, 0.94)";
        readonly keyframe: "popover-in";
    };
    readonly "popover-out": {
        readonly duration: "0.1s";
        readonly easing: "cubic-bezier(0.55, 0.085, 0.68, 0.53)";
        readonly keyframe: "popover-out";
    };
    readonly "accordion-down": {
        readonly duration: "0.2s";
        readonly easing: "ease-out";
        readonly keyframe: "accordion-down";
    };
    readonly "accordion-up": {
        readonly duration: "0.2s";
        readonly easing: "ease-out";
        readonly keyframe: "accordion-up";
    };
    readonly spin: {
        readonly duration: "1s";
        readonly easing: "linear";
        readonly keyframe: "spin";
    };
    readonly pulse: {
        readonly duration: "2s";
        readonly easing: "ease";
        readonly keyframe: "pulse";
    };
    readonly bounce: {
        readonly duration: "1s";
        readonly easing: "ease";
        readonly keyframe: "bounce";
    };
};
declare const keyframes: {
    readonly "fade-in": {
        readonly from: {
            readonly opacity: "0";
        };
        readonly to: {
            readonly opacity: "1";
        };
    };
    readonly "fade-out": {
        readonly from: {
            readonly opacity: "1";
        };
        readonly to: {
            readonly opacity: "0";
        };
    };
    readonly "scale-in": {
        readonly from: {
            readonly opacity: "0";
            readonly transform: "scale(0.95)";
        };
        readonly to: {
            readonly opacity: "1";
            readonly transform: "scale(1)";
        };
    };
    readonly "scale-out": {
        readonly from: {
            readonly opacity: "1";
            readonly transform: "scale(1)";
        };
        readonly to: {
            readonly opacity: "0";
            readonly transform: "scale(0.95)";
        };
    };
    readonly "slide-in-from-top": {
        readonly from: {
            readonly opacity: "0";
            readonly transform: "translateY(-0.5rem)";
        };
        readonly to: {
            readonly opacity: "1";
            readonly transform: "translateY(0)";
        };
    };
    readonly "slide-in-from-bottom": {
        readonly from: {
            readonly opacity: "0";
            readonly transform: "translateY(0.5rem)";
        };
        readonly to: {
            readonly opacity: "1";
            readonly transform: "translateY(0)";
        };
    };
    readonly "slide-in-from-left": {
        readonly from: {
            readonly opacity: "0";
            readonly transform: "translateX(-0.5rem)";
        };
        readonly to: {
            readonly opacity: "1";
            readonly transform: "translateX(0)";
        };
    };
    readonly "slide-in-from-right": {
        readonly from: {
            readonly opacity: "0";
            readonly transform: "translateX(0.5rem)";
        };
        readonly to: {
            readonly opacity: "1";
            readonly transform: "translateX(0)";
        };
    };
    readonly "dialog-in": {
        readonly from: {
            readonly opacity: "0";
            readonly transform: "scale(0.95) translateY(-0.5rem)";
        };
        readonly to: {
            readonly opacity: "1";
            readonly transform: "scale(1) translateY(0)";
        };
    };
    readonly "dialog-out": {
        readonly from: {
            readonly opacity: "1";
            readonly transform: "scale(1) translateY(0)";
        };
        readonly to: {
            readonly opacity: "0";
            readonly transform: "scale(0.95) translateY(-0.5rem)";
        };
    };
    readonly "popover-in": {
        readonly from: {
            readonly opacity: "0";
            readonly transform: "scale(0.98) translateY(-0.25rem)";
        };
        readonly to: {
            readonly opacity: "1";
            readonly transform: "scale(1) translateY(0)";
        };
    };
    readonly "popover-out": {
        readonly from: {
            readonly opacity: "1";
            readonly transform: "scale(1) translateY(0)";
        };
        readonly to: {
            readonly opacity: "0";
            readonly transform: "scale(0.98) translateY(-0.25rem)";
        };
    };
    readonly "accordion-down": {
        readonly from: {
            readonly height: "0";
            readonly opacity: "0";
        };
        readonly to: {
            readonly height: "var(--radix-accordion-content-height)";
            readonly opacity: "1";
        };
    };
    readonly "accordion-up": {
        readonly from: {
            readonly height: "var(--radix-accordion-content-height)";
            readonly opacity: "1";
        };
        readonly to: {
            readonly height: "0";
            readonly opacity: "0";
        };
    };
    readonly spin: {
        readonly from: {
            readonly transform: "rotate(0deg)";
        };
        readonly to: {
            readonly transform: "rotate(360deg)";
        };
    };
    readonly pulse: {
        readonly "0%, 100%": {
            readonly opacity: "1";
        };
        readonly "50%": {
            readonly opacity: "0.5";
        };
    };
    readonly bounce: {
        readonly "0%, 100%": {
            readonly transform: "translateY(-25%)";
            readonly animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)";
        };
        readonly "50%": {
            readonly transform: "translateY(0)";
            readonly animationTimingFunction: "cubic-bezier(0, 0, 0.2, 1)";
        };
    };
};
declare const animationCSS: {
    readonly "--animate-fade-in": "0.2s ease-out fade-in";
    readonly "--animate-fade-out": "0.15s ease-in fade-out";
    readonly "--animate-scale-in": "0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275) scale-in";
    readonly "--animate-scale-out": "0.15s ease-in scale-out";
    readonly "--animate-slide-in": "0.2s ease-out slide-in-from-bottom";
    readonly "--animate-slide-out": "0.15s ease-in slide-out";
    readonly "--animate-dialog-in": "0.2s cubic-bezier(0.215, 0.61, 0.355, 1) dialog-in";
    readonly "--animate-dialog-out": "0.15s cubic-bezier(0.55, 0.055, 0.675, 0.19) dialog-out";
    readonly "--animate-popover-in": "0.15s cubic-bezier(0.25, 0.46, 0.45, 0.94) popover-in";
    readonly "--animate-popover-out": "0.1s cubic-bezier(0.55, 0.085, 0.68, 0.53) popover-out";
    readonly "--animate-accordion-down": "0.2s ease-out accordion-down";
    readonly "--animate-accordion-up": "0.2s ease-out accordion-up";
    readonly "--animate-spin": "1s linear spin";
    readonly "--animate-pulse": "2s ease pulse";
    readonly "--animate-bounce": "1s ease bounce";
};
declare const transitions: {
    readonly default: "all 0.2s ease-in-out";
    readonly colors: "color, background-color, border-color, text-decoration-color, fill, stroke 0.2s ease-in-out";
    readonly opacity: "opacity 0.2s ease-in-out";
    readonly shadow: "box-shadow 0.2s ease-in-out";
    readonly transform: "transform 0.2s ease-in-out";
    readonly none: "none";
};
type Durations = typeof durations;
type Easings = typeof easings;
type Animations = typeof animations;
type Keyframes = typeof keyframes;
type AnimationCSS = typeof animationCSS;
type Transitions = typeof transitions;

declare const baseColors: {
    readonly primary: {
        readonly 50: "oklch(97% 0.01 264)";
        readonly 100: "oklch(93% 0.03 264)";
        readonly 200: "oklch(87% 0.06 264)";
        readonly 300: "oklch(78% 0.1 264)";
        readonly 400: "oklch(67% 0.15 264)";
        readonly 500: "oklch(55% 0.2 264)";
        readonly 600: "oklch(45% 0.2 264)";
        readonly 700: "oklch(38% 0.17 264)";
        readonly 800: "oklch(32% 0.14 264)";
        readonly 900: "oklch(26% 0.11 264)";
        readonly 950: "oklch(18% 0.08 264)";
    };
    readonly gray: {
        readonly 50: "oklch(98% 0.002 264)";
        readonly 100: "oklch(96% 0.005 264)";
        readonly 200: "oklch(92% 0.01 264)";
        readonly 300: "oklch(85% 0.015 264)";
        readonly 400: "oklch(70% 0.02 264)";
        readonly 500: "oklch(55% 0.025 264)";
        readonly 600: "oklch(45% 0.025 264)";
        readonly 700: "oklch(35% 0.025 264)";
        readonly 800: "oklch(25% 0.025 264)";
        readonly 900: "oklch(15% 0.025 264)";
        readonly 950: "oklch(10% 0.02 264)";
    };
    readonly red: {
        readonly 50: "oklch(97% 0.02 27)";
        readonly 100: "oklch(93% 0.05 27)";
        readonly 200: "oklch(88% 0.1 27)";
        readonly 300: "oklch(80% 0.15 27)";
        readonly 400: "oklch(68% 0.2 27)";
        readonly 500: "oklch(57% 0.23 27)";
        readonly 600: "oklch(53% 0.22 27)";
        readonly 700: "oklch(45% 0.19 27)";
        readonly 800: "oklch(38% 0.16 27)";
        readonly 900: "oklch(30% 0.13 27)";
        readonly 950: "oklch(18% 0.08 27)";
    };
    readonly amber: {
        readonly 50: "oklch(98% 0.02 85)";
        readonly 100: "oklch(95% 0.05 85)";
        readonly 200: "oklch(90% 0.1 85)";
        readonly 300: "oklch(84% 0.15 85)";
        readonly 400: "oklch(76% 0.18 85)";
        readonly 500: "oklch(68% 0.2 85)";
        readonly 600: "oklch(60% 0.18 85)";
        readonly 700: "oklch(50% 0.15 85)";
        readonly 800: "oklch(42% 0.12 85)";
        readonly 900: "oklch(34% 0.1 85)";
        readonly 950: "oklch(20% 0.06 85)";
    };
    readonly green: {
        readonly 50: "oklch(98% 0.02 145)";
        readonly 100: "oklch(95% 0.04 145)";
        readonly 200: "oklch(90% 0.08 145)";
        readonly 300: "oklch(83% 0.13 145)";
        readonly 400: "oklch(75% 0.17 145)";
        readonly 500: "oklch(65% 0.2 145)";
        readonly 600: "oklch(55% 0.18 145)";
        readonly 700: "oklch(45% 0.15 145)";
        readonly 800: "oklch(37% 0.12 145)";
        readonly 900: "oklch(29% 0.09 145)";
        readonly 950: "oklch(17% 0.05 145)";
    };
    readonly blue: {
        readonly 50: "oklch(97% 0.02 240)";
        readonly 100: "oklch(93% 0.05 240)";
        readonly 200: "oklch(87% 0.1 240)";
        readonly 300: "oklch(78% 0.15 240)";
        readonly 400: "oklch(68% 0.2 240)";
        readonly 500: "oklch(58% 0.23 240)";
        readonly 600: "oklch(50% 0.22 240)";
        readonly 700: "oklch(42% 0.19 240)";
        readonly 800: "oklch(35% 0.16 240)";
        readonly 900: "oklch(28% 0.13 240)";
        readonly 950: "oklch(18% 0.08 240)";
    };
};
declare const semanticColors: {
    readonly light: {
        readonly background: "oklch(1 0 0)";
        readonly foreground: "oklch(0.129 0.042 264.695)";
        readonly primary: "oklch(0.208 0.042 265.755)";
        readonly "primary-foreground": "oklch(0.984 0.003 247.858)";
        readonly secondary: "oklch(0.968 0.007 247.896)";
        readonly "secondary-foreground": "oklch(0.208 0.042 265.755)";
        readonly muted: "oklch(0.968 0.007 247.896)";
        readonly "muted-foreground": "oklch(0.554 0.046 257.417)";
        readonly accent: "oklch(0.968 0.007 247.896)";
        readonly "accent-foreground": "oklch(0.208 0.042 265.755)";
        readonly destructive: "oklch(0.577 0.245 27.325)";
        readonly "destructive-foreground": "oklch(0.984 0.003 247.858)";
        readonly warning: "oklch(0.68 0.2 85)";
        readonly "warning-foreground": "oklch(0.2 0.06 85)";
        readonly success: "oklch(0.65 0.2 145)";
        readonly "success-foreground": "oklch(0.98 0.02 145)";
        readonly info: "oklch(0.58 0.23 240)";
        readonly "info-foreground": "oklch(0.98 0.02 240)";
        readonly border: "oklch(0.929 0.013 255.508)";
        readonly input: "oklch(0.929 0.013 255.508)";
        readonly ring: "oklch(0.704 0.04 256.788)";
        readonly "ring-offset": "oklch(1 0 0)";
        readonly card: "oklch(1 0 0)";
        readonly "card-foreground": "oklch(0.129 0.042 264.695)";
        readonly popover: "oklch(1 0 0)";
        readonly "popover-foreground": "oklch(0.129 0.042 264.695)";
        readonly sidebar: "oklch(0.984 0.003 247.858)";
        readonly "sidebar-foreground": "oklch(0.129 0.042 264.695)";
        readonly "sidebar-primary": "oklch(0.208 0.042 265.755)";
        readonly "sidebar-primary-foreground": "oklch(0.984 0.003 247.858)";
        readonly "sidebar-accent": "oklch(0.968 0.007 247.896)";
        readonly "sidebar-accent-foreground": "oklch(0.208 0.042 265.755)";
        readonly "sidebar-border": "oklch(0.929 0.013 255.508)";
        readonly "sidebar-ring": "oklch(0.704 0.04 256.788)";
        readonly chart: {
            readonly 1: "oklch(0.646 0.222 41.116)";
            readonly 2: "oklch(0.6 0.118 184.704)";
            readonly 3: "oklch(0.398 0.07 227.392)";
            readonly 4: "oklch(0.828 0.189 84.429)";
            readonly 5: "oklch(0.769 0.188 70.08)";
        };
    };
    readonly dark: {
        readonly background: "oklch(0.129 0.042 264.695)";
        readonly foreground: "oklch(0.984 0.003 247.858)";
        readonly primary: "oklch(0.929 0.013 255.508)";
        readonly "primary-foreground": "oklch(0.208 0.042 265.755)";
        readonly secondary: "oklch(0.279 0.041 260.031)";
        readonly "secondary-foreground": "oklch(0.984 0.003 247.858)";
        readonly muted: "oklch(0.279 0.041 260.031)";
        readonly "muted-foreground": "oklch(0.704 0.04 256.788)";
        readonly accent: "oklch(0.279 0.041 260.031)";
        readonly "accent-foreground": "oklch(0.984 0.003 247.858)";
        readonly destructive: "oklch(0.704 0.191 22.216)";
        readonly "destructive-foreground": "oklch(0.984 0.003 247.858)";
        readonly warning: "oklch(0.6 0.18 85)";
        readonly "warning-foreground": "oklch(0.2 0.06 85)";
        readonly success: "oklch(0.55 0.18 145)";
        readonly "success-foreground": "oklch(0.98 0.02 145)";
        readonly info: "oklch(0.5 0.22 240)";
        readonly "info-foreground": "oklch(0.98 0.02 240)";
        readonly border: "oklch(1 0 0 / 10%)";
        readonly input: "oklch(1 0 0 / 15%)";
        readonly ring: "oklch(0.551 0.027 264.364)";
        readonly "ring-offset": "oklch(0.129 0.042 264.695)";
        readonly card: "oklch(0.208 0.042 265.755)";
        readonly "card-foreground": "oklch(0.984 0.003 247.858)";
        readonly popover: "oklch(0.208 0.042 265.755)";
        readonly "popover-foreground": "oklch(0.984 0.003 247.858)";
        readonly sidebar: "oklch(0.208 0.042 265.755)";
        readonly "sidebar-foreground": "oklch(0.984 0.003 247.858)";
        readonly "sidebar-primary": "oklch(0.488 0.243 264.376)";
        readonly "sidebar-primary-foreground": "oklch(0.984 0.003 247.858)";
        readonly "sidebar-accent": "oklch(0.279 0.041 260.031)";
        readonly "sidebar-accent-foreground": "oklch(0.984 0.003 247.858)";
        readonly "sidebar-border": "oklch(1 0 0 / 10%)";
        readonly "sidebar-ring": "oklch(0.551 0.027 264.364)";
        readonly chart: {
            readonly 1: "oklch(0.488 0.243 264.376)";
            readonly 2: "oklch(0.696 0.17 162.48)";
            readonly 3: "oklch(0.769 0.188 70.08)";
            readonly 4: "oklch(0.627 0.265 303.9)";
            readonly 5: "oklch(0.645 0.246 16.439)";
        };
    };
};
type BaseColors = typeof baseColors;
type SemanticColors = typeof semanticColors;
type ColorScale = keyof typeof baseColors.primary;

declare const spacing: {
    readonly 0: "0px";
    readonly px: "1px";
    readonly 0.5: "0.125rem";
    readonly 1: "0.25rem";
    readonly 1.5: "0.375rem";
    readonly 2: "0.5rem";
    readonly 2.5: "0.625rem";
    readonly 3: "0.75rem";
    readonly 3.5: "0.875rem";
    readonly 4: "1rem";
    readonly 5: "1.25rem";
    readonly 6: "1.5rem";
    readonly 7: "1.75rem";
    readonly 8: "2rem";
    readonly 9: "2.25rem";
    readonly 10: "2.5rem";
    readonly 11: "2.75rem";
    readonly 12: "3rem";
    readonly 14: "3.5rem";
    readonly 16: "4rem";
    readonly 20: "5rem";
    readonly 24: "6rem";
    readonly 28: "7rem";
    readonly 32: "8rem";
    readonly 36: "9rem";
    readonly 40: "10rem";
    readonly 44: "11rem";
    readonly 48: "12rem";
    readonly 52: "13rem";
    readonly 56: "14rem";
    readonly 60: "15rem";
    readonly 64: "16rem";
    readonly 72: "18rem";
    readonly 80: "20rem";
    readonly 96: "24rem";
};
declare const semanticSpacing: {
    readonly "component-xs": "0.25rem";
    readonly "component-sm": "0.5rem";
    readonly "component-md": "0.75rem";
    readonly "component-lg": "1rem";
    readonly "component-xl": "1.5rem";
    readonly "gap-xs": "0.25rem";
    readonly "gap-sm": "0.5rem";
    readonly "gap-md": "1rem";
    readonly "gap-lg": "1.5rem";
    readonly "gap-xl": "2rem";
    readonly "gap-2xl": "3rem";
    readonly "section-sm": "2rem";
    readonly "section-md": "3rem";
    readonly "section-lg": "4rem";
    readonly "section-xl": "6rem";
    readonly "section-2xl": "8rem";
};
declare const borderRadius: {
    readonly none: "0px";
    readonly sm: "0.375rem";
    readonly DEFAULT: "0.5rem";
    readonly md: "0.5rem";
    readonly lg: "0.625rem";
    readonly xl: "0.875rem";
    readonly "2xl": "1.125rem";
    readonly "3xl": "1.375rem";
    readonly "4xl": "1.625rem";
    readonly full: "9999px";
};
declare const baseRadius: "0.625rem";
declare const container: {
    readonly xs: "20rem";
    readonly sm: "24rem";
    readonly md: "28rem";
    readonly lg: "32rem";
    readonly xl: "36rem";
    readonly "2xl": "42rem";
    readonly "3xl": "48rem";
    readonly "4xl": "56rem";
    readonly "5xl": "64rem";
    readonly "6xl": "72rem";
    readonly "7xl": "80rem";
    readonly prose: "65ch";
};
declare const breakpoints: {
    readonly sm: "640px";
    readonly md: "768px";
    readonly lg: "1024px";
    readonly xl: "1280px";
    readonly "2xl": "1536px";
};
declare const zIndex: {
    readonly hide: -1;
    readonly auto: "auto";
    readonly base: 0;
    readonly docked: 10;
    readonly dropdown: 1000;
    readonly sticky: 1100;
    readonly banner: 1200;
    readonly overlay: 1300;
    readonly modal: 1400;
    readonly popover: 1500;
    readonly skipLink: 1600;
    readonly toast: 1700;
    readonly tooltip: 1800;
};
declare const shadows: {
    readonly none: "none";
    readonly xs: "0 1px 2px 0 rgb(0 0 0 / 0.05)";
    readonly sm: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)";
    readonly DEFAULT: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)";
    readonly md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)";
    readonly lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)";
    readonly xl: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)";
    readonly "2xl": "0 25px 50px -12px rgb(0 0 0 / 0.25)";
    readonly inner: "inset 0 2px 4px 0 rgb(0 0 0 / 0.05)";
};
declare const grid: {
    readonly columns: 12;
    readonly gutter: "1.5rem";
    readonly gutterMobile: "1rem";
    readonly margin: "1rem";
    readonly marginMobile: "1rem";
};
type Spacing = typeof spacing;
type SemanticSpacing = typeof semanticSpacing;
type BorderRadius = typeof borderRadius;
type BaseRadius = typeof baseRadius;
type Container = typeof container;
type Breakpoints = typeof breakpoints;
type ZIndex = typeof zIndex;
type Shadows = typeof shadows;
type Grid = typeof grid;

declare const fontFamilies: {
    readonly sans: string;
    readonly serif: string;
    readonly mono: string;
};
declare const fontSizes: {
    readonly xs: "0.75rem";
    readonly sm: "0.875rem";
    readonly base: "1rem";
    readonly lg: "1.125rem";
    readonly xl: "1.25rem";
    readonly "2xl": "1.5rem";
    readonly "3xl": "1.875rem";
    readonly "4xl": "2.25rem";
    readonly "5xl": "3rem";
    readonly "6xl": "3.75rem";
    readonly "7xl": "4.5rem";
    readonly "8xl": "6rem";
    readonly "9xl": "8rem";
};
declare const fontWeights: {
    readonly thin: "100";
    readonly extralight: "200";
    readonly light: "300";
    readonly normal: "400";
    readonly medium: "500";
    readonly semibold: "600";
    readonly bold: "700";
    readonly extrabold: "800";
    readonly black: "900";
};
declare const lineHeights: {
    readonly none: "1";
    readonly tight: "1.25";
    readonly snug: "1.375";
    readonly normal: "1.5";
    readonly relaxed: "1.625";
    readonly loose: "2";
    readonly 3: "0.75rem";
    readonly 4: "1rem";
    readonly 5: "1.25rem";
    readonly 6: "1.5rem";
    readonly 7: "1.75rem";
    readonly 8: "2rem";
    readonly 9: "2.25rem";
    readonly 10: "2.5rem";
};
declare const letterSpacings: {
    readonly tighter: "-0.05em";
    readonly tight: "-0.025em";
    readonly normal: "0em";
    readonly wide: "0.025em";
    readonly wider: "0.05em";
    readonly widest: "0.1em";
};
declare const typography: {
    readonly display: {
        readonly large: {
            readonly fontSize: "3.75rem";
            readonly fontWeight: "700";
            readonly lineHeight: "1.25";
            readonly letterSpacing: "-0.025em";
        };
        readonly medium: {
            readonly fontSize: "3rem";
            readonly fontWeight: "700";
            readonly lineHeight: "1.25";
            readonly letterSpacing: "-0.025em";
        };
        readonly small: {
            readonly fontSize: "2.25rem";
            readonly fontWeight: "700";
            readonly lineHeight: "1.25";
            readonly letterSpacing: "-0.025em";
        };
    };
    readonly heading: {
        readonly h1: {
            readonly fontSize: "2.25rem";
            readonly fontWeight: "700";
            readonly lineHeight: "1.25";
            readonly letterSpacing: "-0.025em";
        };
        readonly h2: {
            readonly fontSize: "1.875rem";
            readonly fontWeight: "600";
            readonly lineHeight: "1.25";
            readonly letterSpacing: "-0.025em";
        };
        readonly h3: {
            readonly fontSize: "1.5rem";
            readonly fontWeight: "600";
            readonly lineHeight: "1.375";
            readonly letterSpacing: "0em";
        };
        readonly h4: {
            readonly fontSize: "1.25rem";
            readonly fontWeight: "600";
            readonly lineHeight: "1.375";
            readonly letterSpacing: "0em";
        };
        readonly h5: {
            readonly fontSize: "1.125rem";
            readonly fontWeight: "600";
            readonly lineHeight: "1.375";
            readonly letterSpacing: "0em";
        };
        readonly h6: {
            readonly fontSize: "1rem";
            readonly fontWeight: "600";
            readonly lineHeight: "1.5";
            readonly letterSpacing: "0.025em";
        };
    };
    readonly body: {
        readonly large: {
            readonly fontSize: "1.125rem";
            readonly fontWeight: "400";
            readonly lineHeight: "1.625";
            readonly letterSpacing: "0em";
        };
        readonly base: {
            readonly fontSize: "1rem";
            readonly fontWeight: "400";
            readonly lineHeight: "1.5";
            readonly letterSpacing: "0em";
        };
        readonly small: {
            readonly fontSize: "0.875rem";
            readonly fontWeight: "400";
            readonly lineHeight: "1.5";
            readonly letterSpacing: "0em";
        };
        readonly xs: {
            readonly fontSize: "0.75rem";
            readonly fontWeight: "400";
            readonly lineHeight: "1.5";
            readonly letterSpacing: "0.025em";
        };
    };
    readonly ui: {
        readonly button: {
            readonly fontSize: "0.875rem";
            readonly fontWeight: "500";
            readonly lineHeight: "1";
            readonly letterSpacing: "0.025em";
        };
        readonly label: {
            readonly fontSize: "0.875rem";
            readonly fontWeight: "500";
            readonly lineHeight: "1";
            readonly letterSpacing: "0em";
        };
        readonly caption: {
            readonly fontSize: "0.75rem";
            readonly fontWeight: "400";
            readonly lineHeight: "1.5";
            readonly letterSpacing: "0.025em";
        };
        readonly overline: {
            readonly fontSize: "0.75rem";
            readonly fontWeight: "500";
            readonly lineHeight: "1.5";
            readonly letterSpacing: "0.1em";
            readonly textTransform: "uppercase";
        };
    };
};
type FontFamilies = typeof fontFamilies;
type FontSizes = typeof fontSizes;
type FontWeights = typeof fontWeights;
type LineHeights = typeof lineHeights;
type LetterSpacings = typeof letterSpacings;
type Typography = typeof typography;

declare const tokens: {
    readonly colors: {
        readonly base: {
            readonly primary: {
                readonly 50: "oklch(97% 0.01 264)";
                readonly 100: "oklch(93% 0.03 264)";
                readonly 200: "oklch(87% 0.06 264)";
                readonly 300: "oklch(78% 0.1 264)";
                readonly 400: "oklch(67% 0.15 264)";
                readonly 500: "oklch(55% 0.2 264)";
                readonly 600: "oklch(45% 0.2 264)";
                readonly 700: "oklch(38% 0.17 264)";
                readonly 800: "oklch(32% 0.14 264)";
                readonly 900: "oklch(26% 0.11 264)";
                readonly 950: "oklch(18% 0.08 264)";
            };
            readonly gray: {
                readonly 50: "oklch(98% 0.002 264)";
                readonly 100: "oklch(96% 0.005 264)";
                readonly 200: "oklch(92% 0.01 264)";
                readonly 300: "oklch(85% 0.015 264)";
                readonly 400: "oklch(70% 0.02 264)";
                readonly 500: "oklch(55% 0.025 264)";
                readonly 600: "oklch(45% 0.025 264)";
                readonly 700: "oklch(35% 0.025 264)";
                readonly 800: "oklch(25% 0.025 264)";
                readonly 900: "oklch(15% 0.025 264)";
                readonly 950: "oklch(10% 0.02 264)";
            };
            readonly red: {
                readonly 50: "oklch(97% 0.02 27)";
                readonly 100: "oklch(93% 0.05 27)";
                readonly 200: "oklch(88% 0.1 27)";
                readonly 300: "oklch(80% 0.15 27)";
                readonly 400: "oklch(68% 0.2 27)";
                readonly 500: "oklch(57% 0.23 27)";
                readonly 600: "oklch(53% 0.22 27)";
                readonly 700: "oklch(45% 0.19 27)";
                readonly 800: "oklch(38% 0.16 27)";
                readonly 900: "oklch(30% 0.13 27)";
                readonly 950: "oklch(18% 0.08 27)";
            };
            readonly amber: {
                readonly 50: "oklch(98% 0.02 85)";
                readonly 100: "oklch(95% 0.05 85)";
                readonly 200: "oklch(90% 0.1 85)";
                readonly 300: "oklch(84% 0.15 85)";
                readonly 400: "oklch(76% 0.18 85)";
                readonly 500: "oklch(68% 0.2 85)";
                readonly 600: "oklch(60% 0.18 85)";
                readonly 700: "oklch(50% 0.15 85)";
                readonly 800: "oklch(42% 0.12 85)";
                readonly 900: "oklch(34% 0.1 85)";
                readonly 950: "oklch(20% 0.06 85)";
            };
            readonly green: {
                readonly 50: "oklch(98% 0.02 145)";
                readonly 100: "oklch(95% 0.04 145)";
                readonly 200: "oklch(90% 0.08 145)";
                readonly 300: "oklch(83% 0.13 145)";
                readonly 400: "oklch(75% 0.17 145)";
                readonly 500: "oklch(65% 0.2 145)";
                readonly 600: "oklch(55% 0.18 145)";
                readonly 700: "oklch(45% 0.15 145)";
                readonly 800: "oklch(37% 0.12 145)";
                readonly 900: "oklch(29% 0.09 145)";
                readonly 950: "oklch(17% 0.05 145)";
            };
            readonly blue: {
                readonly 50: "oklch(97% 0.02 240)";
                readonly 100: "oklch(93% 0.05 240)";
                readonly 200: "oklch(87% 0.1 240)";
                readonly 300: "oklch(78% 0.15 240)";
                readonly 400: "oklch(68% 0.2 240)";
                readonly 500: "oklch(58% 0.23 240)";
                readonly 600: "oklch(50% 0.22 240)";
                readonly 700: "oklch(42% 0.19 240)";
                readonly 800: "oklch(35% 0.16 240)";
                readonly 900: "oklch(28% 0.13 240)";
                readonly 950: "oklch(18% 0.08 240)";
            };
        };
        readonly semantic: {
            readonly light: {
                readonly background: "oklch(1 0 0)";
                readonly foreground: "oklch(0.129 0.042 264.695)";
                readonly primary: "oklch(0.208 0.042 265.755)";
                readonly "primary-foreground": "oklch(0.984 0.003 247.858)";
                readonly secondary: "oklch(0.968 0.007 247.896)";
                readonly "secondary-foreground": "oklch(0.208 0.042 265.755)";
                readonly muted: "oklch(0.968 0.007 247.896)";
                readonly "muted-foreground": "oklch(0.554 0.046 257.417)";
                readonly accent: "oklch(0.968 0.007 247.896)";
                readonly "accent-foreground": "oklch(0.208 0.042 265.755)";
                readonly destructive: "oklch(0.577 0.245 27.325)";
                readonly "destructive-foreground": "oklch(0.984 0.003 247.858)";
                readonly warning: "oklch(0.68 0.2 85)";
                readonly "warning-foreground": "oklch(0.2 0.06 85)";
                readonly success: "oklch(0.65 0.2 145)";
                readonly "success-foreground": "oklch(0.98 0.02 145)";
                readonly info: "oklch(0.58 0.23 240)";
                readonly "info-foreground": "oklch(0.98 0.02 240)";
                readonly border: "oklch(0.929 0.013 255.508)";
                readonly input: "oklch(0.929 0.013 255.508)";
                readonly ring: "oklch(0.704 0.04 256.788)";
                readonly "ring-offset": "oklch(1 0 0)";
                readonly card: "oklch(1 0 0)";
                readonly "card-foreground": "oklch(0.129 0.042 264.695)";
                readonly popover: "oklch(1 0 0)";
                readonly "popover-foreground": "oklch(0.129 0.042 264.695)";
                readonly sidebar: "oklch(0.984 0.003 247.858)";
                readonly "sidebar-foreground": "oklch(0.129 0.042 264.695)";
                readonly "sidebar-primary": "oklch(0.208 0.042 265.755)";
                readonly "sidebar-primary-foreground": "oklch(0.984 0.003 247.858)";
                readonly "sidebar-accent": "oklch(0.968 0.007 247.896)";
                readonly "sidebar-accent-foreground": "oklch(0.208 0.042 265.755)";
                readonly "sidebar-border": "oklch(0.929 0.013 255.508)";
                readonly "sidebar-ring": "oklch(0.704 0.04 256.788)";
                readonly chart: {
                    readonly 1: "oklch(0.646 0.222 41.116)";
                    readonly 2: "oklch(0.6 0.118 184.704)";
                    readonly 3: "oklch(0.398 0.07 227.392)";
                    readonly 4: "oklch(0.828 0.189 84.429)";
                    readonly 5: "oklch(0.769 0.188 70.08)";
                };
            };
            readonly dark: {
                readonly background: "oklch(0.129 0.042 264.695)";
                readonly foreground: "oklch(0.984 0.003 247.858)";
                readonly primary: "oklch(0.929 0.013 255.508)";
                readonly "primary-foreground": "oklch(0.208 0.042 265.755)";
                readonly secondary: "oklch(0.279 0.041 260.031)";
                readonly "secondary-foreground": "oklch(0.984 0.003 247.858)";
                readonly muted: "oklch(0.279 0.041 260.031)";
                readonly "muted-foreground": "oklch(0.704 0.04 256.788)";
                readonly accent: "oklch(0.279 0.041 260.031)";
                readonly "accent-foreground": "oklch(0.984 0.003 247.858)";
                readonly destructive: "oklch(0.704 0.191 22.216)";
                readonly "destructive-foreground": "oklch(0.984 0.003 247.858)";
                readonly warning: "oklch(0.6 0.18 85)";
                readonly "warning-foreground": "oklch(0.2 0.06 85)";
                readonly success: "oklch(0.55 0.18 145)";
                readonly "success-foreground": "oklch(0.98 0.02 145)";
                readonly info: "oklch(0.5 0.22 240)";
                readonly "info-foreground": "oklch(0.98 0.02 240)";
                readonly border: "oklch(1 0 0 / 10%)";
                readonly input: "oklch(1 0 0 / 15%)";
                readonly ring: "oklch(0.551 0.027 264.364)";
                readonly "ring-offset": "oklch(0.129 0.042 264.695)";
                readonly card: "oklch(0.208 0.042 265.755)";
                readonly "card-foreground": "oklch(0.984 0.003 247.858)";
                readonly popover: "oklch(0.208 0.042 265.755)";
                readonly "popover-foreground": "oklch(0.984 0.003 247.858)";
                readonly sidebar: "oklch(0.208 0.042 265.755)";
                readonly "sidebar-foreground": "oklch(0.984 0.003 247.858)";
                readonly "sidebar-primary": "oklch(0.488 0.243 264.376)";
                readonly "sidebar-primary-foreground": "oklch(0.984 0.003 247.858)";
                readonly "sidebar-accent": "oklch(0.279 0.041 260.031)";
                readonly "sidebar-accent-foreground": "oklch(0.984 0.003 247.858)";
                readonly "sidebar-border": "oklch(1 0 0 / 10%)";
                readonly "sidebar-ring": "oklch(0.551 0.027 264.364)";
                readonly chart: {
                    readonly 1: "oklch(0.488 0.243 264.376)";
                    readonly 2: "oklch(0.696 0.17 162.48)";
                    readonly 3: "oklch(0.769 0.188 70.08)";
                    readonly 4: "oklch(0.627 0.265 303.9)";
                    readonly 5: "oklch(0.645 0.246 16.439)";
                };
            };
        };
    };
    readonly typography: {
        readonly fontFamilies: {
            readonly sans: string;
            readonly serif: string;
            readonly mono: string;
        };
        readonly fontSizes: {
            readonly xs: "0.75rem";
            readonly sm: "0.875rem";
            readonly base: "1rem";
            readonly lg: "1.125rem";
            readonly xl: "1.25rem";
            readonly "2xl": "1.5rem";
            readonly "3xl": "1.875rem";
            readonly "4xl": "2.25rem";
            readonly "5xl": "3rem";
            readonly "6xl": "3.75rem";
            readonly "7xl": "4.5rem";
            readonly "8xl": "6rem";
            readonly "9xl": "8rem";
        };
        readonly fontWeights: {
            readonly thin: "100";
            readonly extralight: "200";
            readonly light: "300";
            readonly normal: "400";
            readonly medium: "500";
            readonly semibold: "600";
            readonly bold: "700";
            readonly extrabold: "800";
            readonly black: "900";
        };
        readonly lineHeights: {
            readonly none: "1";
            readonly tight: "1.25";
            readonly snug: "1.375";
            readonly normal: "1.5";
            readonly relaxed: "1.625";
            readonly loose: "2";
            readonly 3: "0.75rem";
            readonly 4: "1rem";
            readonly 5: "1.25rem";
            readonly 6: "1.5rem";
            readonly 7: "1.75rem";
            readonly 8: "2rem";
            readonly 9: "2.25rem";
            readonly 10: "2.5rem";
        };
        readonly letterSpacings: {
            readonly tighter: "-0.05em";
            readonly tight: "-0.025em";
            readonly normal: "0em";
            readonly wide: "0.025em";
            readonly wider: "0.05em";
            readonly widest: "0.1em";
        };
        readonly styles: {
            readonly display: {
                readonly large: {
                    readonly fontSize: "3.75rem";
                    readonly fontWeight: "700";
                    readonly lineHeight: "1.25";
                    readonly letterSpacing: "-0.025em";
                };
                readonly medium: {
                    readonly fontSize: "3rem";
                    readonly fontWeight: "700";
                    readonly lineHeight: "1.25";
                    readonly letterSpacing: "-0.025em";
                };
                readonly small: {
                    readonly fontSize: "2.25rem";
                    readonly fontWeight: "700";
                    readonly lineHeight: "1.25";
                    readonly letterSpacing: "-0.025em";
                };
            };
            readonly heading: {
                readonly h1: {
                    readonly fontSize: "2.25rem";
                    readonly fontWeight: "700";
                    readonly lineHeight: "1.25";
                    readonly letterSpacing: "-0.025em";
                };
                readonly h2: {
                    readonly fontSize: "1.875rem";
                    readonly fontWeight: "600";
                    readonly lineHeight: "1.25";
                    readonly letterSpacing: "-0.025em";
                };
                readonly h3: {
                    readonly fontSize: "1.5rem";
                    readonly fontWeight: "600";
                    readonly lineHeight: "1.375";
                    readonly letterSpacing: "0em";
                };
                readonly h4: {
                    readonly fontSize: "1.25rem";
                    readonly fontWeight: "600";
                    readonly lineHeight: "1.375";
                    readonly letterSpacing: "0em";
                };
                readonly h5: {
                    readonly fontSize: "1.125rem";
                    readonly fontWeight: "600";
                    readonly lineHeight: "1.375";
                    readonly letterSpacing: "0em";
                };
                readonly h6: {
                    readonly fontSize: "1rem";
                    readonly fontWeight: "600";
                    readonly lineHeight: "1.5";
                    readonly letterSpacing: "0.025em";
                };
            };
            readonly body: {
                readonly large: {
                    readonly fontSize: "1.125rem";
                    readonly fontWeight: "400";
                    readonly lineHeight: "1.625";
                    readonly letterSpacing: "0em";
                };
                readonly base: {
                    readonly fontSize: "1rem";
                    readonly fontWeight: "400";
                    readonly lineHeight: "1.5";
                    readonly letterSpacing: "0em";
                };
                readonly small: {
                    readonly fontSize: "0.875rem";
                    readonly fontWeight: "400";
                    readonly lineHeight: "1.5";
                    readonly letterSpacing: "0em";
                };
                readonly xs: {
                    readonly fontSize: "0.75rem";
                    readonly fontWeight: "400";
                    readonly lineHeight: "1.5";
                    readonly letterSpacing: "0.025em";
                };
            };
            readonly ui: {
                readonly button: {
                    readonly fontSize: "0.875rem";
                    readonly fontWeight: "500";
                    readonly lineHeight: "1";
                    readonly letterSpacing: "0.025em";
                };
                readonly label: {
                    readonly fontSize: "0.875rem";
                    readonly fontWeight: "500";
                    readonly lineHeight: "1";
                    readonly letterSpacing: "0em";
                };
                readonly caption: {
                    readonly fontSize: "0.75rem";
                    readonly fontWeight: "400";
                    readonly lineHeight: "1.5";
                    readonly letterSpacing: "0.025em";
                };
                readonly overline: {
                    readonly fontSize: "0.75rem";
                    readonly fontWeight: "500";
                    readonly lineHeight: "1.5";
                    readonly letterSpacing: "0.1em";
                    readonly textTransform: "uppercase";
                };
            };
        };
    };
    readonly spacing: {
        readonly scale: {
            readonly 0: "0px";
            readonly px: "1px";
            readonly 0.5: "0.125rem";
            readonly 1: "0.25rem";
            readonly 1.5: "0.375rem";
            readonly 2: "0.5rem";
            readonly 2.5: "0.625rem";
            readonly 3: "0.75rem";
            readonly 3.5: "0.875rem";
            readonly 4: "1rem";
            readonly 5: "1.25rem";
            readonly 6: "1.5rem";
            readonly 7: "1.75rem";
            readonly 8: "2rem";
            readonly 9: "2.25rem";
            readonly 10: "2.5rem";
            readonly 11: "2.75rem";
            readonly 12: "3rem";
            readonly 14: "3.5rem";
            readonly 16: "4rem";
            readonly 20: "5rem";
            readonly 24: "6rem";
            readonly 28: "7rem";
            readonly 32: "8rem";
            readonly 36: "9rem";
            readonly 40: "10rem";
            readonly 44: "11rem";
            readonly 48: "12rem";
            readonly 52: "13rem";
            readonly 56: "14rem";
            readonly 60: "15rem";
            readonly 64: "16rem";
            readonly 72: "18rem";
            readonly 80: "20rem";
            readonly 96: "24rem";
        };
        readonly semantic: {
            readonly "component-xs": "0.25rem";
            readonly "component-sm": "0.5rem";
            readonly "component-md": "0.75rem";
            readonly "component-lg": "1rem";
            readonly "component-xl": "1.5rem";
            readonly "gap-xs": "0.25rem";
            readonly "gap-sm": "0.5rem";
            readonly "gap-md": "1rem";
            readonly "gap-lg": "1.5rem";
            readonly "gap-xl": "2rem";
            readonly "gap-2xl": "3rem";
            readonly "section-sm": "2rem";
            readonly "section-md": "3rem";
            readonly "section-lg": "4rem";
            readonly "section-xl": "6rem";
            readonly "section-2xl": "8rem";
        };
        readonly borderRadius: {
            readonly none: "0px";
            readonly sm: "0.375rem";
            readonly DEFAULT: "0.5rem";
            readonly md: "0.5rem";
            readonly lg: "0.625rem";
            readonly xl: "0.875rem";
            readonly "2xl": "1.125rem";
            readonly "3xl": "1.375rem";
            readonly "4xl": "1.625rem";
            readonly full: "9999px";
        };
        readonly baseRadius: "0.625rem";
        readonly container: {
            readonly xs: "20rem";
            readonly sm: "24rem";
            readonly md: "28rem";
            readonly lg: "32rem";
            readonly xl: "36rem";
            readonly "2xl": "42rem";
            readonly "3xl": "48rem";
            readonly "4xl": "56rem";
            readonly "5xl": "64rem";
            readonly "6xl": "72rem";
            readonly "7xl": "80rem";
            readonly prose: "65ch";
        };
        readonly breakpoints: {
            readonly sm: "640px";
            readonly md: "768px";
            readonly lg: "1024px";
            readonly xl: "1280px";
            readonly "2xl": "1536px";
        };
        readonly zIndex: {
            readonly hide: -1;
            readonly auto: "auto";
            readonly base: 0;
            readonly docked: 10;
            readonly dropdown: 1000;
            readonly sticky: 1100;
            readonly banner: 1200;
            readonly overlay: 1300;
            readonly modal: 1400;
            readonly popover: 1500;
            readonly skipLink: 1600;
            readonly toast: 1700;
            readonly tooltip: 1800;
        };
        readonly shadows: {
            readonly none: "none";
            readonly xs: "0 1px 2px 0 rgb(0 0 0 / 0.05)";
            readonly sm: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)";
            readonly DEFAULT: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)";
            readonly md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)";
            readonly lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)";
            readonly xl: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)";
            readonly "2xl": "0 25px 50px -12px rgb(0 0 0 / 0.25)";
            readonly inner: "inset 0 2px 4px 0 rgb(0 0 0 / 0.05)";
        };
        readonly grid: {
            readonly columns: 12;
            readonly gutter: "1.5rem";
            readonly gutterMobile: "1rem";
            readonly margin: "1rem";
            readonly marginMobile: "1rem";
        };
    };
    readonly animation: {
        readonly durations: {
            readonly instant: "0s";
            readonly fastest: "0.05s";
            readonly faster: "0.1s";
            readonly fast: "0.15s";
            readonly normal: "0.2s";
            readonly slow: "0.3s";
            readonly slower: "0.4s";
            readonly slowest: "0.5s";
        };
        readonly easings: {
            readonly linear: "linear";
            readonly ease: "ease";
            readonly "ease-in": "ease-in";
            readonly "ease-out": "ease-out";
            readonly "ease-in-out": "ease-in-out";
            readonly "ease-out-quad": "cubic-bezier(0.25, 0.46, 0.45, 0.94)";
            readonly "ease-out-cubic": "cubic-bezier(0.215, 0.61, 0.355, 1)";
            readonly "ease-out-quart": "cubic-bezier(0.165, 0.84, 0.44, 1)";
            readonly "ease-out-back": "cubic-bezier(0.175, 0.885, 0.32, 1.275)";
            readonly "ease-in-quad": "cubic-bezier(0.55, 0.085, 0.68, 0.53)";
            readonly "ease-in-cubic": "cubic-bezier(0.55, 0.055, 0.675, 0.19)";
            readonly "ease-in-quart": "cubic-bezier(0.895, 0.03, 0.685, 0.22)";
            readonly "ease-in-back": "cubic-bezier(0.6, -0.28, 0.735, 0.045)";
            readonly "ease-in-out-quad": "cubic-bezier(0.455, 0.03, 0.515, 0.955)";
            readonly "ease-in-out-cubic": "cubic-bezier(0.645, 0.045, 0.355, 1)";
            readonly "ease-in-out-quart": "cubic-bezier(0.77, 0, 0.175, 1)";
            readonly "ease-in-out-back": "cubic-bezier(0.68, -0.55, 0.265, 1.55)";
            readonly spring: "cubic-bezier(0.175, 0.885, 0.32, 1.275)";
            readonly "spring-soft": "cubic-bezier(0.34, 1.56, 0.64, 1)";
        };
        readonly animations: {
            readonly "fade-in": {
                readonly duration: "0.2s";
                readonly easing: "ease-out";
                readonly keyframe: "fade-in";
            };
            readonly "fade-out": {
                readonly duration: "0.15s";
                readonly easing: "ease-in";
                readonly keyframe: "fade-out";
            };
            readonly "scale-in": {
                readonly duration: "0.2s";
                readonly easing: "cubic-bezier(0.175, 0.885, 0.32, 1.275)";
                readonly keyframe: "scale-in";
            };
            readonly "scale-out": {
                readonly duration: "0.15s";
                readonly easing: "ease-in";
                readonly keyframe: "scale-out";
            };
            readonly "slide-in-from-top": {
                readonly duration: "0.2s";
                readonly easing: "ease-out";
                readonly keyframe: "slide-in-from-top";
            };
            readonly "slide-in-from-bottom": {
                readonly duration: "0.2s";
                readonly easing: "ease-out";
                readonly keyframe: "slide-in-from-bottom";
            };
            readonly "slide-in-from-left": {
                readonly duration: "0.2s";
                readonly easing: "ease-out";
                readonly keyframe: "slide-in-from-left";
            };
            readonly "slide-in-from-right": {
                readonly duration: "0.2s";
                readonly easing: "ease-out";
                readonly keyframe: "slide-in-from-right";
            };
            readonly "dialog-in": {
                readonly duration: "0.2s";
                readonly easing: "cubic-bezier(0.215, 0.61, 0.355, 1)";
                readonly keyframe: "dialog-in";
            };
            readonly "dialog-out": {
                readonly duration: "0.15s";
                readonly easing: "cubic-bezier(0.55, 0.055, 0.675, 0.19)";
                readonly keyframe: "dialog-out";
            };
            readonly "popover-in": {
                readonly duration: "0.15s";
                readonly easing: "cubic-bezier(0.25, 0.46, 0.45, 0.94)";
                readonly keyframe: "popover-in";
            };
            readonly "popover-out": {
                readonly duration: "0.1s";
                readonly easing: "cubic-bezier(0.55, 0.085, 0.68, 0.53)";
                readonly keyframe: "popover-out";
            };
            readonly "accordion-down": {
                readonly duration: "0.2s";
                readonly easing: "ease-out";
                readonly keyframe: "accordion-down";
            };
            readonly "accordion-up": {
                readonly duration: "0.2s";
                readonly easing: "ease-out";
                readonly keyframe: "accordion-up";
            };
            readonly spin: {
                readonly duration: "1s";
                readonly easing: "linear";
                readonly keyframe: "spin";
            };
            readonly pulse: {
                readonly duration: "2s";
                readonly easing: "ease";
                readonly keyframe: "pulse";
            };
            readonly bounce: {
                readonly duration: "1s";
                readonly easing: "ease";
                readonly keyframe: "bounce";
            };
        };
        readonly keyframes: {
            readonly "fade-in": {
                readonly from: {
                    readonly opacity: "0";
                };
                readonly to: {
                    readonly opacity: "1";
                };
            };
            readonly "fade-out": {
                readonly from: {
                    readonly opacity: "1";
                };
                readonly to: {
                    readonly opacity: "0";
                };
            };
            readonly "scale-in": {
                readonly from: {
                    readonly opacity: "0";
                    readonly transform: "scale(0.95)";
                };
                readonly to: {
                    readonly opacity: "1";
                    readonly transform: "scale(1)";
                };
            };
            readonly "scale-out": {
                readonly from: {
                    readonly opacity: "1";
                    readonly transform: "scale(1)";
                };
                readonly to: {
                    readonly opacity: "0";
                    readonly transform: "scale(0.95)";
                };
            };
            readonly "slide-in-from-top": {
                readonly from: {
                    readonly opacity: "0";
                    readonly transform: "translateY(-0.5rem)";
                };
                readonly to: {
                    readonly opacity: "1";
                    readonly transform: "translateY(0)";
                };
            };
            readonly "slide-in-from-bottom": {
                readonly from: {
                    readonly opacity: "0";
                    readonly transform: "translateY(0.5rem)";
                };
                readonly to: {
                    readonly opacity: "1";
                    readonly transform: "translateY(0)";
                };
            };
            readonly "slide-in-from-left": {
                readonly from: {
                    readonly opacity: "0";
                    readonly transform: "translateX(-0.5rem)";
                };
                readonly to: {
                    readonly opacity: "1";
                    readonly transform: "translateX(0)";
                };
            };
            readonly "slide-in-from-right": {
                readonly from: {
                    readonly opacity: "0";
                    readonly transform: "translateX(0.5rem)";
                };
                readonly to: {
                    readonly opacity: "1";
                    readonly transform: "translateX(0)";
                };
            };
            readonly "dialog-in": {
                readonly from: {
                    readonly opacity: "0";
                    readonly transform: "scale(0.95) translateY(-0.5rem)";
                };
                readonly to: {
                    readonly opacity: "1";
                    readonly transform: "scale(1) translateY(0)";
                };
            };
            readonly "dialog-out": {
                readonly from: {
                    readonly opacity: "1";
                    readonly transform: "scale(1) translateY(0)";
                };
                readonly to: {
                    readonly opacity: "0";
                    readonly transform: "scale(0.95) translateY(-0.5rem)";
                };
            };
            readonly "popover-in": {
                readonly from: {
                    readonly opacity: "0";
                    readonly transform: "scale(0.98) translateY(-0.25rem)";
                };
                readonly to: {
                    readonly opacity: "1";
                    readonly transform: "scale(1) translateY(0)";
                };
            };
            readonly "popover-out": {
                readonly from: {
                    readonly opacity: "1";
                    readonly transform: "scale(1) translateY(0)";
                };
                readonly to: {
                    readonly opacity: "0";
                    readonly transform: "scale(0.98) translateY(-0.25rem)";
                };
            };
            readonly "accordion-down": {
                readonly from: {
                    readonly height: "0";
                    readonly opacity: "0";
                };
                readonly to: {
                    readonly height: "var(--radix-accordion-content-height)";
                    readonly opacity: "1";
                };
            };
            readonly "accordion-up": {
                readonly from: {
                    readonly height: "var(--radix-accordion-content-height)";
                    readonly opacity: "1";
                };
                readonly to: {
                    readonly height: "0";
                    readonly opacity: "0";
                };
            };
            readonly spin: {
                readonly from: {
                    readonly transform: "rotate(0deg)";
                };
                readonly to: {
                    readonly transform: "rotate(360deg)";
                };
            };
            readonly pulse: {
                readonly "0%, 100%": {
                    readonly opacity: "1";
                };
                readonly "50%": {
                    readonly opacity: "0.5";
                };
            };
            readonly bounce: {
                readonly "0%, 100%": {
                    readonly transform: "translateY(-25%)";
                    readonly animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)";
                };
                readonly "50%": {
                    readonly transform: "translateY(0)";
                    readonly animationTimingFunction: "cubic-bezier(0, 0, 0.2, 1)";
                };
            };
        };
        readonly transitions: {
            readonly default: "all 0.2s ease-in-out";
            readonly colors: "color, background-color, border-color, text-decoration-color, fill, stroke 0.2s ease-in-out";
            readonly opacity: "opacity 0.2s ease-in-out";
            readonly shadow: "box-shadow 0.2s ease-in-out";
            readonly transform: "transform 0.2s ease-in-out";
            readonly none: "none";
        };
    };
};
type Tokens = typeof tokens;

export { type AnimationCSS, type Animations, type BaseColors, type BaseRadius, type BorderRadius, type Breakpoints, type ColorScale, type Container, type Durations, type Easings, type FontFamilies, type FontSizes, type FontWeights, type Grid, type Keyframes, type LetterSpacings, type LineHeights, type SemanticColors, type SemanticSpacing, type Shadows, type Spacing, type Tokens, type Transitions, type Typography, type ZIndex, animationCSS, animations, baseColors, baseRadius, borderRadius, breakpoints, container, durations, easings, fontFamilies, fontSizes, fontWeights, grid, keyframes, letterSpacings, lineHeights, semanticColors, semanticSpacing, shadows, spacing, tokens, transitions, typography, zIndex };
