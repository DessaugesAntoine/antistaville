/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}", ],
    theme: {
        extend: {},
        colors: {
            'custom-black': '#1C1C1C',
            'custom-gray': '#7D7D7D',
            'custom-green': '#3F9544',
            'bgd-gray': '#F3F1EE',
            'bgd-green': '#C8E671',
            'border-gray': '#E8E6E3',
        },
        fontFamily: {
            'lexend': ['Lexend'],
            'inter': ['Inter'],
        }
    },
    plugins: [],
}

