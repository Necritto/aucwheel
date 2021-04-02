import React, { memo } from "react";

import { randomColor } from "utils/helpers/randomColor";

import { LotsContainer, LotsWrapper, LotsTable, ColoredSpan, AddButton, DeleteButton, Input } from "./styles";

const Lots = () => {
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
                <DeleteButton>Clear</DeleteButton>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <Input type="text" name="title" />
              </td>
              <td>
                <ColoredSpan color={randomColor()} />
              </td>
              <td></td>
              <td>
                <Input small={true} type="text" name="total" />
              </td>
              <td>
                <Input small={true} type="text" name="add" placeholder="0" />
                <AddButton small={true}>+</AddButton>
              </td>
              <td>
                <DeleteButton small={true}>Delete</DeleteButton>
              </td>
            </tr>
          </tbody>
        </LotsTable>
        <AddButton>Add</AddButton>
      </LotsWrapper>
    </LotsContainer>
  );
};

export default memo(Lots);
