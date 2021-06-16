import axios from 'axios';
import { LIKE_QUESTION_ACTION } from '../../utils/constants';
import { QUESTIONS_ACTION_URL, QUESTION_API_URL } from "../../utils/urls";

const GET_QUESTION_REQUEST = 'stackoverflow/question/get_question_request';
const GET_QUESTION_SUCCESS = 'stackoverflow/question/get_question_success';
const GET_QUESTION_FAILURE = 'stackoverflow/question/get_question_failure';

const ADD_QUESTION_REQUEST = 'stackoverflow/question/add_question_request';
const ADD_QUESTION_SUCCESS = 'stackoverflow/question/add_question_success';
const ADD_QUESTION_FAILURE = 'stackoverflow/question/add_question_failure';

const DELETE_QUESTION_REQUEST = 'stackoverflow/question/delete_question_request';
const DELETE_QUESTION_SUCCESS = 'stackoverflow/question/delete_question_success';
const DELETE_QUESTION_FAILURE = 'stackoverflow/question/delete_question_failure';

const QUESTION_ACTION_REQUEST = 'stackoverflow/question/question_action_request';
const LIKE_QUESTION_SUCCESS = 'stackoverflow/question/like_question_success';
const UNLIKE_QUESTION_SUCCESS = 'stackoverflow/question/unlike_question_success';
const QUESTION_ACTION_FAILURE = 'stackoverflow/question/question_action_failure';
const CLEAR_DATA = 'stackoverflow/question/clear_data';

const initialState = {
    question: null,
    newQuestionId: null,
    isDeleted: false,
    isAdded: false,
    loading: false,
    error: null,
};

export const clearData = () => async (dispatch) => {
    dispatch({type: CLEAR_DATA});
}
export const getQuestion = (question_id, headers) => async (dispatch) => {
    dispatch({type: GET_QUESTION_REQUEST})
    axios.get(`${QUESTION_API_URL}${question_id}/`,{
        headers
    })
    .then((response) => {
        dispatch({type: GET_QUESTION_SUCCESS, payload: response.data})
    })
    .catch((error) => {
        dispatch({type: GET_QUESTION_FAILURE, error: error.response.data})
    });
};

export const addQuestion = (data, headers) => async (dispatch) => {
    dispatch({type: ADD_QUESTION_REQUEST})
    axios.post(QUESTION_API_URL,
        data,
        {
            headers
        }
    )
    .then((response) => {
        dispatch({type: ADD_QUESTION_SUCCESS, payload: response.data.id})
    })
    .catch((error) => {
        dispatch({type: ADD_QUESTION_FAILURE, error: error.response.data})
    });
};

export const questionAction = (data, headers) => async (dispatch) => {
    dispatch({type: QUESTION_ACTION_REQUEST});
    axios.post(QUESTIONS_ACTION_URL,
        data,
        {
            headers
        }
    )
    .then((response) => {
        if(LIKE_QUESTION_ACTION === response.data.action)
            dispatch({type: LIKE_QUESTION_SUCCESS});
        else
            dispatch({type: UNLIKE_QUESTION_SUCCESS});
    })
    .catch((error) => {
        dispatch({type: QUESTION_ACTION_FAILURE, error: error.response.data});
    });
};

export const deleteQuestion = (question_id, headers) => async (dispatch) => {
    dispatch({type: DELETE_QUESTION_REQUEST})
    axios.delete(`${QUESTION_API_URL}${question_id}/`,
        {
            headers
        }
    )
    .then((response) => {
        dispatch({type: DELETE_QUESTION_SUCCESS})
    })
    .catch((error) => {
        dispatch({type: DELETE_QUESTION_FAILURE, error: error.response.data})
    });
};


const questionReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_QUESTION_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case GET_QUESTION_SUCCESS:
            return {
                ...state,
                question: action.payload,
                loading: false,
                error: null,
            };
        case GET_QUESTION_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error,
            };
        case ADD_QUESTION_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case ADD_QUESTION_SUCCESS:
            return {
                ...state,
                newQuestionId: action.payload,
                isAdded: true,
                loading: false,
                error: null,
            };
        case ADD_QUESTION_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error,
            };
        case DELETE_QUESTION_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case DELETE_QUESTION_SUCCESS:
            return {
                ...state,
                isDeleted: true,
                loading: false,
                error: null,
            };
        case DELETE_QUESTION_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error,
            };
        case QUESTION_ACTION_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case LIKE_QUESTION_SUCCESS:
            return {
                ...state,
                question:{
                    ...state.question,
                    is_liked: true,
                    likes: state.question.likes + 1,
                },
                loading: false,
                error: null,
            };
        case UNLIKE_QUESTION_SUCCESS:
            return {
                ...state,
                question:{
                    ...state.question,
                    is_liked: false,
                    likes: state.question.likes - 1,
                },
                loading: false,
                error: null,
            };
        case QUESTION_ACTION_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error,
            };
        case CLEAR_DATA:
            return initialState;
        default:
            return state;
    }
};

export default questionReducer;