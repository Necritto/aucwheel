import styled from "styled-components";

export const WheelContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 600px;
  border-radius: 10px;
  background-color: #2f2e30;
  position: relative;
  overflow: hidden;

  .wheel {
    display: block;
  }

  .spin {
    font-size: 1.5em;
    user-select: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 140px;
    height: 100px;
    margin: -15%;
    background: #ffffff;
    color: #ffffff;
    box-shadow: 0 0 0 8px currentColor, 0 0px 15px 5px rgba(0, 0, 0, 0.6);
    border-radius: 50%;
    transition: 0.8s;

    &::after {
      content: "";
      position: absolute;
      top: -17px;
      border: 10px solid transparent;
      border-bottom-color: currentColor;
      border-top: none;
    }
  }
`;
