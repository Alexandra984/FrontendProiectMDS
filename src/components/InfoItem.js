import React from "react";
import './InfoItem.css';
const InfoItem = props => {
    return (
        <div>
            <h1>{props.title}</h1>
            <p>{props.genre}</p>
            <p>{props.link}</p>
            <p>{props.artist}</p>
            <p>{props.age}</p>
            <p>{props.biography}</p>
        </div>
    )
}

export default InfoItem;