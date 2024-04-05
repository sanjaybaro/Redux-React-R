import { legacy_createStore } from "redux";
import { reducer } from "./Todo/reducer";

export const store = legacy_createStore(reducer);
