/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                forest: "#0f281e",
                earth: "#d4a373",
                "off-white": "#f8fafc",
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                display: ['Anton', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
