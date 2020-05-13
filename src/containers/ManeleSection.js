import React from "react";
import Option from "./Option";
import ManeleList from "../components/ManeleList";
class ManeleSection extends React.Component {
    render() {
        return (
            <div style={{border: "1px solid blue", height: "500px"}}>
                <Option 
                    instructions="Vezi manele ca un manelist adevarat"
                    instruction1="artist"
                    instruction2="dupa gen"
                    instruction3="cauta manea"
                />
                <ManeleList />
            </div>
        )
    }
}

export default ManeleSection;