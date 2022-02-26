import React, { useState } from "react";

import { Container } from "./styles";

const MainContainer: React.FC<{}> = () => {
  const [step, setStep] = useState<number>(1);

  return <Container></Container>;
};

export default MainContainer;
