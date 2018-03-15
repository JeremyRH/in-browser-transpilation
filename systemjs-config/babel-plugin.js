const babel = require('babel-standalone');

exports.translate = function(load) {
    const output = babel.transform(load.source, {
        plugins: [
            'transform-modules-systemjs',
            'transform-react-jsx'
        ],
        presets: [
            'stage-3'
        ],
        sourceMaps: true
    });
    output.map.sources = [load.name];
    load.metadata.sourceMap = output.map;
    return output.code;
};
