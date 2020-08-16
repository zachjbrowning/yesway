import * as types from "../types";
import regeneratorRuntime from "regenerator-runtime";


export const load_start = () => async dispatch => {
    console.log("LOADING");
    return dispatch({
        type:types.LOAD_START,
    })
}

export const load_stop = () => async dispatch => {
    console.log("DONE");
    return dispatch({
        type:types.LOAD_STOP,
    })
}