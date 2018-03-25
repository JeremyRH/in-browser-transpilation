const { transform } = require('@babel/standalone');

exports.translate = function({ name, metadata, source }) {
    const output = transform(source, {
        filename: name,
        plugins: [
            'transform-modules-systemjs',
            'transform-react-jsx'
        ],
        presets: [
            'stage-3'
        ],
        sourceMaps: true
    });
    metadata.sourceMap = output.map;
    return output.code;
};
