import * as types from "../types";


const initialState = true;


export const loadReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.LOAD_START:
            return true;
        case types.LOAD_STOP:
            return false;
        default:
            return state;
    }
}