import React from "react";

import Artist from './Artist';
const ManeleList = (props) => {
    const artist = props.artist;
    return (
        <div>
            <Artist 
                numeArtist={artist.name} 
                varsta={artist.age}
                biography={artist.biography} />
        </div>
    )
}

export default ManeleList;