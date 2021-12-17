import styled from "styled-components";
import { media } from "../../responsive";
import Button from "../../components/Button";

export const Container = styled.div`
  ${media("md", { display: "flex", padding: "3rem 0" })}
  padding: 3rem 1rem;
  gap: 1rem;
  min-height: 80vh;
`;

export const InfoContainer = styled.div`
  flex: 1;
`;

export const Arrow = styled(Button)`
  height: 40px;
  width: 40px;
  padding: 0;
`;

export const Title = styled.h1`
  margin-top: 0;
  max-width: 50ch;
`;

export const Description = styled.p`
  max-width: 50ch;
`;

export const Price = styled.p`
  font-size: 2rem;
`;

export const ImageContainer = styled.div`
  flex: 2;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.img`
  width: 50%;
  max-height: 60vh;
  object-fit: contain;
`;

export const Category = styled.p`
  margin-bottom: 0;
  color: gray;
`;

export const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 200px;
`;

export const QuantityValue = styled.p`
  font-size: 1.5rem;
`;

export const List = styled.div`
  display: flex;
  gap: 1rem;
`;

export const SizeItem = styled.div`
  border: 1px solid lightgrey;
  padding: 0.5rem 1rem;
  cursor: pointer;
  text-transform: uppercase;
  border-color: ${({ selected }) => selected && `black`};
`;

export const ColorBlockOuter = styled.div`
  height: 35px;
  width: 35px;
  border-radius: 50%;
  display: grid;
  place-content: center;
  border: ${({ selected }) => selected && `1px solid black`};
`;

export const ColorBlockInner = styled.div`
  background: ${({ background }) => background};
  height: 25px;
  width: 25px;
  border-radius: 50%;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  margin: 0.2rem;

  &:hover {
    transform: scale(1.2);
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;