import styled from "styled-components";
import Button from "../Button";

export const Container = styled.div`
  position: relative;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Arrow = styled(Button)`
  width: 50px;
  position: absolute;
  left: ${({ direction }) => direction === "left" && "10px"};
  right: ${({ direction }) => direction === "right" && "10px"};
  top: 50%;
  transform: translateY(-50%);
`;

export const Slide = styled.div`
  display: flex;
  align-items: center;
  height: 100vh;
  min-width: 100%;
  background-color: ${({ backgroundColor }) => backgroundColor};
`;

export const Content = styled.div`
  flex: 1;
`;

export const Title = styled.h1`
  font-size: 3rem;
  text-transform: uppercase;
`;

export const Description = styled.p`
  max-width: 60ch;
  font-size: 1.3rem;
  letter-spacing: 0.1rem;
  line-height: 1.75rem;
  margin-bottom: 3rem;
`;

export const ImageContainer = styled.div`
  height: 100%;
  flex: 1;
  display: flex;
  justify-content: center;
`;

export const Image = styled.img`
  height: 100%;
`;

