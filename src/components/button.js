import './button.css';
import React from 'react';

const Button = ({ clickHandler, text }) => {
    return <button onClick={clickHandler} className="button-green">{text}</button>;
};

export default Button;
