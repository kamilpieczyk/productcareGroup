import React, { useCallback, useState } from "react";
import { BsNewspaper, BsCheck } from "react-icons/bs";

import { Container, ImptBox } from "./styles";
import Input from "../input";
import Button from "../button";
import Title from "../title";
import ErrorBox from "../error-box";

interface StepOneInterface {
  setNextStep: VoidFunction;
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
}

const StepOne: React.FC<StepOneInterface> = ({
  setNextStep,
  email,
  setEmail,
}) => {
  const [isLoading, setLoading] = useState<boolean>(false);
  const [isError, setError] = useState<boolean>(false);

  const handleEmail = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  }, []);

  const handlePostData = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch(
        "https://mailing-list.prototype.mmgrouptech.net/subscribe",
        {
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            sourceRef: "recruit2022_kamil",
            email,
          }),
        }
      );
      if (res.status === 200) {
        setLoading(false);
        setNextStep();
      } else {
        throw new Error("API returns status diffrent than 200");
      }
    } catch (err) {
      console.error(err);
      setError(true);
      setLoading(false);
    }
  }, [email]);

  return (
    <Container>
      <Title>
        <BsNewspaper /> Newsletter Sign Up - be the first to find out news about
        our brand and products
      </Title>
      <p>
        sign up to reciveexclusive offers, news and features about our range of
        products from G2S Limited <a href="#">see our privacy policy</a>
      </p>
      <ImptBox>
        <Input
          type={"email"}
          placeholder={"Enter your email address"}
          value={email}
          onChange={handleEmail}
        />
        <Button disabled={isLoading} onClick={handlePostData}>
          {isLoading ? (
            "...sending data"
          ) : (
            <>
              <BsCheck /> subscribe now
            </>
          )}
        </Button>
      </ImptBox>
      {isError && <ErrorBox>something went wrong</ErrorBox>}
    </Container>
  );
};

export default StepOne;
