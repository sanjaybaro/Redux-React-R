import {
  GET_TODO_SUCCESS,
  POST_TODO_SUCCESS,
  TODO_FAILURE,
  TODO_REQUEST,
} from "./actionTypes";

const initialState = {
  todo: [],
  isLoading: false,
  isError: false,
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
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
