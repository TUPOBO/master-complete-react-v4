import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducers";

const store = createStore(
  reducer,
  compose(thunk),
  typeof window === "object" && typeof window.devToolExtension !== "undefined"
    ? window.devToolExtension()
    : f => f
);

export default store;
