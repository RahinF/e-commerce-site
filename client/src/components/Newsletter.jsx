import { Send } from "@mui/icons-material";
import { useState } from "react";
import styled from "styled-components";
import Button from "./Button";

const Container = styled.div``;

const InputContainer = styled.div`
  display: flex;
  border: 1px solid transparent;
  transition: 0.25s ease;
  width: 100%;

  &:focus-within {
    border-color: black;
  }
`;

const Input = styled.input`
  flex: 1;
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

const SubmitButton = styled(Button)`
  flex: 0;
  padding: 0.5rem 1rem;
`;

const Title = styled.h3`
  font-size: 1.5rem;
`;

const ErrorMessage = styled.p`
  color: red;
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
      <Title>Newsletter</Title>
      <p>
        Subscribe to get special offers, free giveaways, and once-in-a-lifetime
        deals.
      </p>
      <ErrorMessage>{error}</ErrorMessage>

      <InputContainer>
        <Input
          type="email"
          placeholder="Your Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <SubmitButton filled onClick={onSubmit}>
          <Send />
        </SubmitButton>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
