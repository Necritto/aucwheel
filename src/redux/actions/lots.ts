import { BaseLotInterface } from "utils/interfaces/lots";

import {
  ADD_LOT,
  DELETE_LOT,
  CLEAR_LOTS,
  CHANGE_LOT_TITLE,
  CHANGE_LOT_TOTAL,
  CHANGE_LOT_CHANCE,
} from "../actionTypes/actionTypes";

export const addLot = (lot: BaseLotInterface) => ({ type: ADD_LOT, payload: lot });
export const deleteLot = (id: string) => ({ type: DELETE_LOT, payload: id });
export const clearLots = () => ({ type: CLEAR_LOTS });
export const changeLotTitle = (id: string, newTitle: string) => ({ type: CHANGE_LOT_TITLE, payload: { newTitle, id } });
export const changeLotTotal = (id: string, newTotal: number) => ({ type: CHANGE_LOT_TOTAL, payload: { newTotal, id } });
export const changeLotChance = (id: string, newChance: number) => ({
  type: CHANGE_LOT_CHANCE,
  payload: { newChance, id },
});
