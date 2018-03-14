SystemJS.config({
    map : {
        'plugin-babel': '/node_modules/systemjs-plugin-babel/plugin-babel.js',
        'systemjs-babel-build': '/node_modules/systemjs-plugin-babel/systemjs-babel-browser.js',
        'react': '/node_modules/react/umd/react.development.js',
        'react-dom': '/node_modules/react-dom/umd/react-dom.development.js'
    },
    transpiler: 'plugin-babel',
    meta: {
        '*.js': {
            babelOptions: {
                es2015: false,
                stage2: false,
                stage3: true,
                react: true
            }
        }
    }
});
