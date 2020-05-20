import React from 'react';

import "./Input.css";
const Input = props => {
    return (
        <input  className="Input"
            type={props.type}
            placeholder={props.placeholder}
            onChange={props.change}
        />
    )
}

export default Input;