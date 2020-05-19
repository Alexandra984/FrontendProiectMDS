import React, { Component } from 'react';
import { connect } from 'react-redux';


import {changeInput, clickButton, clickButtonExit} from '../actions';

import Input from '../components/Input';
import './WelcomeTest.css';
import TestResponse from '../components/TestResponse';

const mapStateToProps = state => {
    return {
        word: state.checkInput.word,
        isClicked: state.createMessage.isClicked,
        isClickedToExit: state.ExitTest.isClicked
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onChangeInput: (event) => dispatch(changeInput(event.target.value)),
        onClickButton: () => dispatch(clickButton()),
        onClickButtonExit: () => dispatch(clickButtonExit())
    }
}

class WelcomeTest extends Component {
    render() {
        const {word, onChangeInput, onClickButton, onClickButtonExit, isClicked, isClickedToExit} = this.props;
        let isManelist = false;
        if (word.trim() === 'bilet') {
            isManelist = true;
        }
       
        
        let message='';
        if (isClicked=== true && isManelist === true) {
            message="ADEVARAAAAAT!"
        } else if (isClicked=== true && isManelist === false){
            message="ROACHERE, FUGI DAICI LA PLETOSI TAI!"
        } 

        if (!isClickedToExit) {
            return(
                <div className="WelcomeTest">
                    {message ? <TestResponse message={message} clicked={onClickButtonExit} /> : 
                    ( <div className="Content">
                        <h1>Completeaza versul urmator:</h1>
                    <em>"Am gasit in geanta ta un <Input 
                    change={onChangeInput} /> de la altcineva..."</em>
                    <button onClick={onClickButton}>Verifica!</button>
                    </div>)
                    }
                </div>
            )

        } else {
            return null;
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WelcomeTest);