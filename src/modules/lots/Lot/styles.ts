import styled from "styled-components";

import { SmallButtonInterface, ColorInterface } from "utils/interfaces/styled";

export const Input = styled.input<SmallButtonInterface>`
  width: ${(props) => (props.small ? "80px" : "300px")};
  height: 30px;
  color: #cacaca;
  background-color: #6b6b6b;
  padding: 5px;
  border-radius: 3px;
  border: none;
  font-size: 18px;

  &::placeholder {
    color: #a0a0a0;
  }

  &:focus {
    &::placeholder {
      opacity: 0;
    }
  }
`;

export const ColoredSpan = styled.span<ColorInterface>`
  display: inline-block;
  width: 30px;
  height: 30px;
  border-radius: 5px;
  background-color: ${(props) => props.color};
  transform: translateY(2px);
`;
