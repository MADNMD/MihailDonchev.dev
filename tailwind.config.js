/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/**/*.{html,js}"
    ],
    theme: {
        extend: {
            screens: {
                xxs: "328px",
                xs: "396px",
                sm: "480px",
                md: "768px",
                lg: "976px",
                xl: "1440px",
            },
            colors: {
                'navigation-bg': '#181818',
                'navigation-text': '#4F617D',
            }
        },
    },
    plugins: [],
};
