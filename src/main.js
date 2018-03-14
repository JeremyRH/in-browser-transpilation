import React from 'react';
import ReactDOM from 'react-dom';

export const frag = <React.Fragment>
    <h1>hello</h1>
    <h2>world</h2>
</React.Fragment>;
export const obj = { a: 1, ...({ b: 2, c: 3 }), d: 4 };

console.log(frag, obj);
