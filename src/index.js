import "./styles/app.scss";

import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import throttle from "lodash/throttle";
import { Router } from "react-router-dom";

import configureStore from "./store/configureStore";
import registerServiceWorker from "./registerServiceWorker";
import { loadState, saveState } from "./utils/localStorage";
import { App } from "./app";
import { FirebaseProvider } from "./context/firebase-context";
import { UserProvider } from "./context/user-context";
import { history } from "./history";

const persistedState = loadState();
const store = configureStore(persistedState);

store.subscribe(
  throttle(() => {
    saveState({
      authReducer: store.getState().authReducer
    });
  }, 1000)
);

render(
  <Provider store={store}>
    <FirebaseProvider>
      <UserProvider>
        <Router history={history}>
          <App />
        </Router>
      </UserProvider>
    </FirebaseProvider>
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();
