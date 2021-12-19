import { Link } from "react-router-dom";
import { data } from "./linkData";
import {
  FavoriteBorder,
  PersonOutline,
  PersonOutlineOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import { Badge, IconButton } from "@mui/material";
import { useSelector } from "react-redux";
import { getUser } from "../../redux/authentication/authentication.selector";
import {
  Center,
  Container,
  Left,
  LinkContainer,
  LinkItem,
  Logo,
  Nav,
  Right,
  StyledLink,
  Wrapper,
} from "./Navbar.style";
import { getCartQuantity } from "../../redux/cart/cart.selector";
import { getWishlistQuantity } from "../../redux/wishlist/wishlist.selector";

const Navbar = () => {
  const loggedIn = useSelector(getUser);
  const cartQuantity = useSelector(getCartQuantity);
  const wishlistQuantity = useSelector(getWishlistQuantity);

  const left = (
    <Left>
      <StyledLink to="/">
        <Logo>Takt.</Logo>
      </StyledLink>
    </Left>
  );

  const center = (
    <Center>
      <Nav>
        <LinkContainer>
          {data.map(({ url, title }) => (
            <LinkItem key={title}>
              <StyledLink to={url}>{title}</StyledLink>
            </LinkItem>
          ))}
        </LinkContainer>
      </Nav>
    </Center>
  );

  const right = (
    <Right>
      {loggedIn ? (
        <Link to="/dashboard">
          <IconButton>
            <PersonOutline />
          </IconButton>
        </Link>
      ) : (
        <Link to="/login">
          <IconButton>
            <PersonOutlineOutlined />
          </IconButton>
        </Link>
      )}

      <Link to="/wishlist">
        <IconButton>
          <Badge color="secondary" badgeContent={wishlistQuantity}>
            <FavoriteBorder />
          </Badge>
        </IconButton>
      </Link>

      <Link to="/cart">
        <IconButton>
          <Badge color="secondary" badgeContent={cartQuantity}>
            <ShoppingCartOutlined />
          </Badge>
        </IconButton>
      </Link>
    </Right>
  );

  return (
    <Container>
      <Wrapper>
        {left}
        {center}
        {right}
      </Wrapper>
    </Container>
  );
};

export default Navbar;
