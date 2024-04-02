import {
  GET_TODO_SUCCESS,
  POST_TODO_SUCCESS,
  TODO_FAILURE,
  TODO_REQUEST,
} from "./actionTypes";

//TODO

export const getTodoRequestAction = () => {
  return { type: TODO_REQUEST };
};
export const getTodoSuccessAction = (payload) => {
  return { type: GET_TODO_SUCCESS, payload };
};
export const getTodoFailureAction = () => {
  return { type: TODO_FAILURE };
};

//post todos
export const postTodoRequestAction = () => {
  return { type: TODO_REQUEST };
};
export const postTodoSuccessAction = (payload) => {
  return { type: POST_TODO_SUCCESS, payload };
};
export const postTodoFailureAction = () => {
  return { type: TODO_FAILURE };
};
