import axios from 'axios';
import { QUESTION_API_URL } from "../../utils/urls";

const GET_QUESTIONS_REQUEST = 'stackoverflow/home/get_questions_request';
const GET_QUESTIONS_SUCCESS = 'stackoverflow/home/get_questions_success';
const GET_QUESTIONS_FAILURE = 'stackoverflow/home/get_questions_failure';

const initialState = {
    questions: [],
    loading: false,
    error: null,
};

export const getQuestions = (headers) => async (dispatch) => {
    dispatch({type: GET_QUESTIONS_REQUEST})
    axios.get(QUESTION_API_URL,{
        headers
    })
    .then((response) => {
        dispatch({type: GET_QUESTIONS_SUCCESS, payload: response.data})
    })
    .catch((error) => {
        dispatch({type: GET_QUESTIONS_FAILURE, error: error.response.data})
    });
};

const homeReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_QUESTIONS_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case GET_QUESTIONS_SUCCESS:
            return {
                ...state,
                questions: action.payload,
                loading: false,
                error: null,
            };
        case GET_QUESTIONS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error,
            };
        default:
            return state;
    }
};

export default homeReducer;