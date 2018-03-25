module.exports = {
    moduleNameMapper: {
        '^components/(.+)': '<rootDir>/src/components/$1'
    },
    rootDir: '../',
    roots: [
        '<rootDir>/src'
    ],
    transform: {
        '^.+\\.js$': '<rootDir>/jest/transform-js.js',
        '^.+\\.css$': '<rootDir>/jest/transform-css.js'
    }
};
