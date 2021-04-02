import React, { useState, memo, useCallback } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";

import { randomColor } from "utils/helpers/randomColor";
import { addLot, deleteLot, clearLots } from "redux/actions/lots";
import { LotsReducerInterface } from "utils/interfaces/redux";
import { BaseLotInterface } from "utils/interfaces/lots";

import { LotsContainer, LotsWrapper, LotsTable, AddButton, DeleteButton } from "./styles";
import Lot from "./Lot/Lot";

const Lots = () => {
  const [title, setTitle] = useState("");
  const [total, setTotal] = useState("");
  const [addToTotal, setAddToTotal] = useState("");

  const lots = useSelector((state: LotsReducerInterface) => state.lotsReducer.lots, shallowEqual);
  const dispatch = useDispatch();

  const onAddLotHandler = useCallback(() => {
    const lot: BaseLotInterface = {
      title: "",
      total: 0,
      chance: 0,
      color: randomColor(),
    };

    dispatch(addLot(lot));
  }, [dispatch]);

  const onDeleteLotHandler = useCallback((id: string) => dispatch(deleteLot(id)), [dispatch]);

  const onClearLotsHandler = useCallback(() => dispatch(clearLots()), [dispatch]);

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
                  title={title}
                  total={total}
                  addToTotal={addToTotal}
                  setTitle={setTitle}
                  setTotal={setTotal}
                  setAddToTotal={setAddToTotal}
                  onDelete={(id: string) => onDeleteLotHandler(id)}
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

export default memo(Lots);
