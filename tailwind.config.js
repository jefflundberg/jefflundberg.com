module.exports = {
    purge: {
        enabled: true,
        content: ["./src/**/*.liquid", "./src/**/*.html", "./src/**/*.md"],
    },
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
