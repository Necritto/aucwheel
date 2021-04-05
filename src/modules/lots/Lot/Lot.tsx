import React, { memo } from "react";

import { LotInterface } from "utils/interfaces/lots";

import { AddButton, DeleteButton } from "../styles";
import { Input, ColoredSpan } from "./styles";

interface LotPropsInterface {
  lot: LotInterface;
  addToTotal: string;
  setAddToTotal: (addToTotal: string) => void;
  keyPressed: (key: string, target: EventTarget & HTMLInputElement, id: string) => void;
  onDelete: (id: string) => void;
}

const Lot = ({ lot, addToTotal, setAddToTotal, keyPressed, onDelete }: LotPropsInterface) => {
  return (
    <tr>
      <td>
        <Input
          type="text"
          name="title"
          onKeyPress={(e: React.KeyboardEvent<HTMLInputElement>) => keyPressed(e.key, e.currentTarget, lot.id)}
        />
      </td>
      <td>
        <ColoredSpan color={lot.color} />
      </td>
      <td>{lot.chance > 0 && lot.chance}</td>
      <td>
        <Input
          small={true}
          type="text"
          name="total"
          placeholder="0"
          onKeyPress={(e: React.KeyboardEvent<HTMLInputElement>) => keyPressed(e.key, e.currentTarget, lot.id)}
        />
      </td>
      <td>
        <Input
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAddToTotal(e.target.value)}
          small={true}
          type="text"
          name="addToTotal"
          placeholder="0"
          value={addToTotal}
        />
        <AddButton small={true}>+</AddButton>
      </td>
      <td>
        <DeleteButton onClick={() => onDelete(lot.id)} small={true}>
          Delete
        </DeleteButton>
      </td>
    </tr>
  );
};

export default memo(Lot);
