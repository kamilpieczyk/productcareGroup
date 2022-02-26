import React, { useCallback, useState } from "react";
import { BsNewspaper, BsCheck } from "react-icons/bs";

import { Container, ImptBox, ErrorBox } from "./styles";
import Input from "../input";
import Button from "../button";

const StepOne: React.FC<{ setNextStep: VoidFunction }> = (props) => {
  const [email, setEmail] = useState<string>("");
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
        props.setNextStep();
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
      <h1>
        <BsNewspaper /> Newsletter Sign Up - be the first to find out news about
        our brand and products
      </h1>
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
