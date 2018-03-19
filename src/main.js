import './main.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Button from './components/button.js';
import Input from './components/input.js';

ReactDOM.render(
    <>
        <Button clickHandler={() => alert('you clicked me')} text="click me" />
        <Input placeholder="im an input" />
    </>,
    document.getElementById('root')
);
