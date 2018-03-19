import React from 'react';
import './button.css';

const Button = ({ clickHandler, text }) => {
    return <button onClick={clickHandler} className="button-green">{text}</button>;
};

export default Button;
