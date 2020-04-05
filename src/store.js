import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import { createBrowserHistory } from "history";
import { routerMiddleware, routerReducer } from "react-router-redux";

export const history = createBrowserHistory();

const middleware = [thunk, routerMiddleware(history)];

const reducer = combineReducers({
  ...rootReducer,
  router: routerReducer,
});

const composeEnhancers = window["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"] || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(...middleware)));

export default store;
