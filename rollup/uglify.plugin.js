import { minify } from "uglify-js";

export default () => ({
    name: "uglify",
    transformBundle(bundledSource) {
        return minify(bundledSource).code;
    }
});
