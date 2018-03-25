import './main.css';
import React from 'react';
import ReactDOM from 'react-dom';
import List from 'components/list/list.js';

ReactDOM.render(
    <>
        <h1>List of things</h1>
        <List initialItems={['one', 'two', 'three']} />
    </>,
    document.getElementById('root')
);
