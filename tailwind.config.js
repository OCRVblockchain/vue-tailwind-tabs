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
        extend: {
            boxShadow: {
                custom: '0px 2px 0px -1px rgba(255,255,255,1)'
            }
        },
    },
    variants: {
        extend: {
            borderRadius: ['first']
        },
    },
    plugins: [],
};
