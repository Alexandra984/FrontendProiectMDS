import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';

import thunkMiddleWare from 'redux-thunk';
import { checkInput, createMessage, ExitTest, requestAllManeleR, requestAllArtistsR, requestArtistR, clickArtistR, changeInputManea} from './reducers';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const rootReducer = combineReducers({checkInput, createMessage, ExitTest, requestAllManeleR, requestAllArtistsR, requestArtistR, clickArtistR, changeInputManea});
const store = createStore(rootReducer, applyMiddleware(thunkMiddleWare));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
