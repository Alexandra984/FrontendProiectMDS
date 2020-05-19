import React from "react";

const TestResponse = props => {
    return (
    <div className="Content">
        <h1>{props.message}</h1>
        <button onClick={props.clicked}>Iesi!</button>
    </div>)
}

export default TestResponse;