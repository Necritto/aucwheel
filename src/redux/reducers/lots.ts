import { v4 } from "uuid";

import { InitialStateInterface } from "utils/interfaces/redux";

import { initialState } from "../initialState";
import { ADD_LOT, DELETE_LOT, CLEAR_LOTS } from "../actionTypes/actionTypes";

export const lotsReducer = (
  state: InitialStateInterface = initialState,
  { type, payload }: { type: string; payload: any },
) => {
  switch (type) {
    case ADD_LOT:
      return {
        ...state,
        lots: [
          ...state.lots,
          {
            id: v4(),
            title: payload.title,
            color: payload.color,
            chance: payload.chance,
            total: payload.total,
          },
        ],
      };
    case DELETE_LOT:
      return {
        ...state,
        lots: state.lots.filter((lot) => lot.id !== payload),
      };
    case CLEAR_LOTS:
      return {
        ...state,
        lots: [],
      };
    default:
      return state;
  }
};
