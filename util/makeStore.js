import { compose, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import persistState from "redux-localstorage";
import rootReducer from "./../reducers";

const enhancerNode = compose();

const enhancerBrowser = compose(
  applyMiddleware(logger),
  persistState(["hirakana", "katagana"])
);

const makeStore = (initialState, options) => {
  return createStore(
    rootReducer,
    initialState,
    options.isServer ? enhancerNode : enhancerBrowser
  );
};

export default makeStore;
