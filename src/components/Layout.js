import React from 'react';
import './Layout.css';
const Layout = props => {
    return (
        <div>
            <p className="title">Colaj Manele Vechi</p>
            {props.children} 
        </div>   
    )
}

export default Layout;