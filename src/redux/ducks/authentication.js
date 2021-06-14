import axios from 'axios';
import { LOGIN_URL } from "../../utils/urls";

const SIGN_IN_REQUEST = 'stackoverflow/authentication/sign_in_request';
const SIGN_IN_SUCCESS = 'stackoverflow/authentication/sign_in_success';
const SIGN_IN_FAILURE = 'stackoverflow/authentication/sign_in_failure';
const SIGN_OUT = 'stackoverflow/authentication/sign_out';

const initialState = {
    user: null,
    loading: false,
    error: null,
};

export const signin = (credentials) => async (dispatch) => {
    dispatch({type: SIGN_IN_REQUEST})
    axios.post(LOGIN_URL, credentials)
    .then((response) => {
        dispatch({type: SIGN_IN_SUCCESS, payload: response.data})
    })
    .catch((error) => {
        dispatch({type: SIGN_IN_FAILURE, error: error.response.data})
    });  
};

export const signout = () => ({
  type: SIGN_OUT,
})

const authenticationReducer = (state = initialState, action) => {
    switch(action.type){
        case SIGN_IN_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case SIGN_IN_SUCCESS:
            return {
                ...state,
                user: action.payload,
                loading: false,
                error: null,
            };
        case SIGN_IN_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error,
            };
        case SIGN_OUT:
            return initialState;
        default:
            return state;
    }
};

export default authenticationReducer;