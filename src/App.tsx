import React from "react";

import Wheel from "modules/wheel/Wheel";
import Timer from "modules/timer/Timer";
import Lots from "modules/lots/Lots";

import { AppContainer } from "./styles";

const App = () => {
  return (
    <AppContainer>
      <Wheel />
      <Timer />
      <Lots />
    </AppContainer>
  );
};

export default React.memo(App);
