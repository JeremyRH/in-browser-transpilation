import { buildExternalHelpers } from "@babel/core";

export default () => ({
    name: "external-babelHelpers",
    transformBundle(bundledSource) {
        return `${buildExternalHelpers()}\n${bundledSource}`;
    }
});
