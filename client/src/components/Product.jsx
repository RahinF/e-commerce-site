import styled from "styled-components";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { breakpoints } from "../responsive.js";
import { useReducer } from "react";

const ProductLink = styled(Link)`
  text-decoration: none;
  color: #707070;
  transition: 0.2s ease-in-out;

  &:hover {
    text-decoration: underline;
    color: black;
  }
`;

const Container = styled.div`
  margin: auto;

  width: calc(${breakpoints.xl} / 4);
  padding: 1rem;
  background: #ececec;
`;

const Title = styled.p`
  margin-bottom: 0;
`;

const Info = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`;
const Price = styled.p`
  margin-bottom: 0;
  font-weight: 700;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 300px;
  background: #adacac;
`;

const Image = styled.img`
  max-height: 100%;
  max-width: 100%;
`;

const Button = styled.div`
  display: flex;
  cursor: pointer;
  transition: 0.2s ease-in-out;

  &:hover {
    transform: scale(1.2);
  }
`;

export const Product = ({ product }) => {
  const [checked, toggle] = useReducer((checked) => !checked, false);

  return (
    <Container>
      <ProductLink to={`/product/${product._id}`}>
        <ImageContainer>
          <Image src={product.image} alt={product.title} />
        </ImageContainer>
        <Title>{product.title}</Title>
      </ProductLink>

      <Info>
        <Price>${product.price.toFixed(2)}</Price>
        <Button onClick={toggle}>
          {checked ? <Favorite /> : <FavoriteBorder />}
        </Button>
      </Info>
    </Container>
  );
};
