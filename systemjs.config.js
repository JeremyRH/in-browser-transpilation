SystemJS.config({
    map: {
        '@babel/standalone': '/node_modules/@babel/standalone/babel.min.js',
        'css': '/node_modules/systemjs-plugin-css/css.js',
        'react': '/node_modules/react/umd/react.development.js',
        'react-dom': '/node_modules/react-dom/umd/react-dom.development.js'
    },
    meta: {
        '*.css': {
            loader: 'css'
        }
    },
    transpiler: '/systemjs.transform.js'
});
