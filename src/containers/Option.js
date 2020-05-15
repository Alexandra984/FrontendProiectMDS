import React, {Component} from "react";
import Dropdown from '../components/Dropdown';
import Button from '../components/Button';

class Option extends Component {
    render() {
        return (
            <div style={{border: "1px solid purple", height:"200px", width:"200px", margin: "5px"}}>
                <h5>{this.props.instruction1}</h5> 
                {this.props.dropdown ? <Dropdown click={this.props.click}/> : null}
                {this.props.button ? <Button click={this.props.click} message={this.props.message}/> : null}
                               
            </div>
        )
    }
}

export default Option;