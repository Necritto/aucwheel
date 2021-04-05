import styled from "styled-components";

import { SmallButtonInterface } from "utils/interfaces/styled";

export const LotsContainer = styled.div`
  padding: 20px;
  border-radius: 10px;
  background-color: #2f2e30;

  h2 {
    font-size: 14px;
  }

  button {
    cursor: pointer;
  }
`;

export const LotsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LotsTable = styled.table`
  width: 100%;
  margin: 10px 0;
  text-align: left;
  border-collapse: collapse;
  font-size: 14px;

  th,
  td {
    min-width: 70px;
  }

  thead {
    border-bottom: 2px solid rgba(255, 255, 255, 0.4);

    th {
      font-weight: 400;
      padding-bottom: 10px;

      &:last-child {
        text-align: right;
      }
    }
  }

  tbody {
    tr {
      height: 50px;

      td {
        height: 30px;

        &:last-child {
          text-align: right;
        }
      }
    }
  }
`;

export const DeleteButton = styled.button<SmallButtonInterface>`
  color: #ffffff;
  background-color: #ff6662;
  width: ${(props) => (props.small ? "80px" : "100px")};
  height: 30px;
  border: none;
  border-radius: 5px;
  text-align: center;

  &:hover {
    background-color: #ff1d17;
  }
`;

export const AddButton = styled.button<SmallButtonInterface>`
  width: ${(props) => (props.small ? "30px" : "150px")};
  height: ${(props) => (props.small ? "30px" : "40px")};
  margin-left: ${(props) => props.small && "2px"};
  border: none;
  border-radius: ${(props) => (props.small ? "5px" : "10px")};
  font-size: 14px;
  font-weight: 700;
  color: #ffffff;
  background-color: #12964d;
  transform: ${(props) => props.small && "translateY(-1px)"};

  &:hover {
    background-color: #0d6c38;
  }
`;
