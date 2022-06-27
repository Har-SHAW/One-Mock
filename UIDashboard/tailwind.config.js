/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        borderRadius: {
            xl: "12px",
        },
        fontFamily: {
            mont: '"Montserrat", sans-serif',
            acl: "Aclonica",
        },
        extend: {
            colors: {
                onemock: "#0085FF",
            },
        },
    },
    plugins: [],
};
