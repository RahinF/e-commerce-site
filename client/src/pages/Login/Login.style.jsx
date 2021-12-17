import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  background-image: url("https://images.unsplash.com/photo-1607577851365-2fa14a644a56?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80");
  background-position: center;
  background-size: cover;
`;

export const Wrapper = styled.div`
  width: 400px;
  background-color: white;
  padding: 2rem;
  margin: 1rem;
`;

export const Title = styled.h1`
  text-align: center;
  text-transform: uppercase;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ForgotPassword = styled.p`
  text-align: right;
  margin-bottom: 0;
`;

export const CreateAccount = styled.p`
  text-align: center;
`;

export const Error = styled.p`
  color: red;
  text-align: center;
`;
