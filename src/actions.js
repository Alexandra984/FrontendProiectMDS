import {CHANGE_INPUT,
        CLICK_BUTTON,
        CLICK_BUTTON_EXIT} from './constants';

export const changeInput = (text) => ({
    type: CHANGE_INPUT,
    payload: text
})

export const clickButton = () => ({
    type: CLICK_BUTTON
})

export const clickButtonExit = () => ({
    type: CLICK_BUTTON_EXIT
})