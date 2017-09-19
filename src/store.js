import { createStore } from 'redux';

const configureStore = preloadedState => createStore(
  () => {},
  preloadedState,
);

export default configureStore;
