import React from "react";

const Item = (props) => {
    return (
        <li key={props.name} onClick={props.click} data-name={props.name}>{props.name}</li>
    ) 
}
export default Item; 