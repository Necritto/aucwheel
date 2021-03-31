import { ADD_MIN, SET_SEC, SET_MIN, SUBTRACT_MIN } from "../actionTypes/actionTypes";

export const addMin = (value: number) => ({ type: ADD_MIN, payload: value });
export const subtractMin = (value: number) => ({ type: SUBTRACT_MIN, payload: value });
export const setSec = (value: number) => ({ type: SET_SEC, payload: value });
export const setMin = (value: number) => ({ type: SET_MIN, payload: value });
