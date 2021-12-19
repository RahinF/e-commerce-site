import styled from "styled-components";
import { Link } from "react-router-dom";
import { breakpoints } from "../responsive.js";
import WishlistButton from "./WishlistButton.jsx";

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
  width: calc(${breakpoints.xxl} / 5 - 1rem);
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

export const Product = ({ product }) => {
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

        <WishlistButton id={product._id} />
      </Info>
    </Container>
  );
};
