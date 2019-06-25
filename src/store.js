import { createStore, applyMiddleware, compose } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";

import DevTools from "./containers/DevTools";
import rootReducer from "./reducers";

const configureStore = preloadState => {
  const store = createStore(
    rootReducer,
    preloadState,
    compose(
      applyMiddleware(thunk, createLogger()),
      DevTools.instrument()
    )
  );

  if (module.hot) {
    module.hot.accept("./reducers", () => {
      const nextRootReducer = require("./reducers").default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
};

export default configureStore;
