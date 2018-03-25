SystemJS.config({
    map: {
        '@babel/standalone': '/node_modules/@babel/standalone/babel.min.js',
        'components/': '/src/components/',
        'react': '/node_modules/react/umd/react.development.js',
        'react-dom': '/node_modules/react-dom/umd/react-dom.development.js'
    },
    meta: {
        '/src/*.css': {
            loader: '/systemjs/css-loader.js'
        },
        '/src/*.js': {
            loader: '/systemjs/js-loader.js'
        }
    },
    packages: {
        '/node_modules': {
            defaultExtension: 'js'
        }
    }
});
