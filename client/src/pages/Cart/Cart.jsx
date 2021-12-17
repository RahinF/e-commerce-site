import { useDispatch, useSelector } from "react-redux";
import { CartProduct } from "../../components/CartProduct/CartProduct";
import Button from "../../components/Button";

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
} from "./Cart.style";
import { clear } from "../../redux/cart/cart.slice";

const Cart = () => {
  const cart = useSelector(getCart);
  const isLoading = useSelector(getCartLoading);
  const dispatch = useDispatch();

  const cartItems = cart.map((item) => (
    <CartProduct key={item.product._id} product={item} />
  ));

  const emptyCart = <div>cart is empty</div>;
  const loading = <div>loading...</div>;
  const component = (
    <Container>
      
        <Title>cart</Title>
        <Top>
          <Button>Continue Shopping</Button>
          <Button onClick={() => dispatch(clear())}>Clear Cart</Button>
        </Top>

        <Bottom>
          <Info>{cart.length ? cartItems : emptyCart}</Info>
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
      
    </Container>
  );
  return isLoading ? loading : component;
};

export default Cart;
