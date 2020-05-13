import {INPUT_TEXT_CHANGE,
        BUTTON_CLICK} from './constants';

const initialStateUser = {
    cuvant: ""
}

const initialStateVerify = {
    isClicked: false
}

export const verifyUser = (state=initialStateUser, action={}) => {
    switch(action.type) {
        case INPUT_TEXT_CHANGE:
            return Object.assign({}, state, {cuvant: action.payload});
        default:
            return state;
    }
}

export const verifyButton = (state=initialStateVerify, action={}) => {
    switch(action.type) {
        case BUTTON_CLICK:
            return Object.assign({}, state, {isClicked:true});
        default:
            return state;
    }
}