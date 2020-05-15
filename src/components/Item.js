import React from "react";

const Item = (props) => {
    return (
        <p onClick={props.click(props.name)}>{props.name}</p>
    ) 
}
export default Item; 