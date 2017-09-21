import React from 'react';
import {render} from 'react-dom';
import './app.css';
import Root from './routes';
import configureStore from './store';
import registerServiceWorker from './registerServiceWorker';
import {loadState, saveState} from "./localStorage";
import throttle from 'lodash/throttle';

const persistedState = loadState();
const store = configureStore(persistedState);

store.subscribe(throttle(() => {
  saveState({
    authReducer: store.getState().authReducer
  });
}, 1000));

render(<Root store={store} />, document.getElementById('root'));

registerServiceWorker();
