import React, {Component} from "react";

class Option extends Component {
    render() {
        return (
            <div style={{border: "1px solid purple", height:"200px", width:"200px", margin: "5px"}}>
                <h5>{this.props.instructions}</h5> 
                <input type="text" placeholder={this.props.instruction1}/>
                <input type="text" placeholder={this.props.instruction2}/>
                <input type="text" placeholder={this.props.instruction3}/>
                
            </div>
        )
    }
}

export default Option;