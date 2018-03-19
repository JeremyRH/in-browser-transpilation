# Transpiling in the browser

A no-build workflow while developing.

## Overview

This is an example of how modern JavaScript development can be done without a build step. JSX, TypeScript, and bare `import` specifiers are common in JavaScript projects today. Unfortunately, that code cannot run in modern browsers without first being transformed or "transpiled". A common workflow involves making changes, waiting for a build step to complete, and testing the result. There are a few tools that make this step almost seamless, but they all require a monitoring task to watch for changes. Alternatively, the transformation step could happen in the browser. This enables a more classic workflow of making changes and reloading the page.

## Technical details

[SystemJS](https://github.com/systemjs/systemjs) is used for loading JavaScript modules. Before each module is executed, it is transformed on the fly, in the browser using [@babel/standalone](https://github.com/babel/babel/tree/master/packages/babel-standalone). CSS is not transformed, `import './style.css';` is converted to: `<link type="text/css" rel="stylesheet" href="https://example.com/src/style.css">` and inserted into the head of the document.

The production build step uses [rollup](https://github.com/rollup/rollup) for bundling JavaScript modules into a single bundle, [babel](https://github.com/babel/babel) for transpiling, and [uglify-js](https://github.com/mishoo/UglifyJS2) for minification. The CSS is bundled using [rollup-plugin-postcss](https://github.com/egoist/rollup-plugin-postcss), auto-prefixed using [autoprefixer](https://github.com/postcss/autoprefixer), and minified using [postcss-clean](https://github.com/leodido/postcss-clean).
