import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

const configureStore = preloadState => createStore(
  rootReducer,
  preloadState,
  applyMiddleware(thunk),
);

export default configureStore;
