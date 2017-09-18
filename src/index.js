import React from 'react';
import {render} from 'react-dom';
import feather from 'feather-icons';
import App from './components/App';
import './app.css';


render(<App />, document.getElementById('root'));
feather.replace();
