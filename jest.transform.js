const babelJest = require('babel-jest');

module.exports = babelJest.createTransformer({
    plugins: [
        'transform-es2015-modules-commonjs',
        'transform-react-jsx'
    ]
});
