import { LotInterface } from "../lots";

export interface InitialStateInterface {
  timerMin: number;
  timerSec: number;
  lots: LotInterface[];
}

export interface TimerReducerInterface {
  timerReducer: InitialStateInterface;
}

export interface LotsReducerInterface {
  lotsReducer: InitialStateInterface;
}
