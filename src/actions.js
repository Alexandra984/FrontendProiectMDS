import {INPUT_TEXT_CHANGE} from './constants';

export const setTextInput = (text) => ({
    type: INPUT_TEXT_CHANGE,
    payload: text
})
