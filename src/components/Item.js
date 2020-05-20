import React from "react";

import './Item.css';

const Item = (props) => {
    return (
        <div className="Options">
            <li key={props.name} onClick={props.click} data-name={props.name}>{props.name}</li>
        </div>
    ) 
}
export default Item; 