module.exports = {
    purge: {
        enabled: true,
        content: [
            './src/**/*.vue',
            './src/**/*.js',
            './public/**/*.html',
        ]
    },
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {},
    },
    variants: {
        extend: {
            borderRadius: ['first']
        },
    },
    plugins: [],
};
