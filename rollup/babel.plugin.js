import { transform } from "@babel/core";
import { promisify } from "util";

const transformAsync = promisify(transform);
export default babelConfig => ({
    name: "babel-transform",
    transform(source) {
        return transformAsync(source, babelConfig);
    }
});
