import React from 'react';

const Artist = (props) => {
    return (
        <div>
            <h1>{props.numeArtist}</h1>
            <p>Varsta: {props.varsta}</p>
            <p>{props.biography}</p>
        </div>
    )
}

export default Artist;