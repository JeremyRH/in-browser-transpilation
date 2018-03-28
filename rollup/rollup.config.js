import aliasModuleSpecifiers from "rollup-plugin-alias-module-specifiers";
import commonjs from "rollup-plugin-commonjs";
import postcss from "rollup-plugin-postcss";
import babelConfig from "./babel.config.js";
import babel from "./babel.plugin.js";
import externalBabelHelpers from "./externalBabelHelpers.plugin.js";
import moduleMap from "./moduleMap.js";
import postcssConfig from "./postcss.config.js";
import uglify from "./uglify.plugin.js";

export default {
    experimentalDynamicImport: true,
    input: "src/main.js",
    output: {
        file: "dist/main.min.js",
        format: "iife",
        name: "main"
    },
    plugins: [
        postcss(postcssConfig),
        babel(babelConfig),
        aliasModuleSpecifiers(moduleMap),
        commonjs({
            sourceMap: false
        }),
        externalBabelHelpers(),
        uglify()
    ]
};
