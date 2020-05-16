import {CHANGE_INPUT,
        CLICK_BUTTON,
        CLICK_BUTTON_EXIT,
        REQUEST_ALL_MANELE_PENDING,
        REQUEST_ALL_MANELE_SUCCESS,
        REQUEST_ALL_MANELE_FAILED,
        REQUEST_ALL_ARTISTS_PENDING,
        REQUEST_ALL_ARTISTS_SUCCESS,
        REQUEST_ALL_ARTISTS_FAILED,
        REQUEST_ARTIST_PENDING,
        REQUEST_ARTIST_SUCCESS,
        REQUEST_ARTIST_FAILED,
        CLICK_ARTIST,
        MANEA_CHANGE,
        REQUEST_MANEA_SUCCESS,
        REQUEST_MANEA_PENDING,
        REQUEST_MANEA_FAILED} from './constants';

const initialStateInput = {
    word: ""
}

const initialStateButton = {
    isClicked: false
}

const initialStateButtonExit = {
    isClicked: false
}


// const initialStateManeleByArtist = {
//     isPending: false,
//     manele: [],
// }

// const initialStateInputArtist = {
//     artist: "",
//     emptyInput: false
// }

/***************************************************************/ 
export const checkInput = (state=initialStateInput, action={}) => {
    switch(action.type) {
        case CHANGE_INPUT:
            return Object.assign({}, state, {word: action.payload});
        default:
            return state;
    }
}

// export const checkInputArtist = (state=initialStateInputArtist, action={}) => {
//     switch(action.type) {
//         case CHANGE_INPUT:
//             return Object.assign({}, state, {artist: action.payload, emptyInput: true});
//         default:
//             return state;
//     }
// }

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

// export const requestManeleByArtists = (state=initialStateManeleByArtist, action={}) => {
//     switch(action.type) {
//         case REQUEST_MANEA_ARTIST_PENDING:
//             return Object.assign({}, state, {isPending:true});
//         case REQUEST_MANEA_ARTIST_SUCCESS:
//             return Object.assign({}, state, {manele: action.payload, isPending: false});
//         case REQUEST_MANEA_ARTIST_FAILED:
//             return Object.assign({}, state, {error: action.payload, isPending: false});
//         default: 
//             return state;
//     }
// }

/*************************************************************/ 
// reducer for all manele
const initialStateAllManele = {
    allManele: [],
    isPending: false,
    error: "",
    displayManele: false
}

export const requestAllManeleR = (state=initialStateAllManele, action={}) => {
    switch(action.type) {
            case REQUEST_ALL_MANELE_PENDING:
                return Object.assign({}, state, {isPending:true});
            case REQUEST_ALL_MANELE_SUCCESS:
                return Object.assign({}, state, {allManele: action.payload, isPending: false, displayManele: true});
            case REQUEST_ALL_MANELE_FAILED:
                return Object.assign({}, state, {error: action.payload, isPending: false});
            default:
                return state;
    }
}

/******************************************************************/
// reducer for all artists!
const initialStateAllArtists = {
    allArtists: [],
    isPending: false,
    error: "",
}


export const requestAllArtistsR = (state=initialStateAllArtists, action={}) => {
    switch(action.type) {
            case REQUEST_ALL_ARTISTS_PENDING:
                return Object.assign({}, state, {isPending:true});
            case REQUEST_ALL_ARTISTS_SUCCESS:
                return Object.assign({}, state, {allArtists: action.payload, isPending: false} );
            case REQUEST_ALL_ARTISTS_FAILED:
                return Object.assign({}, state, {error: action.payload, isPending: false});
            default:
                return state;
    }
}

//************************************************************ */
// reducer for a specific artist
const initialStateArtist = {
    artist: [],
    isPending: false,
    error: ""
}

export const requestArtistR = (state=initialStateArtist, action={}) => {
    switch(action.type) {
            case REQUEST_ARTIST_PENDING:
                return Object.assign({}, state, {isPending:true});
            case REQUEST_ARTIST_SUCCESS:
                return Object.assign({}, state, {artist: action.payload, isPending: false});
            case REQUEST_ARTIST_FAILED:
                return Object.assign({}, state, {error: action.payload, isPending: false});
            default:
                return state;
    }
}

const initialStateClickedArtist = {
    artistClicked: ''
}

export const clickArtistR = (state=initialStateClickedArtist, action={}) => {
    switch(action.type) {
        case CLICK_ARTIST:
            return Object.assign({}, state, {artistClicked: action.payload});
        default:
            return state;
    }
}

// caut manea
const initalStateInputManea = {
    maneaTitle: ''
} 

export const changeInputManea = (state=initalStateInputManea, action={}) => {
    switch(action.type) {
        case MANEA_CHANGE:
            return Object.assign({}, state, {maneaTitle: action.payload});
        default:
            return state;
    }
}

// request manea;

const initialStateManeaRequest = {
    manea: '',
    isPending: false,
    error: ''
}

export const requestManeaR = (state=initialStateManeaRequest, action={}) => {
    switch(action.type) {
        case REQUEST_MANEA_PENDING:
            return Object.assign({}, state, {isPending:true});
        case REQUEST_MANEA_SUCCESS:
            return Object.assign({}, state, {manea: action.payload, isPending: false});
        case REQUEST_MANEA_FAILED:
            return Object.assign({}, state, {error: action.payload, isPending: false});
        default:
            return state;
    }
}