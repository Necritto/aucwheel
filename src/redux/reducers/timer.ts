import { InitialStateInterface } from "utils/interfaces/redux";

import { initialState } from "../initialState";
import { ADD_MIN, SET_SEC, SET_MIN, SUBTRACT_MIN } from "../actionTypes/actionTypes";

export const timerReducer = (
  state: InitialStateInterface = initialState,
  { type, payload }: { type: string; payload: number | string },
) => {
  switch (type) {
    case ADD_MIN:
      return {
        ...state,
        timerMin: payload,
      };
    case SET_SEC:
      return {
        ...state,
        timerSec: payload,
      };
    case SUBTRACT_MIN:
      return {
        ...state,
        timerMin: payload,
      };
    case SET_MIN:
      return {
        ...state,
        timerMin: payload,
      };
    default:
      return state;
  }
};
