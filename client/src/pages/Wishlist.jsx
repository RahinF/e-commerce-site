import { useDispatch, useSelector } from "react-redux";
import { getWishlist } from "../redux/wishlist/wishlist.selector";
import { useEffect, useState } from "react";
import { Product } from "../components/Product";
import Button from "../components/Button";
import { clear } from "../redux/wishlist/wishlist.slice";
import axios from "axios";
import styled from "styled-components";

const Container = styled.div`
  min-height: 60vh;
`;

const EmptyWishlist = styled.p`
  display: flex;
  justify-content: center;
`;

const ClearButton = styled(Button)`
  margin-left: auto;
`;

const Title = styled.h1`
  text-align: center;
`;

const WishlistItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
`;

const Wishlist = () => {
  const wishlist = useSelector(getWishlist);
  const dispatch = useDispatch();

  const wishlistItems = (
    <WishlistItems>
      {wishlist.map((item) => (
        <Item key={item} id={item} />
      ))}
    </WishlistItems>
  );

  const emptyWishlist = <EmptyWishlist>Wishlist is empty</EmptyWishlist>;

  return (
    <Container>
      <Title>Wishlist</Title>
      <ClearButton onClick={() => dispatch(clear())}>clear</ClearButton>
      {wishlist.length ? wishlistItems : emptyWishlist}
    </Container>
  );
};

const Item = ({ id }) => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    async function getProduct() {
      await axios
        .get(`http://localhost:8000/api/products/find/${id}`)
        .then((response) => {
          setProduct(response.data);
        });
    }
    getProduct();
  }, [id]);

  const component = <Product product={product} />;
  const loading = <div>loading...</div>;
  return product ? component : loading;
};

export default Wishlist;
