import axios from 'axios';
import { PROFILE_URL, USER_API_URL } from "../../utils/urls";

const GET_USER_REQUEST = 'stackoverflow/profile/get_user_request';
const GET_USER_SUCCESS = 'stackoverflow/profile/get_user_success';
const GET_USER_FAILURE = 'stackoverflow/profile/get_user_failure';

const UPDATE_PROFILE_REQUEST = 'stackoverflow/profile/update_profile_request';
const UPDATE_PROFILE_SUCCESS = 'stackoverflow/profile/update_profile_success';
const UPDATE_PROFILE_FAILURE = 'stackoverflow/profile/update_profile_failure';

const initialState = {
    user: null,
    isUpdated: false,
    loading: false,
    error: null,
};

export const getUser = (slug, headers) => async (dispatch) => {
    dispatch({type: GET_USER_REQUEST});
    axios.get(`${USER_API_URL}${slug}/`, {
        headers
    })
    .then((response) => {
        dispatch({type: GET_USER_SUCCESS, payload: response.data});
    })
    .catch((error) => {
        dispatch({type: GET_USER_FAILURE, error: error.response.data});
    });  
};


export const updateProfile = (id, data, headers)  => async (dispatch) => {
    dispatch({type: UPDATE_PROFILE_REQUEST});
    axios.put(`${PROFILE_URL}${id}/`,
        data,
        {
            headers
        }
    )
    .then((response) => {
        dispatch({type: UPDATE_PROFILE_SUCCESS});
    })
    .catch((error) => {
        dispatch({type: UPDATE_PROFILE_FAILURE, error: error.response.data});
    });
};

const profileReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_USER_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case GET_USER_SUCCESS:
            return {
                ...state,
                user: action.payload,
                loading: false,
                error: null,
            };
        case GET_USER_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error,
            };
        case UPDATE_PROFILE_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case UPDATE_PROFILE_SUCCESS:
            return {
                ...state,
                isUpdated: true,
                loading: false,
                error: null,
            };
        case UPDATE_PROFILE_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error,
            };
        default:
            return state;
    }
};

export default profileReducer;