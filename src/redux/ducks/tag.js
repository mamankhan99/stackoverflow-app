import axios from 'axios';
import { TAG_API_URL } from "../../utils/urls";

const GET_TAG_REQUEST = 'stackoverflow/tag/get_tag_request';
const GET_TAG_SUCCESS = 'stackoverflow/tag/get_tag_success';
const GET_TAG_FAILURE = 'stackoverflow/tag/get_tag_failure';

const ADD_TAG_REQUEST = 'stackoverflow/tag/add_tag_request';
const ADD_TAG_SUCCESS = 'stackoverflow/tag/add_tag_success';
const ADD_TAG_FAILURE = 'stackoverflow/tag/add_tag_failure';

const DELETE_TAG_REQUEST = 'stackoverflow/tag/delete_tag_request';
const DELETE_TAG_SUCCESS = 'stackoverflow/tag/delete_tag_success';
const DELETE_TAG_FAILURE = 'stackoverflow/tag/delete_tag_failure';

const initialState = {
    tags: [],
    loading: false,
    isAdded: false,
    error: null,
};

export const getTags = () => async (dispatch) => {
    dispatch({type: GET_TAG_REQUEST})
    axios.get(TAG_API_URL)
    .then((response) => {
        dispatch({type: GET_TAG_SUCCESS, payload: response.data})
    })
    .catch((error) => {
        dispatch({type: GET_TAG_FAILURE, error: error.response.data})
    });
};

export const addTag = (data, headers) => async (dispatch) => {
    dispatch({type: ADD_TAG_REQUEST})
    axios.post(TAG_API_URL,
        data,
        {
            headers
        }
    )
    .then((response) => {
        dispatch({type: ADD_TAG_SUCCESS, payload: response.data})
    })
    .catch((error) => {
        dispatch({type: ADD_TAG_FAILURE, error: error.response.data})
    });
};


export const deleteTag = (tag_id, headers) => async (dispatch) => {
    dispatch({type: DELETE_TAG_REQUEST})
    axios.delete(`${TAG_API_URL}${tag_id}/`,{
        headers
    })
    .then((response) => {
        dispatch({type: DELETE_TAG_SUCCESS, payload: tag_id})
    })
    .catch((error) => {
        dispatch({type: DELETE_TAG_FAILURE, error: error.response.data})
    });
};

const tagReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_TAG_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case GET_TAG_SUCCESS:
            return {
                ...state,
                tags: action.payload,
                loading: false,
                error: null,
            };
        case GET_TAG_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error,
            };
        case ADD_TAG_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case ADD_TAG_SUCCESS:
            return {
                ...state,
                tags: [...state.tags, action.payload],
                loading: false,
                error: null,
            };
        case ADD_TAG_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error,
            };
        case DELETE_TAG_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case DELETE_TAG_SUCCESS:
            return {
                ...state,
                tags: state.tags.filter(tag => tag.id !== action.payload) ,
                loading: false,
                error: null,
            };
        case DELETE_TAG_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error,
            };
        default:
            return state;
    }
};

export default tagReducer;