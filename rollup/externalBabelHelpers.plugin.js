import { buildExternalHelpers } from '@babel/core';

export default () => {
    return {
        name: 'external-babelHelpers',
        transformBundle(bundledSource) {
            return buildExternalHelpers() + '\n' + bundledSource;
        }
    };
};
