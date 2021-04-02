import styled from "styled-components";

type Small = {
  small?: boolean;
};

type Color = {
  color: string;
};

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

export const Input = styled.input<Small>`
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

export const DeleteButton = styled.button<Small>`
  color: #ffffff;
  background-color: #ff6662;
  width: ${(props) => (props.small ? "80px" : "100px")};
  height: 30px;
  border: none;
  border-radius: 5px;
  text-align: center;
`;

export const ColoredSpan = styled.span<Color>`
  display: inline-block;
  width: 30px;
  height: 30px;
  border-radius: 5px;
  background-color: ${(props) => props.color};
  transform: translateY(2px);
`;

export const AddButton = styled.button<Small>`
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
`;
