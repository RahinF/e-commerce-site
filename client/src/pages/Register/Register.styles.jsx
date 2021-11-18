import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  background-image: url("https://images.unsplash.com/photo-1511892549826-a48122d9b258?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1171&q=80");
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