import { combineReducers } from 'redux';

import { navReducer } from "./navReducer";
import { loadReducer } from "./loadReducer";

export default combineReducers({
    nav : navReducer,
    load : loadReducer,
})