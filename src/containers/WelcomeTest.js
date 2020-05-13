import React, { Component } from 'react';
import { connect } from 'react-redux';

import {setTextInput,
        verifyButtonClicked} from '../actions';

import Input from '../components/Input';

const mapStateToProps = state => {
    return {
        cuvant: state.verifyUser.cuvant,
        isClicked: state.verifyButton.isClicked
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSetTextInput: (event) => dispatch(setTextInput(event.target.value)),
        onCLickButton: () => dispatch(verifyButtonClicked())
    }
}

class WelcomeTest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            correctAnswer: false
        }
    }
    
    verifyAnswer = (cuvant) => {
        if (cuvant.trim() === 'bilet') {
            this.setState({correctAnswer: true})
        }
    }
    
    render() {
        const {cuvant, onSetTextInput, isClicked, onCLickButton} = this.props;
        console.log("cuvant este "+ cuvant);
        console.log(isClicked);
        if (isClicked === true) {
            const f = () => {this.verifyAnswer(cuvant)};
        }
        console.log(this.state);

        return (
            <div className="welcomeTest">
                <h1>Completeaza urmatorul vers:</h1>
                <p>Am gasit in geanta ta un <Input type="text" change={onSetTextInput}/> de la altcineva...</p>
                <button onClick={onCLickButton}>Verifica</button>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WelcomeTest);