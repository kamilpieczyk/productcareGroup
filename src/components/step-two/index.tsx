import React, { useCallback, useState } from "react";
import { BsNewspaper, BsCheck } from "react-icons/bs";

import { Container, InputBox } from "./styles";
import Title from "../title";
import Input from "../input";
import Button from "../button";
import ErrorBox from "../error-box";
import SuccessBox from "../success-box";

const StepTwo: React.FC<{ email: string }> = ({ email }) => {
  const [isLoading, setLoading] = useState<boolean>(false);
  const [isError, setError] = useState<boolean>(false);
  const [isSuccess, setSuccess] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [postcode, setPostcode] = useState<string>("");

  const handleChangeInputValue = useCallback(
    (
      e: React.ChangeEvent<HTMLInputElement>,
      onChange: React.Dispatch<React.SetStateAction<string>>
    ) => {
      onChange(e.target.value);
    },
    []
  );

  const handlePATCHDetails = useCallback(async () => {
    setLoading(true);
    try {
      const res: Response = await fetch(
        `https://mailing-list.prototype.mmgrouptech.net/subscribe/${email}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            sourceRef: "recruit2022_kamil",
            name,
            phone,
            postcode,
          }),
        }
      );
      setLoading(false);

      if (res.status === 200) {
        setSuccess(true);
      } else {
        throw new Error("Email provided not found");
      }
    } catch (err) {
      console.error(err);
      setError(true);
    }
  }, [name, phone, postcode, email]);

  const inputs = [
    {
      name: "name",
      type: "text",
      value: name,
      placeholder: "Name",
      onChange: setName,
    },
    {
      name: "phone",
      type: "text",
      value: phone,
      placeholder: "Phone Number",
      onChange: setPhone,
    },
    {
      name: "postcode",
      type: "text",
      value: postcode,
      placeholder: "Postcode",
      onChange: setPostcode,
    },
  ];

  return (
    <Container>
      <Title>
        <BsNewspaper /> Thanks for Signing up!
      </Title>
      <p>
        to help us send information most revelant to you, privide us with a few
        more details below
      </p>
      <InputBox>
        {inputs.map((input) => (
          <Input
            type={input.type}
            value={input.value}
            placeholder={input.placeholder}
            onChange={(e) => handleChangeInputValue(e, input.onChange)}
          ></Input>
        ))}
        <Button disabled={isLoading} onClick={handlePATCHDetails}>
          {isLoading ? (
            "...sending data"
          ) : (
            <>
              <BsCheck /> Save Details
            </>
          )}
        </Button>
      </InputBox>
      {isError && <ErrorBox>Email provided not found</ErrorBox>}
      {isSuccess && <SuccessBox>details updated</SuccessBox>}
    </Container>
  );
};

export default StepTwo;
