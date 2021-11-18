import { Send } from "@mui/icons-material";
import { useState } from "react";
import styled from "styled-components";
import { Content, media } from "../responsive";
import Button from "./Button";

const Container = styled.div`
  background-color: aliceblue;
`;

const ContentContainer = styled(Content)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: fit-content;
  padding: 2rem 1rem;
`;

const InputContainer = styled.div`
  display: flex;
  border: 1px solid transparent;

  ${media("md", { width: "50%" })}
  transition: 0.25s ease;

  &:focus-within {
    border-color: black;
  }
`;

const Input = styled.input`
  padding: 0.75rem 1rem;
  width: 100%;
  border: 1px solid #e8e8e1;

  &:focus-within {
    outline-style: solid;
    outline-color: black;
  }

  &:invalid {
    outline-color: red;
  }
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-top: 0;
`;

const Description = styled.p`
  margin: 0;
`;

const ErrorMessage = styled.p`
  color: red;
  height: 1rem;
`;

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const onSubmit = () => {
    // if (!validator.isEmail(email)) {
    //   setError(
    //     "Please enter a valid email address. For example johndoe@domain.com."
    //   );
    // } else {
    //   setError("");
    // }
  };

  return (
    <Container>
      <ContentContainer>
        <Title>Newsletter</Title>
        <Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis,
          facere! Eum, nobis laborum! Optio, eligendi!
        </Description>
        <ErrorMessage>{error}</ErrorMessage>

        <InputContainer>
          <Input
            type="email"
            placeholder="Your Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <Button filled onClick={onSubmit}>
            <Send />
          </Button>
        </InputContainer>
      </ContentContainer>
    </Container>
  );
};

export default Newsletter;
