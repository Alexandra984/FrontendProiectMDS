import React from 'react';

const Input = props => {
    return (
        <input 
            type={props.type}
            placeholder={props.placeholder}
            onChange={props.change}
        />
    )
}

export default Input;