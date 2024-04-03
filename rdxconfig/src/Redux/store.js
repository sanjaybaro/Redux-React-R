import { combineReducers, legacy_createStore } from "redux";
import { reducer as counterReducer } from "./counter/reducer";
import { reducer as todoReducer } from "./Todo/reducer";
import { reducer as authReducer } from "./Authentication/reducer";

const rootReducer = combineReducers({
  counterReducer,
  todoReducer,
  authReducer,
});

export const store = legacy_createStore(rootReducer);
