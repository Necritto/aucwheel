import React, { memo } from "react";

import { LotInterface } from "utils/interfaces/lots";

import { AddButton, DeleteButton } from "../styles";
import { Input, ColoredSpan } from "./styles";

interface LotPropsInterface {
  lot: LotInterface;
  title: string;
  total: string;
  addToTotal: string;
  setTitle: (title: string) => void;
  setTotal: (total: string) => void;
  setAddToTotal: (addToTotal: string) => void;
  onDelete: (id: string) => void;
}

const Lot = ({ lot, title, total, addToTotal, setTitle, setTotal, setAddToTotal, onDelete }: LotPropsInterface) => {
  return (
    <tr>
      <td>
        <Input
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
          type="text"
          name="title"
          value={title}
        />
      </td>
      <td>
        <ColoredSpan color={lot.color} />
      </td>
      <td>{lot.chance > 0 && lot.chance}</td>
      <td>
        <Input
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTotal(e.target.value)}
          small={true}
          type="text"
          name="total"
          placeholder="0"
          value={total}
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
