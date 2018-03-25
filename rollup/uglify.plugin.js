import { minify } from 'uglify-js';

export default () => {
    return {
        name: 'uglify',
        transformBundle(bundledSource) {
            return minify(bundledSource).code;
        }
    };
};
