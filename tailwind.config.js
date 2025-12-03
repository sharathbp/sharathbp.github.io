/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                sans: ['"Inter"', 'sans-serif'],
                display: ['"Space Grotesk"', 'sans-serif'],
            },
            colors: {
                google: {
                    blue: '#4285F4',
                    red: '#EA4335',
                    yellow: '#FBBC05',
                    green: '#34A853',
                    gray: '#5f6368',
                    offwhite: '#F8F9FA',
                    dark: '#202124',
                    darksurface: '#303134',
                }
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'float-delayed': 'float 6s ease-in-out 3s infinite',
                'float-slow': 'float 8s ease-in-out infinite',
                'float-slower': 'float 10s ease-in-out infinite',
                'swim-1': 'swim1 25s ease-in-out infinite',
                'swim-2': 'swim2 30s ease-in-out infinite',
                'swim-3': 'swim3 35s ease-in-out infinite',
                'swim-4': 'swim4 40s ease-in-out infinite',
                'spring': 'spring 0.8s cubic-bezier(0.47, 1.64, 0.41, 0.8)',
                'jelly': 'jelly 0.8s both',
                'rubberBand': 'rubberBand 1s',
                'fade-in-up': 'fadeInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards',
                'wiggle': 'wiggle 2s ease-in-out infinite',
                'pop-in': 'popIn 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
                    '50%': { transform: 'translateY(-20px) rotate(2deg)' },
                },
                swim1: {
                    '0%, 100%': { transform: 'translate(0, 0) rotate(0deg)' },
                    '25%': { transform: 'translate(40px, -20px) rotate(5deg)' },
                    '50%': { transform: 'translate(20px, -50px) rotate(0deg)' },
                    '75%': { transform: 'translate(-20px, -20px) rotate(-5deg)' },
                },
                swim2: {
                    '0%, 100%': { transform: 'translate(0, 0) rotate(0deg)' },
                    '33%': { transform: 'translate(-50px, 30px) rotate(-5deg)' },
                    '66%': { transform: 'translate(30px, 60px) rotate(5deg)' },
                },
                swim3: {
                    '0%, 100%': { transform: 'translate(0, 0) rotate(0deg)' },
                    '20%': { transform: 'translate(30px, 30px) rotate(3deg)' },
                    '50%': { transform: 'translate(60px, 0px) rotate(0deg)' },
                    '80%': { transform: 'translate(30px, -30px) rotate(-3deg)' },
                },
                swim4: {
                    '0%, 100%': { transform: 'translate(0, 0) rotate(0deg)' },
                    '50%': { transform: 'translate(-60px, -40px) rotate(8deg)' },
                },
                spring: {
                    '0%': { transform: 'scale(0.7)' },
                    '40%': { transform: 'scale(1.2)' },
                    '100%': { transform: 'scale(1)' }
                },
                jelly: {
                    '0%, 100%': { transform: 'scale(1, 1)' },
                    '25%': { transform: 'scale(0.8, 1.25)' },
                    '50%': { transform: 'scale(1.25, 0.8)' },
                    '75%': { transform: 'scale(0.9, 1.1)' }
                },
                rubberBand: {
                    '0%': { transform: 'scale(1)' },
                    '30%': { transform: 'scale(1.25, 0.75)' },
                    '40%': { transform: 'scale(0.75, 1.25)' },
                    '50%': { transform: 'scale(1.15, 0.85)' },
                    '65%': { transform: 'scale(0.95, 1.05)' },
                    '75%': { transform: 'scale(1.05, 0.95)' },
                    '100%': { transform: 'scale(1)' }
                },
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(40px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                wiggle: {
                    '0%, 100%': { transform: 'rotate(-3deg)' },
                    '50%': { transform: 'rotate(3deg)' }
                },
                popIn: {
                    '0%': { opacity: '0', transform: 'scale(0.5)' },
                    '100%': { opacity: '1', transform: 'scale(1)' }
                }
            }
        },
    },
    plugins: [],
}
