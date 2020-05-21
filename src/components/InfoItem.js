import React from "react";
import './InfoItem.css';
const InfoItem = props => {
    return (
        <div className="InfoItem2">
            <h1>{props.title}</h1>
            <p className="genre">{props.genre}</p>
             {props.dlink ? <a href={props.link} target="_blank">Asculta, barosane</a> : null}
            <p className="artist">{props.artist}</p>
            <p className="age">{props.age}</p>
            <p className="biography">{props.biography}</p>
        </div>
    )
}

export default InfoItem;