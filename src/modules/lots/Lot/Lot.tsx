import React, { memo } from "react";

import { LotInterface } from "utils/interfaces/lots";

import { AddButton, DeleteButton } from "../styles";
import { Input, ColoredSpan } from "./styles";

interface LotPropsInterface {
  lot: LotInterface;
  keyPressed: (key: string, target: EventTarget & HTMLInputElement, id: string) => void;
  onAddToTotal: (id: string, value: number) => void;
  onChange: (id: string, value: string, name: string) => void;
  onDelete: (id: string) => void;
}

const Lot = ({ lot, keyPressed, onAddToTotal, onChange, onDelete }: LotPropsInterface) => {
  return (
    <tr>
      <td>
        <Input
          type="text"
          name="title"
          onKeyPress={(e: React.KeyboardEvent<HTMLInputElement>) => keyPressed(e.key, e.currentTarget, lot.id)}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(lot.id, e.target.value, e.target.name)}
          value={lot.title}
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
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(lot.id, e.target.value, e.target.name)}
          value={lot.total}
        />
      </td>
      <td>
        <Input
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(lot.id, e.target.value, e.target.name)}
          small={true}
          type="text"
          name="addToTotal"
          placeholder="0"
          value={lot.add}
        />
        <AddButton onClick={() => onAddToTotal(lot.id, +lot.add)} small={true}>
          +
        </AddButton>
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
