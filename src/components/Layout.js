import React from 'react';
import './Layout.css';
const Layout = props => {
    return (
        <div>
            <div className="title">
            <p className="title">Colaj Manele Vechi</p>
            <i class="fas fa-heart"></i>
            </div>
            {props.children} 
        </div>   
    )
}

export default Layout;