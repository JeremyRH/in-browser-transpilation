import aliasModuleSpecifiers from 'rollup-plugin-alias-module-specifiers';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';

export default {
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
            exclude: 'node_modules/**'
        }),
        commonjs()
    ]
};
