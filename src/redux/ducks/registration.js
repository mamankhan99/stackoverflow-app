import axios from 'axios';
import { REGISTERATION_URL } from "../../utils/urls";

const SIGN_UP_REQUEST = 'stackoverflow/registration/sign_up_request';
const SIGN_UP_SUCCESS = 'stackoverflow/registration/sign_up_success';
const SIGN_UP_FAILURE = 'stackoverflow/registration/sign_up_failure';

const initialState = {
    user: null,
    loading: false,
    error: null,
};

export const signup = (information) => async (dispatch) => {
    dispatch({type: SIGN_UP_REQUEST})
    axios.post(REGISTERATION_URL, information)
    .then((response) => {
        dispatch({type: SIGN_UP_SUCCESS, payload: response.data})
    })
    .catch((error) => {
        dispatch({type: SIGN_UP_FAILURE, error: error.response.data})
    });  
};

const registrationReducer = (state = initialState, action) => {
    switch(action.type){
        case SIGN_UP_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case SIGN_UP_SUCCESS:
            return {
                ...state,
                user: action.payload,
                loading: false,
                error: null,
            };
        case SIGN_UP_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error,
            };
        default:
            return state;
    }
};

export default registrationReducer;