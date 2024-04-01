import {
  ADD,
  GET_TODO_SUCCESS,
  POST_TODO_SUCCESS,
  REDUCE,
  TODO_FAILURE,
  TODO_REQUEST,
} from "./actionTypes";

export const reducer = (state, { type, payload }) => {
  switch (type) {
    case ADD: {
      return {
        ...state,
        counter: state.counter + payload,
      };
    }
    case REDUCE: {
      return {
        ...state,
        counter: state.counter - payload,
      };
    }
    case TODO_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case GET_TODO_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        todo: payload,
      };
    }
    case TODO_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    case TODO_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case POST_TODO_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        todo: [...state.todo, payload],
      };
    }
    case TODO_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    default: {
      return state;
    }
  }
};
