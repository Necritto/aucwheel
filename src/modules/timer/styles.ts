import styled from "styled-components";

type isTimerFinished = {
  isTimerFinished?: boolean;
};

export const TimerContainer = styled.div`
  padding: 20px;
  border-radius: 10px;
  background-color: #2f2e30;
  height: 220px;

  h2 {
    font-size: 14px;
  }
`;

export const TimeBlock = styled.div<isTimerFinished>`
  display: flex;
  margin: 20px 0;

  span {
    display: inherit;
    width: 80px;
    height: 80px;
    border: ${(props) => (props.isTimerFinished ? "5px solid #cccccc" : "5px solid #1be0af")};
    border-radius: 5px;
    background-color: #12964d;
    font-size: 50px;
    font-weight: 500;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
    background-color: ${(props) => (props.isTimerFinished ? "#808080" : "")};

    &:last-child {
      margin-right: 0;
    }
  }
`;

export const TimerBtns = styled.div`
  button {
    width: 30px;
    height: 30px;
    margin-right: 10px;
    cursor: pointer;
    background-color: #808080;
    color: inherit;
    border: none;

    &:hover {
      background-color: #585858;
    }
  }
`;
