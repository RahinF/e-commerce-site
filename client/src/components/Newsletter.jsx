import { Send } from "@mui/icons-material";
import { useState } from "react";
import styled from "styled-components";
import Button from "./Button";

const Container = styled.div``;

const InputContainer = styled.div`
  display: flex;
  border: 1px solid transparent;
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

const Title = styled.h5`
  font-size: 1.5rem;
  margin: 0;
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
      <Title>Sign up for Newsletter</Title>
      <p>
        We will let you know when we have new arrivals, events and promo's don't
        worry we send them infrequently, just a friendly hi now and again!
      </p>
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
    </Container>
  );
};

export default Newsletter;
