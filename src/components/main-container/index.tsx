import React, { useState } from "react";

import { Container, ContentBox } from "./styles";
import StepOne from "../step-one";
import StepTwo from "../step-two";

const MainContainer: React.FC<{}> = () => {
  const [step, setStep] = useState<number>(1);

  return (
    <Container>
      <ContentBox>
        {step === 1 ? <StepOne setNextStep={() => setStep(2)} /> : <StepTwo />}
      </ContentBox>
    </Container>
  );
};

export default MainContainer;
