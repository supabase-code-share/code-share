/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "'./src/**/*.html'", "./node_modules/flowbite/**/*.js"],
    theme: {
        extend: {
            width: {
                128: "36rem",
            },
        },
    },
    plugins: [
        require('flowbite/plugin')
    ],
};