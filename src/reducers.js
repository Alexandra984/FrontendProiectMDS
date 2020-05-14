import {CHANGE_INPUT,
        CLICK_BUTTON,
        CLICK_BUTTON_EXIT,
        REQUEST_MANEA_ARTIST_PENDING,
        REQUEST_MANEA_ARTIST_SUCCESS,
        REQUEST_MANEA_ARTIST_FAILED} from './constants';

const initialStateInput = {
    word: ""
}

const initialStateButton = {
    isClicked: false
}

const initialStateButtonExit = {
    isClicked: false
}


const initialStateManeleByArtist = {
    isPending: false,
    manele: [],
}

const initialStateInputArtist = {
    artist: "",
    emptyInput: false
}

export const checkInput = (state=initialStateInput, action={}) => {
    switch(action.type) {
        case CHANGE_INPUT:
            return Object.assign({}, state, {word: action.payload});
        default:
            return state;
    }
}

export const checkInputArtist = (state=initialStateInputArtist, action={}) => {
    switch(action.type) {
        case CHANGE_INPUT:
            return Object.assign({}, state, {artist: action.payload, emptyInput: true});
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

export const requestManeleByArtists = (state=initialStateManeleByArtist, action={}) => {
    switch(action.type) {
        case REQUEST_MANEA_ARTIST_PENDING:
            return Object.assign({}, state, {isPending:true});
        case REQUEST_MANEA_ARTIST_SUCCESS:
            return Object.assign({}, state, {manele: action.payload, isPending: false});
        case REQUEST_MANEA_ARTIST_FAILED:
            return Object.assign({}, state, {error: action.payload, isPending: false});
        default: 
            return state;
    }
}