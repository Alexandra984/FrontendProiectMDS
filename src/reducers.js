import {CHANGE_INPUT,
        CLICK_BUTTON,
        CLICK_BUTTON_EXIT} from './constants';

const initialStateInput = {
    word: ""
}

const initialStateButton = {
    isClicked: false
}

const initialStateButtonExit = {
    isClicked: false
}

export const checkInput = (state=initialStateInput, action={}) => {
    switch(action.type) {
        case CHANGE_INPUT:
            return Object.assign({}, state, {word: action.payload});
        default:
            return state;
    }
}

export const createMessage = (state=initialStateButton, action={}) => {
    switch(action.type) {
        case CLICK_BUTTON:
            return Object.assign({}, state, {isClicked: true});
        default:
            return state;
    }
}

export const ExitTest = (state=initialStateButtonExit, action={}) => {
    switch(action.type) {
        case CLICK_BUTTON_EXIT:
            return Object.assign({}, state, {isClicked: true});
        default:
            return state;
    }
}
