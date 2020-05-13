import React, { Component } from 'react';
import { connect } from 'react-redux';

import {setTextInput} from '../actions';

import Input from '../components/Input';

const mapStateToProps = state => {
    return {
        cuvant: state.cuvant
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSetTextInput: (event) => dispatch(setTextInput(event.target.value))
    }
}

class WelcomeTest extends Component {
    render() {
        const {cuvant, onSetTextInput} = this.props;
        console.log("cuvant este "+ cuvant);
        return (
            <div className="welcomeTest">
                <h1>Completeaza urmatorul vers:</h1>
                <p>Am gasit in geanta ta un <Input type="text" change={onSetTextInput}/> de la altcineva...</p>
                <button>Verifica</button>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WelcomeTest);