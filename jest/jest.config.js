module.exports = {
    moduleNameMapper: {
        "^components/(.+)": "<rootDir>/src/components/$1"
    },
    rootDir: "../",
    roots: [
        "<rootDir>/src"
    ],
    transform: {
        "^.+\\.css$": "<rootDir>/jest/transform-css.js",
        "^.+\\.js$": "<rootDir>/jest/transform-js.js"
    }
};
