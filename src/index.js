import React from 'react';
import {render} from 'react-dom';
import feather from 'feather-icons';
import './app.css';
import Root from './routes';
import configureStore from './store';

const store = configureStore();

render(<Root store={store} />, document.getElementById('root'));
feather.replace();
