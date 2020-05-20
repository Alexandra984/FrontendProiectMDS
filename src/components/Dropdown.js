import React from "react";
import './Dropdown.css';
import Item from './Item';

const Dropdown = (props) => {
    return (
    <div className="dropdown">
        <button onClick={props.click} className="mainmenubtn">Selecteaza</button>
            <div className="dropdown-child">
                {props.names.map((name, index) => <Item name={name} 
                                                key={index}
                                                click={props.click} />)}
            </div>
    </div>
    )
}

export default Dropdown;
