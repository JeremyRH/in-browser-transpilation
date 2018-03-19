import { buildExternalHelpers, transform } from '@babel/core';
import autoprefixer from 'autoprefixer';
import cssClean from 'postcss-clean';
import aliasModuleSpecifiers from 'rollup-plugin-alias-module-specifiers';
import commonjs from 'rollup-plugin-commonjs';
import postcss from 'rollup-plugin-postcss'
import { minify } from 'uglify-js';
import { promisify } from 'util';

const transformAsync = promisify(transform);
const browserTargets = [
    'last 2 versions',
    'ie >= 11'
];

export default {
    input: 'src/main.js',
    output: {
        file: 'dist/main.min.js',
        format: 'iife',
        name: 'main'
    },
    experimentalDynamicImport: true,
    plugins: [
        postcss({
            extract: true,
            plugins: [
                autoprefixer({
                    browsers: browserTargets
                }),
                cssClean()
            ]
        }),
        {
            name: 'babel-transform',
            transform(source) {
                return transformAsync(source, {
                    ast: false,
                    babelrc: false,
                    plugins: [
                        '@babel/plugin-external-helpers',
                        '@babel/plugin-transform-react-jsx'
                    ],
                    presets: [
                        '@babel/preset-stage-3',
                        ['@babel/preset-env', {
                            targets: {
                                browsers: browserTargets
                            },
                            modules: false
                        }]
                    ]
                });
            }
        },
        aliasModuleSpecifiers({
            'react': './node_modules/react/umd/react.production.min.js',
            'react-dom': './node_modules/react-dom/umd/react-dom.production.min.js'
        }),
        commonjs({
            sourceMap: false
        }),
        {
            name: 'external-babelHelpers',
            transformBundle(bundledSource) {
                return buildExternalHelpers() + '\n' + bundledSource;
            }
        },
        {
            name: 'uglify',
            transformBundle(bundledSource) {
                return minify(bundledSource).code;
            }
        }
    ]
};
