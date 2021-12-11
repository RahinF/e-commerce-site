import styled from "styled-components";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../redux/wishlist/wishlist.slice";
import { useEffect } from "react";
import { getWishlist } from "../redux/wishlist/wishlist.selector.js";
import { useState } from "react";

const Button = styled.div`
  display: flex;
  cursor: pointer;
  transition: 0.2s ease-in-out;

  &:hover {
    transform: scale(1.2);
  }
`;

const WishlistButton = ({ id }) => {
  const [favorite, setFavorite] = useState(false);
  const dispatch = useDispatch();
  const wishlist = useSelector(getWishlist);

  const handleClick = () => {
    !favorite ? dispatch(add(id)) : dispatch(remove(id));
  };

  useEffect(() => {
    wishlist.includes(id) ? setFavorite(true) : setFavorite(false);
  }, [wishlist, id]);

  return (
    <Button onClick={handleClick}>
      {favorite ? <Favorite /> : <FavoriteBorder />}
    </Button>
  );
};

export default WishlistButton;
