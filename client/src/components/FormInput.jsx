import styled from "styled-components";
import { useState } from "react";

const Error = styled.p`
  display: none;
  color: red;
  margin-top: 0.5rem;
`;

const Input = styled.input`
  padding: 0.75rem 1rem;
  width: 100%;
  border: 1px solid #e8e8e1;

  &:focus-within {
    outline-style: solid;
    outline-color: black;
  }

  &:invalid ~ ${Error} {
    ${({ focused }) => focused && `display: block`}
  }
`;

const Label = styled.label`
  display: block;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  margin-bottom: 0.5rem;
`;

const FormInput = (props) => {
  const [focused, setFocused] = useState(false);

  const handleBlur = () => {
    setFocused(true);
  };

  const { id, label, onChange, errorMessage, ...inputProps } = props;
  return (
    <div>
      <Label htmlFor={id}>{label}</Label>
      <Input
        id={id}
        {...inputProps}
        onChange={onChange}
        onBlur={handleBlur}
        focused={focused}
      />
      <Error>{errorMessage}</Error>
    </div>
  );
};

export default FormInput;
