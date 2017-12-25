import logger from "redux-logger";
import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import shop from "./reducers/shopReducer";
import user from "./reducers/userReducer";
import app from "./reducers/appReducer";
import error from "./reducers/errorReducer";

const store = createStore(
    combineReducers({
        error,
        app,
        user,
        shop
    }),
    {},
    composeWithDevTools(
        applyMiddleware(
            thunk,
            logger
        )
    )
);

export default store;