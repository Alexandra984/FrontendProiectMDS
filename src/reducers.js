import {INPUT_TEXT_CHANGE} from './constants';

const initialStateUser = {
    cuvant: ""
}

export const verifyUser = (state=initialStateUser, action={}) => {
    switch(action.type) {
        case INPUT_TEXT_CHANGE:
            return Object.assign({}, state, {cuvant: action.payload});
        default:
            return state;
    }
}