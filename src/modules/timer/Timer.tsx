import React, { useEffect } from "react";
import { shallowEqual, useSelector, useDispatch } from "react-redux";

import { addMin, setSec, setMin, subtractMin } from "redux/actions/timer";
import { timeFormatter } from "utils/helpers/timeFormatter";
import { TimerReducerInterface } from "utils/interfaces/redux";

import { TimerContainer, TimeBlock, TimerBtns } from "./styles";

const Timer = () => {
  const min = useSelector((state: TimerReducerInterface) => state.timerReducer.timerMin, shallowEqual);
  const sec = useSelector((state: TimerReducerInterface) => state.timerReducer.timerSec, shallowEqual);
  const dispatch = useDispatch();
  const isTimerFinished = min === 0 && sec === 0;

  useEffect(() => {
    const timer = setInterval(() => {
      if (sec > 0) {
        dispatch(setSec(sec - 1));
        return;
      }

      if (sec === 0) {
        if (min === 0) {
          clearInterval(timer);
          return;
        }

        dispatch(addMin(min - 1));
        dispatch(setSec(59));
        return;
      }
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, [dispatch, min, sec]);

  const onAddMin = (value: number) => {
    dispatch(addMin(min + value));
  };

  const onSubtractMin = (value: number) => {
    min > 0 && dispatch(subtractMin(min - value));
  };

  const onSetMin = (value: number) => {
    dispatch(setMin(value));
    dispatch(setSec(0));
  };

  return (
    <TimerContainer>
      <h2>Timer</h2>
      <TimeBlock isTimerFinished={isTimerFinished}>
        <span>{timeFormatter(min)}</span>
        <span>{timeFormatter(sec)}</span>
      </TimeBlock>
      <TimerBtns>
        <button onClick={() => onAddMin(1)}>+1</button>
        <button onClick={() => onAddMin(2)}>+2</button>
        <button onClick={() => onSetMin(10)}>=10</button>
        <button onClick={() => onSubtractMin(1)}>-1</button>
      </TimerBtns>
    </TimerContainer>
  );
};

export default Timer;
