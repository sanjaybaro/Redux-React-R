import {
  ADD,
  GET_TODO_FAILURE,
  GET_TODO_REQUEST,
  GET_TODO_SUCCESS,
  POST_TODO_FAILURE,
  POST_TODO_REQUEST,
  POST_TODO_SUCCESS,
  REDUCE,
} from "./actionTypes";

export const addAction = (payload) => {
  return { type: ADD, payload };
};

export const reduceAction = (payload) => {
  return { type: REDUCE, payload };
};

//TODO

export const getTodoRequestAction = () => {
  return { type: GET_TODO_REQUEST };
};
export const getTodoSuccessAction = (payload) => {
  return { type: GET_TODO_SUCCESS, payload };
};
export const getTodoFailureAction = () => {
  return { type: GET_TODO_FAILURE };
};

//post todos
export const postTodoRequestAction = () => {
  return { type: POST_TODO_REQUEST };
};
export const postTodoSuccessAction = (payload) => {
  return { type: POST_TODO_SUCCESS, payload };
};
export const postTodoFailureAction = () => {
  return { type: POST_TODO_FAILURE };
};
