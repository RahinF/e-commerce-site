import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import FormInput from "../../components/FormInput";
import {  registerUser } from "../../redux/authentication/authentication.thunk";
import { getRegisterError } from "../../redux/authentication/authentication.selector";
import { Container, Form, Title, Wrapper } from "./Register.style";



const Register = () => {
  const dispatch = useDispatch();
  const registerError = useSelector(getRegisterError);


  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const inputs = [
    {
      id: "firstName",
      name: "firstName",
      type: "text",
      label: "first name",
      errorMessage: "Please enter a valid name.",
      required: true,
    },
    {
      id: "lastName",
      name: "lastName",
      type: "text",
      label: "last name",
      errorMessage: "Please enter a valid name.",
      required: true,
    },
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
      pattern: `^(?=.{8,20})(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+*!=]).*$`,
      errorMessage: `A password must contain 1 uppercase, 1 lowercase, 1 digit, 1 special character and must be beweetn 8-20 characters.`,
      required: true,
    },
  ];

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser(values));
  };

  return (
    <Container>
      <Wrapper>
        <Title>Register</Title>
        <Form onSubmit={handleSubmit}>
          {inputs.map((input) => (
            <FormInput
              key={input.id}
              {...input}
              value={values[input.name]}
              onChange={onChange}
            />
          ))}

          <Button filled>Create</Button>

          <p>
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
