import { combineReducers } from "redux";

import { timerReducer } from "./timer";

export const rootReducer = combineReducers({ timerReducer });
