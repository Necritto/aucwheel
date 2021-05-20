import { combineReducers } from "redux";

import { timerReducer } from "./timer";
import { lotsReducer } from "./lots";

export const rootReducer = combineReducers({ timerReducer, lotsReducer });
