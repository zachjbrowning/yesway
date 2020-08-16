import * as types from "../types";


const initialState = false;


export const navReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.NAV_CLOSE:
            return false;
        case types.NAV_TOGGLE:
            return !state;
        default:
            return state;
    }
}