import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadProduct } from "../../redux/product/product.thunk";
import {
  getProduct,
  getProductLoading,
} from "../../redux/product/product.selector";
import { useParams } from "react-router";
import { Add, Remove } from "@mui/icons-material";
import { useState } from "react";
import Button from "../../components/Button";
import {
  Arrow,
  Category,
  Container,
  Description,
  Image,
  ImageContainer,
  InfoContainer,
  Price,
  QuantityContainer,
  QuantityValue,
  Title,
} from "./Product.style";

const Product = () => {
  const product = useSelector(getProduct);
  const isLoading = useSelector(getProductLoading);
  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();

  const { id } = useParams();

  const modifyQuantity = (type) => {
    if (type === "increase") {
      setQuantity(quantity + 1);
    } else if (type === "decrease") {
      quantity > 1 && setQuantity(quantity - 1);
    }
  };

  useEffect(() => {
    dispatch(loadProduct(id));
  }, [dispatch, id]);

  return isLoading ? (
    <div>Loading</div>
  ) : (
    <Container>
      <ImageContainer>
        <Image src={product?.image} alt={product?.title} />
      </ImageContainer>

      <InfoContainer>
        <Category>{product?.category}</Category>
        <Title>{product?.title}</Title>

        <Description>{product?.description}</Description>
        <Price>${product?.price.toFixed(2)}</Price>

        <QuantityContainer>
          <Arrow onClick={() => modifyQuantity("increase")}>
            <Add />
          </Arrow>
          <QuantityValue>{quantity}</QuantityValue>
          <Arrow onClick={() => modifyQuantity("decrease")}>
            <Remove />
          </Arrow>
        </QuantityContainer>

        <Button filled>Add to Cart</Button>
      </InfoContainer>
    </Container>
  );
};

export default Product;
