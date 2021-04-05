import { v4 } from "uuid";

import { InitialStateInterface } from "utils/interfaces/redux";

import { initialState } from "../initialState";
import { ADD_LOT, DELETE_LOT, CLEAR_LOTS, CHANGE_LOT_TITLE } from "../actionTypes/actionTypes";

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
    case CHANGE_LOT_TITLE:
      return {
        ...state,
        lots: state.lots.map((lot) =>
          lot.id === payload.id ? Object.assign({}, lot, { title: payload.newTitle }) : lot,
        ),
      };
    default:
      return state;
  }
};
