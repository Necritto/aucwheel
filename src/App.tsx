import React from "react";

import Wheel from "modules/Wheel/Wheel";
import Timer from "modules/Timer/Timer";
import Lots from "modules/Lots/Lots";

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
