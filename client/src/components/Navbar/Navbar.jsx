import { Link } from "react-router-dom";
import { data } from "./linkData";
import {
  FavoriteBorder,
  PersonOutline,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import { Badge, IconButton } from "@mui/material";
import Button from "../Button";
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

  return (
    <Container>
      <Wrapper>
        <Left>
          <StyledLink to="/">
            <Logo>Takt.</Logo>
          </StyledLink>
        </Left>
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
        <Right>
          {loggedIn ? (
            <Link to="/dashboard">
              <IconButton>
                <PersonOutline />
              </IconButton>
            </Link>
          ) : (
            <>
              <StyledLink to="/login">
                <Button filled>Login</Button>
              </StyledLink>

              <StyledLink to="/register">
                <Button>Register</Button>
              </StyledLink>
            </>
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
      </Wrapper>
    </Container>
  );
};

export default Navbar;
