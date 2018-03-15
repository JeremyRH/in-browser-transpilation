import aliasModuleSpecifiers from 'rollup-plugin-alias-module-specifiers';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';

export default [
    {
        input: 'src/main.js',
        output: {
            file: 'dist/bundle.js',
            format: 'iife'
        },
        plugins: [
            aliasModuleSpecifiers({
                'react': './node_modules/react/umd/react.production.min.js',
                'react-dom': './node_modules/react-dom/umd/react-dom.production.min.js'
            }),
            babel({
                babelrc: false,
                exclude: 'node_modules/**',
                plugins: [
                    'external-helpers',
                    'transform-react-jsx'
                ],
                presets: [
                    'stage-3',
                    ['env', {
                        targets: {
                            browsers: ["last 2 versions", "ie >= 11"]
                        },
                        modules: false
                    }],
                    'minify'
                ]
            }),
            commonjs()
        ]
    },
    {
        input: 'src/polyfills.js',
        output: {
            file: 'dist/polyfills.js',
            format: 'es'
        },
        plugins: [
            aliasModuleSpecifiers({
                'babel-polyfill': './node_modules/babel-polyfill/dist/polyfill.min.js'
            })
        ]
    }
];
