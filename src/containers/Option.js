import React, {Component} from "react";
import Dropdown from '../components/Dropdown';
import Button from '../components/Button';
import './Option.css'

class Option extends Component {
    render() {
        return (
            <div className="Option">
                <h5>{this.props.instruction1}</h5> 
                {this.props.dropdown ? <Dropdown 
                    click={this.props.click}
                    names={this.props.names}
                    ids={this.props.ids}
                    /> : null}
                {this.props.change ? <input onChange={this.props.change} placeholder="Introdu maneaua"/>: null}             
                {this.props.inputs ? 
                    <div className="inputs">
                    <input onChange={this.props.change01} type="text" placeholder="Titlu"/>
                    <input  onChange={this.props.change02} type="text" placeholder="Gen"/>
                    <input onChange={this.props.change03} type="text" placeholder="Link"/>
                    <input onChange={this.props.change04} type="text" placeholder="Artist"/>
                    </div>
                     : null}
                {this.props.button ? <Button click={this.props.click2} message={this.props.message}/> : null}
            </div>
        )
    }
}

export default Option;