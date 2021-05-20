import React, { useMemo, useCallback } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";

import { randomColor } from "utils/helpers/randomColor";
import {
  addLot,
  deleteLot,
  clearLots,
  changeLotTitle,
  changeLotTotal,
  toTotal,
  changeAddToTotalValue,
  changeLotChance,
} from "redux/actions/lots";
import { LotsReducerInterface } from "utils/interfaces/redux";
import { BaseLotInterface } from "utils/interfaces/lots";

import { LotsContainer, LotsWrapper, LotsTable, AddButton, DeleteButton } from "./styles";
import Lot from "./Lot/Lot";
import { toNumber } from "utils/helpers/toNumber";
import { chanceCalculating } from "utils/helpers/chanceCalculating";

const Lots = () => {
  const lots = useSelector((state: LotsReducerInterface) => state.lotsReducer.lots, shallowEqual);
  const dispatch = useDispatch();

  const inTotal = useMemo(() => lots.reduce((acc, currentValue) => acc + currentValue.total, 0), [lots]);

  const onAddLotHandler = () => {
    const lot: BaseLotInterface = {
      title: "",
      total: 0,
      chance: 0,
      color: randomColor(),
    };

    dispatch(addLot(lot));
  };

  const onDeleteLotHandler = (id: string) => dispatch(deleteLot(id));

  const onClearLotsHandler = () => dispatch(clearLots());

  const onChangeHandler = useCallback(
    (id: string, value: string, name: string) => {
      switch (name) {
        case "title":
          dispatch(changeLotTitle(id, value));
          break;
        case "total":
          dispatch(changeLotTotal(id, toNumber(value)));
          break;
        case "addToTotal":
          dispatch(changeAddToTotalValue(id, toNumber(value)));
          break;
        default:
          return;
      }
    },
    [dispatch],
  );

  const changeLotsChance = () => {
    lots.forEach((lot) => {
      dispatch(changeLotChance(lot.id, chanceCalculating(lot.total, inTotal)));
    });
  };

  const onAddToTotal = (id: string, value: number) => {
    dispatch(toTotal(id, value));
    dispatch(changeAddToTotalValue(id, 0));
    changeLotsChance(); // FIXME: double click to refresh chance (old state data)
  };

  const onKeyPressedHandler = (key: string, target: EventTarget & HTMLInputElement, id: string) => {
    if (key !== "Enter") return;

    const targetName = target.name;
    const trimmedValue = target.value.trim();

    switch (targetName) {
      case "title":
        if (!!!trimmedValue) return alert("Incorrect value!");
        dispatch(changeLotTitle(id, trimmedValue));
        break;
      case "total":
        dispatch(changeLotTotal(id, toNumber(trimmedValue)));
        changeLotsChance();
        break;
      default:
        return;
    }

    target.blur();
  };

  return (
    <LotsContainer>
      <h2>Lots</h2>
      <LotsWrapper>
        <LotsTable>
          <thead>
            <tr>
              <th>Title</th>
              <th>Color</th>
              <th>Chance %</th>
              <th>Total</th>
              <th>+</th>
              <th>
                <DeleteButton onClick={onClearLotsHandler}>Clear</DeleteButton>
              </th>
            </tr>
          </thead>
          <tbody>
            {lots.map((lot) => {
              return (
                <Lot
                  key={lot.id}
                  lot={lot}
                  onAddToTotal={onAddToTotal}
                  keyPressed={onKeyPressedHandler}
                  onChange={onChangeHandler}
                  onDelete={onDeleteLotHandler}
                />
              );
            })}
          </tbody>
        </LotsTable>
        <AddButton onClick={onAddLotHandler}>Add</AddButton>
      </LotsWrapper>
    </LotsContainer>
  );
};

export default Lots;
