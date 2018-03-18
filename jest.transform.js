const babelJest = require('babel-jest');

module.exports = babelJest.createTransformer({
    plugins: [
        '@babel/plugin-transform-modules-commonjs',
        '@babel/plugin-transform-react-jsx'
    ],
    presets: [
        '@babel/preset-stage-3'
    ]
});
