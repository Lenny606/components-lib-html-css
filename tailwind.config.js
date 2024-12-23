/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        './src/**/*.{jsx, tsx,html,js}'
    ],
    theme: {
        extend: {
            animation: {
                appear: 'appear 2s linear',
            },
            keyframes: {
                appear: {
                    '0%': {opacity: '0', transform: 'scale(0.5)'},
                    '100%': {opacity: '1', transform: 'scale(1)'},
                },
            },
        },
    },
    plugins: [],
}

