SystemJS.config({
    map: {
        '@babel/standalone': '/node_modules/@babel/standalone/babel.min.js',
        'react': '/node_modules/react/umd/react.development.js',
        'react-dom': '/node_modules/react-dom/umd/react-dom.development.js'
    },
    transpiler: '/systemjs.transform.js'
});
