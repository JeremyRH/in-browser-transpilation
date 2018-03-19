import './input.css';
import React from 'react';

const Input = ({ placeholder = '' }) => {
    return <input placeholder={placeholder} className="input-red" />;
};

export default Input;
