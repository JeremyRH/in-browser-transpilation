import React from 'react';
import ReactDOM from 'react-dom';

console.log(
    <React.Fragment>
        <h1>hello</h1>
        <h2>world</h2>
    </React.Fragment>
);

console.log({ a: 1, ...({ b: 2, c: 3 }), d: 4 });
