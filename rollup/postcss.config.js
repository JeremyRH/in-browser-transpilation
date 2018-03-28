import autoprefixer from "autoprefixer";
import cssClean from "postcss-clean";
import browserTargets from "./browserTargets.js";

export default {
    extract: true,
    plugins: [
        autoprefixer({
            browsers: browserTargets
        }),
        cssClean()
    ]
};
