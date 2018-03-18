import { buildExternalHelpers, transform } from '@babel/core';
import aliasModuleSpecifiers from 'rollup-plugin-alias-module-specifiers';
import commonjs from 'rollup-plugin-commonjs';
import { minify } from 'uglify-js';
import { promisify } from 'util';

const transformAsync = promisify(transform);

export default {
    input: 'src/main.js',
    output: {
        file: 'dist/main.min.js',
        format: 'iife'
    },
    plugins: [
        {
            name: 'babel-transform',
            transform(source) {
                return transformAsync(source, {
                    ast: false,
                    babelrc: false,
                    compact: true,
                    plugins: [
                        '@babel/plugin-external-helpers',
                        '@babel/plugin-transform-react-jsx'
                    ],
                    presets: [
                        '@babel/preset-stage-3',
                        ['@babel/preset-env', {
                            targets: {
                                browsers: [
                                    'last 2 versions',
                                    'ie >= 11'
                                ]
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
                return buildExternalHelpers() + bundledSource;
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
