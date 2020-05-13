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
        console.log("exit button? " + isClickedToExit);
        console.log(word);
        console.log("Butonul a fost apasat? " + isClicked);
        let isManelist = false;
        if (word.trim() === 'bilet') {
            isManelist = true;
        }
        console.log("este userul un manelist? " + isManelist);
        
        let message='';
        if (isClicked=== true && isManelist === true) {
            message="ADEVARAAAAAT!"
        } else if (isClicked=== true && isManelist === false){
            message="ROACHERE, FUGI DAICI LA PLETOSI TAI!"
        } 

        console.log("mesajul pentru user este: " + message); 
        if (!isClickedToExit) {
            return(
                <div className="WelcomeTest">
                    {message ? <TestResponse message={message} clicked={onClickButtonExit} /> : 
                    ( <div>
                        <h1>Completeaza versul urmator:</h1>
                    <p>Am gasit in geanta ta un <Input 
                    change={onChangeInput} /> de la altcineva...</p>
                    <button onClick={onClickButton}>Verifica!</button>
                    </div>)
                    }
                </div>
            )

        } else {
            return (<h3>Alege ce vrei sa faci!</h3>);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WelcomeTest);