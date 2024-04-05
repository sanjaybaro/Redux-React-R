import { applyMiddleware, legacy_createStore } from "redux";
import { reducer } from "./Todo/reducer";
import thunk from "redux-thunk";

// const myMiddleware = (store) => (dispatch) => (action) => {
//   // console.log("Dispatch :", dispatch);
//   // console.log("Action  :", action);

//   if (typeof action === "function") {
//     return action(dispatch); //redux
//   }
//   return dispatch(action);
// };

export const store = legacy_createStore(reducer, applyMiddleware(thunk));
