import React from "react";

import { TimerContainer, TimeBlock, TimerBtns } from "./styles";

const Timer = () => {
  return (
    <TimerContainer>
      <h2>Timer</h2>
      <TimeBlock>
        <span>12</span>
        <span>23</span>
      </TimeBlock>
      <TimerBtns>
        <button>+1</button>
        <button>+2</button>
        <button>=10</button>
        <button>-1</button>
      </TimerBtns>
    </TimerContainer>
  );
};

export default React.memo(Timer);
