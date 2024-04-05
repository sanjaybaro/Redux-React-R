import axios from "axios";
import {
  GET_TODO_SUCCESS,
  PATCH_TODO_SUCCESS,
  POST_TODO_SUCCESS,
  TODO_FAILURE,
  TODO_REQUEST,
} from "./actionTypes";

//TODO

export const requestAction = () => {
  return { type: TODO_REQUEST };
};
export const failureAction = () => {
  return { type: TODO_FAILURE };
};
export const getSuccessAction = (payload) => {
  return { type: GET_TODO_SUCCESS, payload };
};
//post todos
export const postSuccessAction = (payload) => {
  return { type: POST_TODO_SUCCESS, payload };
};

export const patchSuccessAction = () => {
  return { type: PATCH_TODO_SUCCESS };
};

//logic

export const getTodos = (dispatch) => {
  //Request
  dispatch(requestAction());
  axios
    .get("http://localhost:8080/todos")
    .then((res) => {
      // console.log(res.data);
      //Success
      dispatch(getSuccessAction(res.data));
    })

    .catch((err) => {
      console.log(err.message);
      //Failure
      dispatch(failureAction());
    });
};

export const postTodo = (newTodo) => (dispatch) => {
  dispatch(requestAction());
  try {
    const res = axios.post("http://localhost:8080/todos", newTodo);
    // console.log(res.data);
    dispatch(postSuccessAction(res.data));
  } catch (err) {
    console.error(err.message);
    dispatch(failureAction());
  }
};
