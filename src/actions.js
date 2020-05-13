import {INPUT_TEXT_CHANGE,
        BUTTON_CLICK} from './constants';

export const setTextInput = (text) => ({
    type: INPUT_TEXT_CHANGE,
    payload: text
});

export const verifyButtonClicked = () => ({
    type: BUTTON_CLICK
})
