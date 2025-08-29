/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./popup/**/*.{ts,tsx}",
        "./options/**/*.{ts,tsx}",
        "./contents/**/*.{ts,tsx}",
        "./.plasmo/**/*.{ts,tsx}"
    ],
    theme: { extend: {} },
    plugins: []
}
