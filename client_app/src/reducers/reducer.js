import {combineReducers} from "redux";
import appReducer from './appReducer';
import errorReducer from './errorReducer';
import userReducer from './userReducer';
import shopReducer from './shopReducer';

const reducer = combineReducers({
    error: errorReducer,
    app: appReducer,
    user: userReducer,
    shop: shopReducer
});

export default reducer;