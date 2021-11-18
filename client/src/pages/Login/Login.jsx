import Button from "../../components/Button";
import FormInput from "../../components/FormInput";
import { Link } from "react-router-dom";
import { useState } from "react";
import {  loginUser } from "../../redux/authentication/authentication.thunk";
import { getLoginError } from "../../redux/authentication/authentication.selector";
import { useDispatch, useSelector } from "react-redux";

import {
  Container,
  CreateAccount,
  Error,
  ForgotPassword,
  Form,
  Title,
  Wrapper,
} from "./Login.styles";


const Login = () => {
  const dispatch = useDispatch();
  const loginError = useSelector(getLoginError);

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const inputs = [
    {
      id: "email",
      name: "email",
      type: "email",
      label: "email",
      errorMessage: "Please enter a valid email.",
      required: true,
    },
    {
      id: "password",
      name: "password",
      type: "password",
      label: "password",
      errorMessage: "Please enter a password.",
      required: true,
    },
  ];

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(values));
  };

  return (
    <Container>
      <Wrapper>
        <Title>Login</Title>
        <Error>{loginError}</Error>
        <Form onSubmit={handleSubmit}>
          {inputs.map((input) => (
            <FormInput
              key={input.id}
              {...input}
              value={values[input.name]}
              onChange={onChange}
            />
          ))}

          <ForgotPassword>Forgot password?</ForgotPassword>

          <Button filled>Login</Button>
          <Link to="/register">
            <CreateAccount>Create account</CreateAccount>
          </Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
