import axios from "axios";
import { AUTH_USER, AUTH_ERROR } from "./types";

export const signUp = (formProps, callback) => async dispatch => {
    try {
        const response = await axios.post('http://localhost:3200/signup', formProps);
        dispatch({
            type: AUTH_USER,
            payload: response.token
        });
        callback();
    }
    catch (e) {
        dispatch({
            type: AUTH_ERROR,
            payload: "Email already in use"
        });
    }


} 