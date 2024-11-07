/** @type {import('tailwindcss').Config} */

export default {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#378E87",
                "primary-dark": "#00524D",
                "primary-content": "#D5EFED",
                "primary-light": "#FDFEFF",
            },
        },
    },
};
