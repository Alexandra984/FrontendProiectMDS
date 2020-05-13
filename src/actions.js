import {CHANGE_INPUT,
        CLICK_BUTTON,
        CLICK_BUTTON_EXIT,
        REQUEST_MANEA_ARTIST_PENDING,
        REQUEST_MANEA_ARTIST_SUCCESS,
        REQUEST_MANEA_ARTIST_FAILED} from './constants';

import {apiLink} from './api/api';

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

const requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };

const artist="Susanu";

var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

export const requestManeleByArtist = () => (dispatch) => {
    dispatch({type: REQUEST_MANEA_ARTIST_PENDING})
    fetch(`${apiLink}/artist/one?name=${artist}`, requestOptions)
    .then(response => response.json())
    .then(data => dispatch({type: REQUEST_MANEA_ARTIST_SUCCESS, payload: data}))
    .catch(error => dispatch({type: REQUEST_MANEA_ARTIST_FAILED, payload: error}))
}