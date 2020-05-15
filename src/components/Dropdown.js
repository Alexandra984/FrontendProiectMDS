import React from "react";
import './Dropdown.css';
const Dropdown = (props) => {
    return (
    <div className="dropdown">
        <button onClick={props.click} className="mainmenubtn">Main Menu</button>
            <div className="dropdown-child">
            <a href="http://wwww.yourdomain.com/page1.html">Sub Menu 1</a>
            <a href="http://wwww.yourdomain.com/page2.html">Sub Menu 2</a>
            <a href="http://wwww.yourdomain.com/page3.html">Sub Menu 3</a>
            <a href="http://wwww.yourdomain.com/page4.html">Sub Menu 4</a>
            <a href="http://wwww.yourdomain.com/page5.html">Sub Menu 5</a>
            </div>
    </div>
    )
}

export default Dropdown;
