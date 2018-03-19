import React from 'react';
import ReactDOM from 'react-dom';
import Button from './components/button.js';
import './main.css';

ReactDOM.render(
    <Button clickHandler={() => alert('you clicked me')} text="click me" />,
    document.getElementById('root')
);
