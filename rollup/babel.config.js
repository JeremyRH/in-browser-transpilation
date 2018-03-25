import browserTargets from './browserTargets.js';

export default {
    ast: false,
    babelrc: false,
    plugins: [
        '@babel/plugin-external-helpers',
        '@babel/plugin-transform-react-jsx',
        '@babel/plugin-proposal-class-properties'
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
};
