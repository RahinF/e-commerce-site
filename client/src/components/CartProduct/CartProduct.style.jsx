import styled from "styled-components";
import Button from "../Button";

export const Container = styled.div`
  padding: 1rem;
  display: flex;
  gap: 1rem;
  justify-content: space-between;
  align-items: center;

  &:not(:first-child) {
    border-top: 1px solid lightgray;
  }
`;

export const Arrow = styled(Button)`
  height: 40px;
  width: 40px;
  padding: 0;
`;

export const Title = styled.h3``;

export const Price = styled.p`
  font-size: 2rem;
`;

export const ImageContainer = styled.div``;
export const Image = styled.img`
  height: 200px;
`;

export const Info = styled.div``;

export const Size = styled.p``;

export const Color = styled.div`
  background-color: ${(props) => props.color};
  width: 25px;
  height: 25px;
  border-radius: 50%;
`;

export const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 15%;
`;

export const QuantityValue = styled.p``;