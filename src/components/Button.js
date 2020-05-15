import React from 'react';

const Button = (props) => {
    return (
        <button onClick={props.click}>{props.message}</button>
    )
}

export default Button;