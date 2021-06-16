// import axios from 'axios';
// import { DEFAULT_MODEL_TYPE } from '../../utils/constants';
// import { COMMENT_API_URL } from "../../utils/urls";

// const GET_COMMENT_REQUEST = 'stackoverflow/comment/get_comment_request';
// const GET_COMMENT_SUCCESS = 'stackoverflow/comment/get_comment_success';
// const GET_COMMENT_FAILURE = 'stackoverflow/comment/get_comment_failure';

// const ADD_COMMENT_REQUEST = 'stackoverflow/comment/add_comment_request';
// const ADD_COMMENT_SUCCESS = 'stackoverflow/comment/add_comment_success';
// const ADD_COMMENT_FAILURE = 'stackoverflow/comment/add_comment_failure';

// const DELETE_COMMENT_REQUEST = 'stackoverflow/comment/delete_comment_request';
// const DELETE_COMMENT_SUCCESS = 'stackoverflow/comment/delete_comment_success';
// const DELETE_COMMENT_FAILURE = 'stackoverflow/comment/delete_comment_failure';

// const initialState = {
//     comments: [],
//     loading: false,
//     error: null,
// };

// export const getPostComments = (post_id) => async (dispatch) => {
//     dispatch({type: GET_COMMENT_REQUEST})
//     axios.get(COMMENT_API_URL,{
//         params:{
//             content_type: DEFAULT_MODEL_TYPE,
//             object_id: post_id,
//         }
//     })
//     .then((response) => {
//         dispatch({type: GET_COMMENT_SUCCESS, payload: response.data})
//     })
//     .catch((error) => {
//         dispatch({type: GET_COMMENT_FAILURE, error: error.response.data})
//     });
// };

// export const publishComment = (data, headers) => async (dispatch) => {
//     dispatch({type: ADD_COMMENT_REQUEST})
//     axios.post(COMMENT_API_URL,
//         data,
//         {
//             headers
//         }
//     )
//     .then((response) => {
//         dispatch({type: ADD_COMMENT_SUCCESS, payload: response.data})
//     })
//     .catch((error) => {
//         dispatch({type: ADD_COMMENT_FAILURE, error: error.response.data})
//     });
// };


// export const deletePostComment = (comment_id, headers) => async (dispatch) => {
//     dispatch({type: DELETE_COMMENT_REQUEST})
//     axios.delete(`${COMMENT_API_URL}${comment_id}/`,{
//         headers
//     })
//     .then((response) => {
//         dispatch({type: DELETE_COMMENT_SUCCESS, payload: comment_id})
//     })
//     .catch((error) => {
//         dispatch({type: DELETE_COMMENT_FAILURE, error: error.response.data})
//     });
// };

// const commentReducer = (state = initialState, action) => {
//     switch(action.type){
//         case GET_COMMENT_REQUEST:
//             return {
//                 ...state,
//                 loading: true,
//                 error: null,
//             };
//         case GET_COMMENT_SUCCESS:
//             return {
//                 ...state,
//                 comments: action.payload,
//                 loading: false,
//                 error: null,
//             };
//         case GET_COMMENT_FAILURE:
//             return {
//                 ...state,
//                 loading: false,
//                 error: action.error,
//             };
//         case ADD_COMMENT_REQUEST:
//             return {
//                 ...state,
//                 loading: true,
//                 error: null,
//             };
//         case ADD_COMMENT_SUCCESS:
//             return {
//                 ...state,
//                 comments: [...state.comments, action.payload],
//                 loading: false,
//                 error: null,
//             };
//         case ADD_COMMENT_FAILURE:
//             return {
//                 ...state,
//                 loading: false,
//                 error: action.error,
//             };
//         case DELETE_COMMENT_REQUEST:
//             return {
//                 ...state,
//                 loading: true,
//                 error: null,
//             };
//         case DELETE_COMMENT_SUCCESS:
//             return {
//                 ...state,
//                 comments: state.comments.filter(comment => comment.id !== action.payload) ,
//                 loading: false,
//                 error: null,
//             };
//         case DELETE_COMMENT_FAILURE:
//             return {
//                 ...state,
//                 loading: false,
//                 error: action.error,
//             };
//         default:
//             return state;
//     }
// };

// export default commentReducer;