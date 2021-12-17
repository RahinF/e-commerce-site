import { Add, Remove } from "@mui/icons-material";
import { Arrow, Container, Image, ImageContainer, Info, Price, QuantityContainer, QuantityValue, Title } from "./CartProduct.style";

export const CartProduct = ({ product }) => {
  const { title, image, price, _id: id, categories } = product.product;
  const quantity = product.quantity;

  

  /*

categories: ['shirts']
color: ['red']
description: "desc"
image: "image"
price: 24
size: ['s']
title: "shirt 1"
_id: "617bc99c2bdaac074bd0d234"

image
title 
id
price

quantity
user color
user size

  */

  const calcPrice = () => price * quantity;

  return (
    <Container>
      <ImageContainer>
        <Image src={image} alt={title} />
      </ImageContainer>
      <Info>
        <p>{id}</p>
        <Title>{title}</Title>
        {categories.map((category) => (
          <p key={category}>{category}</p>
        ))}
      </Info>
      <QuantityContainer>
        <Arrow>
          <Add />
        </Arrow>
        <QuantityValue>{quantity}</QuantityValue>
        <Arrow>
          <Remove />
        </Arrow>
      </QuantityContainer>
      <Price>${calcPrice().toFixed(2)}</Price>
    </Container>
  );
};
