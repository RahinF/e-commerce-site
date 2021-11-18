import { useDispatch, useSelector } from "react-redux";

import { CartProduct } from "../../components/CartProduct/CartProduct";
import Button from "../../components/Button";
import { Content } from "../../responsive";
import { getUser } from "../../redux/authentication/authentication.selector";
import { useEffect } from "react";
import { loadCart } from "../../redux/cart/cart.thunk";
import { getCart, getCartLoading } from "../../redux/cart/cart.selector";
import {
  Bottom,
  Container,
  Info,
  Summary,
  SummaryItem,
  SummaryItemText,
  SummaryItemTotal,
  SummaryTitle,
  Title,
  Top,
  TopText,
  TopTextContainer,
} from "./Cart.styles";

const Cart = () => {
  const cart = useSelector(getCart);
  const isLoading = useSelector(getCartLoading);
  const dispatch = useDispatch();
  const user = useSelector(getUser);

  useEffect(() => {
    // todo

    // if logged in load from db
    // if anon load from localStorage


    user && dispatch(loadCart(user._id));
  }, [dispatch, user]);

  const loading = <div>loading...</div>;
  const component = (
    <Container>
      <Content>
        <Title>cart</Title>
        <Top>
          <Button>Continue Shopping</Button>
          <TopTextContainer>
            <TopText>shopping cart (0)</TopText>
            <TopText>wishlist (0)</TopText>
          </TopTextContainer>
        </Top>

        <Bottom>
          <Info>
            {cart?.map((product) => (
              <CartProduct key={product.data._id} product={product} />
            ))}
          </Info>
          <Summary>
            <SummaryTitle>Order Summary</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal:</SummaryItemText>
              <SummaryItemTotal>$242</SummaryItemTotal>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated shipping:</SummaryItemText>
              <SummaryItemTotal>$5.95</SummaryItemTotal>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping discount:</SummaryItemText>
              <SummaryItemTotal>$5.95</SummaryItemTotal>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Total:</SummaryItemText>
              <SummaryItemTotal>$242</SummaryItemTotal>
            </SummaryItem>

            <Button filled>Checkout</Button>
          </Summary>
        </Bottom>
      </Content>
    </Container>
  );
  return isLoading ? loading : component;
};

export default Cart;
