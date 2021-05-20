import { BaseLotInterface } from "utils/interfaces/lots";

import {
  ADD_LOT,
  DELETE_LOT,
  CLEAR_LOTS,
  CHANGE_LOT_TITLE,
  CHANGE_LOT_TOTAL,
  CHANGE_LOT_CHANCE,
  ADD_TO_TOTAL,
  CHANGE_ADD_TO_TOTAL_VALUE,
} from "../actionTypes/actionTypes";

export const addLot = (lot: BaseLotInterface) => ({ type: ADD_LOT, payload: lot });
export const deleteLot = (id: string) => ({ type: DELETE_LOT, payload: id });
export const clearLots = () => ({ type: CLEAR_LOTS });
export const changeLotTitle = (id: string, value: string) => ({ type: CHANGE_LOT_TITLE, payload: { id, value } });
export const changeLotTotal = (id: string, value: number) => ({ type: CHANGE_LOT_TOTAL, payload: { id, value } });
export const changeLotChance = (id: string, value: number) => ({
  type: CHANGE_LOT_CHANCE,
  payload: { id, value },
});
export const toTotal = (id: string, value: number) => ({ type: ADD_TO_TOTAL, payload: { id, value } });
export const changeAddToTotalValue = (id: string, value: number) => ({
  type: CHANGE_ADD_TO_TOTAL_VALUE,
  payload: { id, value },
});
