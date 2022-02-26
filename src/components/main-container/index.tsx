import React, { useState } from "react";

import { Container, ContentBox } from "./styles";
import StepOne from "../step-one";
import StepTwo from "../step-two";
import CloseButton from "../close-button";

const MainContainer: React.FC<{}> = () => {
  const [step, setStep] = useState<number>(1);
  const [email, setEmail] = useState<string>("");
  const [isVisible, setVisible] = useState<boolean>(true);

  return (
    <Container>
      <ContentBox isVisible={isVisible}>
        <CloseButton close={setVisible} />
        {step === 1 ? (
          <StepOne
            email={email}
            setEmail={setEmail}
            setNextStep={() => setStep(2)}
          />
        ) : (
          <StepTwo email={email} />
        )}
      </ContentBox>
    </Container>
  );
};

export default MainContainer;
