import * as types from "../types";
import regeneratorRuntime from "regenerator-runtime";


export const nav_toggle = () => async dispatch => {
    return dispatch({
        type:types.NAV_TOGGLE,
    })
}

export const nav_close = () => async dispatch => {
    return dispatch({
        type:types.NAV_CLOSE,
    })
}