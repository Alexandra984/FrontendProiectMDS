import React, {Component} from "react";
import Dropdown from '../components/Dropdown';

class Option extends Component {
    render() {
        return (
            <div style={{border: "1px solid purple", height:"200px", width:"200px", margin: "5px"}}>
                <h5>{this.props.instructions}</h5> 
                <input type="text" placeholder={this.props.instruction1} onChange={this.props.change}/>
                <Dropdown />
               
                <button onClick={this.props.clicked}>Cauta!</button>
                
            </div>
        )
    }
}

export default Option;