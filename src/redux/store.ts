import { createStore, compose, Store, applyMiddleware } from "redux";

import { rootReducer } from "./reducers/rootReducer";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({} as any)
    : compose;

export const store: Store = createStore(rootReducer, composeEnhancers(applyMiddleware()));
