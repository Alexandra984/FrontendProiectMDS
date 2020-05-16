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
        REQUEST_MANEA_PENDING,
        REQUEST_MANEA_SUCCESS,
        REQUEST_MANEA_FAILED } from './constants';

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

// const requestOptions = {
//     method: 'GET',
//     redirect: 'follow'
//   };

// var myHeaders = new Headers();
// myHeaders.append("Content-Type", "application/json");

// export const requestManeleByArtist = (artist) => (dispatch) => {
//     dispatch({type: REQUEST_MANEA_ARTIST_PENDING})
//     fetch(`${apiLink}/artist/one?name=${artist}`, requestOptions)
//     .then(response => response.json())
//     .then(data => dispatch({type: REQUEST_MANEA_ARTIST_SUCCESS, payload: data}))
//     .catch(error => dispatch({type: REQUEST_MANEA_ARTIST_FAILED, payload: error}))
// }

const requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };

var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

// export const requestAllManele = () => (dispatch) => {
//     dispatch({type: REQUEST_ALL_MANELE_PENDING})
//     fetch(`${apiLink}/artist`, requestOptions)
//     .then(response => response.json())
//     .then(data => dispatch({type: REQUEST_ALL_MANELE_SUCCESS, payload: data}))
//     .catch(error => dispatch({type: REQUEST_ALL_MANELE_FAILED, payload: error}))
// }

export const requestAllManele = () => (dispatch) => {
    dispatch({type: REQUEST_ALL_MANELE_PENDING})
    fetch(`${apiLink}/manea`, requestOptions)
    .then(response => response.json())
    .then(data => dispatch({type: REQUEST_ALL_MANELE_SUCCESS, payload: data}))
    .catch(error => dispatch({type: REQUEST_ALL_MANELE_FAILED, payload: error}))
}

export const requestAllArtists = () => (dispatch) => {
    dispatch({type: REQUEST_ALL_ARTISTS_PENDING})
    fetch(`${apiLink}/artist`, requestOptions)
    .then(response => response.json())
    .then(data => dispatch({type: REQUEST_ALL_ARTISTS_SUCCESS, payload: data}))
    .catch(error => dispatch({type: REQUEST_ALL_ARTISTS_FAILED, payload: error}))
}

export const requestArtist = (artist) => (dispatch) => {
    dispatch({type: REQUEST_ARTIST_PENDING})
    fetch(`${apiLink}/artist/one?name=${artist}`, requestOptions)
    .then(response => response.json())
    .then(data => dispatch({type: REQUEST_ARTIST_SUCCESS, payload: data}))
    .catch(error => dispatch({type: REQUEST_ARTIST_FAILED, payload: error}))
}

export const clickArtist = (text) => ({
    type: CLICK_ARTIST,
    payload: text
})


export const changeManea = (text) => ({
    type: MANEA_CHANGE,
    payload: text

})

export const requestManea = (manea) => (dispatch) => {
    dispatch({type: REQUEST_MANEA_PENDING})
    fetch(`${apiLink}/manea/title?title=${manea}`, requestOptions)
    .then(response => response.json())
    .then(data => dispatch({type: REQUEST_MANEA_SUCCESS, payload: data}))
    .catch(error => dispatch({type: REQUEST_MANEA_FAILED, payload: error}))
}