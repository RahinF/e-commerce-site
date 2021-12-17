import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadProduct } from "../../redux/product/product.thunk";
import { getUser } from "../../redux/authentication/authentication.selector";
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
  ColorBlockInner,
  ColorBlockOuter,
  List,
  Container,
  Description,
  Image,
  ImageContainer,
  InfoContainer,
  Price,
  QuantityContainer,
  QuantityValue,
  Title,
  SizeItem,
  ButtonContainer,
} from "./Product.style";
import { createCart, updateCart } from "../../redux/cart/cart.thunk";
import { addProduct } from "../../redux/cart/cart.slice";
import { getCart } from "../../redux/cart/cart.selector";
import WishlistButton from "../../components/WishlistButton";

const Product = () => {
  const product = useSelector(getProduct);

  const cart = useSelector(getCart);
  const user = useSelector(getUser);
  const isLoading = useSelector(getProductLoading);
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");

  const dispatch = useDispatch();

  const { id } = useParams();

  const modifyQuantity = (type) => {
    if (type === "increase") {
      setQuantity(quantity + 1);
    } else if (type === "decrease") {
      quantity > 1 && setQuantity(quantity - 1);
    }
  };

  const addToCart = () => {
    dispatch(
      addProduct({
        product,
        quantity,
        color: selectedColor,
        size: selectedSize,
      })
    );

    // if (cart.cartId) {
    //   const item = {
    //     cartId: cart.cartId,
    //     product: {
    //       productId: product._id,
    //       quantity,
    //       color: selectedColor,
    //       size: selectedSize,
    //     },
    //   };
    //   dispatch(updateCart(item));
    // }
  };

  useEffect(() => {
    dispatch(loadProduct(id));
  }, [dispatch, id]);

  const loading = <div>Loading</div>;

  const component = (
    <Container>
      <ImageContainer>
        <Image src={product?.image} alt={product?.title} />
      </ImageContainer>

      <InfoContainer>
        <Category>{product?.category}</Category>
        <Title>{product?.title}</Title>

        <Description>{product?.description}</Description>
        <Price>${product?.price.toFixed(2)}</Price>

        <div>
          <p>Size  —  {selectedSize}</p>
          <List>
            {product?.size.map((size) => (
              <SizeItem
                key={size}
                selected={selectedSize === size}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </SizeItem>
            ))}
          </List>
        </div>

        <div>
          <p>Color  —  {selectedColor}</p>
          <List>
            {product?.color.map((color) => (
              <ColorBlockOuter
                key={color}
                selected={selectedColor === color}
                onClick={() => setSelectedColor(color)}
              >
                <ColorBlockInner background={color} />
              </ColorBlockOuter>
            ))}
          </List>
        </div>

        <QuantityContainer>
          <Arrow onClick={() => modifyQuantity("increase")}>
            <Add />
          </Arrow>
          <QuantityValue>{quantity}</QuantityValue>
          <Arrow onClick={() => modifyQuantity("decrease")}>
            <Remove />
          </Arrow>
        </QuantityContainer>

        <ButtonContainer>
        <Button filled onClick={addToCart} disabled={!selectedColor || !selectedSize}>
          Add to Cart
        </Button>
        <WishlistButton id={product?._id} />
        </ButtonContainer>
      </InfoContainer>
    </Container>
  );

  return isLoading ? loading : component;
};

export default Product;
