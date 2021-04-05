import { v4 } from "uuid";

import { InitialStateInterface } from "utils/interfaces/redux";

import { initialState } from "../initialState";
import {
  ADD_LOT,
  DELETE_LOT,
  CLEAR_LOTS,
  CHANGE_LOT_TITLE,
  CHANGE_LOT_TOTAL,
  ADD_TO_TOTAL,
  CHANGE_ADD_TO_TOTAL_VALUE,
} from "../actionTypes/actionTypes";

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
            add: 0,
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
    case CHANGE_LOT_TOTAL: {
      return {
        ...state,
        lots: state.lots.map((lot) =>
          lot.id === payload.id ? Object.assign({}, lot, { total: payload.newTotal }) : lot,
        ),
      };
    }
    case ADD_TO_TOTAL:
      return {
        ...state,
        lots: state.lots.map((lot) =>
          lot.id === payload.id ? Object.assign({}, lot, { total: lot.total + payload.value }) : lot,
        ),
      };
    case CHANGE_ADD_TO_TOTAL_VALUE:
      return {
        ...state,
        lots: state.lots.map((lot) => (lot.id === payload.id ? Object.assign({}, lot, { add: payload.value }) : lot)),
      };
    default:
      return state;
  }
};
