import React from 'react';

const Layout = props => {
    return (
        <div>
            <p>Colaj Manele Vechi</p>
            {props.children} 
        </div>   
    )
}

export default Layout;