import styled from "styled-components";

const Button = styled.button`
  position: relative;
  background-color: ${({ filled }) => (filled ? "black" : "transparent")};
  color: ${({ filled }) => (filled ? "white" : "black")};
  border: 1px solid black;
  text-transform: uppercase;
  padding: 0.75rem 2rem;
  cursor: pointer;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  ${({ size }) =>
    size === "sm" &&
    `
      padding: 0.25rem 0.5rem;
      font-size: 0.875rem;
    `}

  ${({ size }) =>
    size === "lg" &&
    `
      padding: 1rem 2rem;
    `}

  &::before {
    content: "";
    width: 0;
    height: 100%;
    position: absolute;
    top: 0;
    left: ${({ direction }) => direction === "right" && 0};
    right: ${({ direction }) => direction === "left" && 0};
    transform: scaleX(1);
    transition: width 0.2s ease-in-out;
    background-color: ${({ filled }) => (filled ? "blue" : "black")};
    z-index: -1;
  }

  &:hover {
    color: white;
    border-color: ${({ filled }) => (filled ? "blue" : "black")};

    &::before {
      width: 100%;
    }
  }

  &:disabled {
    background-color: grey;
  }
`;

Button.defaultProps = {
  direction: "right",
};

export default Button;
