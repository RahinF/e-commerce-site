import styled from "styled-components";
import { Content, media } from "../../responsive";
import Button from "../../components/Button";

export const Container = styled(Content)`
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
  flex: 1;
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

export const RatingCount = styled.p``;

export const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 200px;
`;

export const QuantityValue = styled.p`
  font-size: 1.5rem;
`;