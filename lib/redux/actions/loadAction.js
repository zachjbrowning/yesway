import * as types from "../types";
import regeneratorRuntime from "regenerator-runtime";


export const load_start = () => async dispatch => {
    return dispatch({
        type:types.LOAD_START,
    })
}

export const load_stop = () => async dispatch => {
    return dispatch({
        type:types.LOAD_STOP,
    })
}