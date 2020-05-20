import React from 'react';

import './Button.css';

const Button = (props) => {
    return (
        <button className="Button" onClick={props.click}>{props.message}</button>
    )
}

export default Button;