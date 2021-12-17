import { Content } from "../responsive";
import { useDispatch, useSelector } from "react-redux";
import { getWishlist } from "../redux/wishlist/wishlist.selector";
import { useEffect, useState } from "react";
import { Product } from "../components/Product";
import Button from "../components/Button";
import { clear } from "../redux/wishlist/wishlist.slice";
import axios from "axios";

const Wishlist = () => {
  const wishlist = useSelector(getWishlist);
  const dispatch = useDispatch();

  const wishlistItems = wishlist.map((item) => <Item key={item} id={item} />);

  const emptyWishlist = <div>Wishlist is empty</div>;

  return (
    <>
      <h1>Wishlist</h1>
      <Button onClick={() => dispatch(clear())}>clear</Button>
      {wishlist.length ? wishlistItems : emptyWishlist}
    </>
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
