/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
        './pages/**/*.{js,jsx}',
        './components/**/*.{js,jsx}',
        './app/**/*.{js,jsx}',
        './src/**/*.{js,jsx}',
    ],
    prefix: "",
    theme: {
        container: {
            center: true,
            padding: "2rem",
            screens: {
                "2xl": "1400px",
            },
        },
        extend: {
            colors: {
                border: "var(--color-border)", /* gray-200 */
                input: "var(--color-input)", /* white */
                ring: "var(--color-ring)", /* deep-pink-500 */
                background: "var(--color-background)", /* gray-50 */
                foreground: "var(--color-foreground)", /* gray-800 */
                primary: {
                    DEFAULT: "var(--color-primary)", /* deep-pink-500 */
                    foreground: "var(--color-primary-foreground)", /* white */
                },
                secondary: {
                    DEFAULT: "var(--color-secondary)", /* cyan-400 */
                    foreground: "var(--color-secondary-foreground)", /* gray-800 */
                },
                destructive: {
                    DEFAULT: "var(--color-destructive)", /* red-500 */
                    foreground: "var(--color-destructive-foreground)", /* white */
                },
                muted: {
                    DEFAULT: "var(--color-muted)", /* gray-100 */
                    foreground: "var(--color-muted-foreground)", /* gray-500 */
                },
                accent: {
                    DEFAULT: "var(--color-accent)", /* indigo-500 */
                    foreground: "var(--color-accent-foreground)", /* white */
                },
                popover: {
                    DEFAULT: "var(--color-popover)", /* white */
                    foreground: "var(--color-popover-foreground)", /* gray-800 */
                },
                card: {
                    DEFAULT: "var(--color-card)", /* white */
                    foreground: "var(--color-card-foreground)", /* gray-800 */
                },
                success: {
                    DEFAULT: "var(--color-success)", /* emerald-500 */
                    foreground: "var(--color-success-foreground)", /* white */
                },
                warning: {
                    DEFAULT: "var(--color-warning)", /* amber-500 */
                    foreground: "var(--color-warning-foreground)", /* white */
                },
                error: {
                    DEFAULT: "var(--color-error)", /* red-500 */
                    foreground: "var(--color-error-foreground)", /* white */
                },
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
                mono: ['JetBrains Mono', 'Fira Code', 'Consolas', 'monospace'],
            },
            fontSize: {
                'xs': ['0.75rem', { lineHeight: '1rem' }],
                'sm': ['0.875rem', { lineHeight: '1.25rem' }],
                'base': ['1rem', { lineHeight: '1.5rem' }],
                'lg': ['1.125rem', { lineHeight: '1.75rem' }],
                'xl': ['1.25rem', { lineHeight: '1.75rem' }],
                '2xl': ['1.5rem', { lineHeight: '2rem' }],
                '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
                '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
                '5xl': ['3rem', { lineHeight: '1' }],
                '6xl': ['3.75rem', { lineHeight: '1' }],
                '7xl': ['4.5rem', { lineHeight: '1' }],
                '8xl': ['6rem', { lineHeight: '1' }],
                '9xl': ['8rem', { lineHeight: '1' }],
            },
            fontWeight: {
                normal: '400',
                medium: '500',
                semibold: '600',
                bold: '700',
            },
            spacing: {
                '18': '4.5rem',
                '88': '22rem',
                '128': '32rem',
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
            boxShadow: {
                'brand': 'var(--shadow-brand)',
                'floating': 'var(--shadow-floating)',
                'card': 'var(--shadow-card)',
            },
            backgroundImage: {
                'gradient-brand': 'var(--gradient-brand)',
                'gradient-brand-hover': 'var(--gradient-brand-hover)',
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'bounce-slow': 'bounce 2s infinite',
            },
            transitionTimingFunction: {
                'smooth': 'var(--timing-smooth)',
            },
            transitionDuration: {
                'fast': 'var(--duration-fast)',
                'medium': 'var(--duration-medium)',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
                pulse: {
                    '0%, 100%': { opacity: '1' },
                    '50%': { opacity: '0.7' },
                },
                bounce: {
                    '0%, 100%': {
                        transform: 'translateY(-25%)',
                        animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)',
                    },
                    '50%': {
                        transform: 'translateY(0)',
                        animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
                    },
                },
            },
        },
    },
    plugins: [
        require("tailwindcss-animate"),
    ],
}