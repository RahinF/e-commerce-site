import styled from "styled-components";
import Button from "../Button";

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  position: relative;
  overflow: hidden;
`;

export const Arrow = styled(Button)`
  width: 50px;
  position: absolute;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  top: 50%;
  transform: translateY(-50%);
`;

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: 1s ease-in-out;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

export const Slide = styled.div`
  display: flex;
  align-items: center;
  height: 100vh;
  min-width: 100vw;
  background-color: ${(props) => props.backgroundColor};
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