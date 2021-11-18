import { Link } from "react-router-dom";
import { linkData } from "./linkData";
import styled from "styled-components";
import {
  FavoriteBorder,
  PersonOutline,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import { IconButton } from "@mui/material";
import Button from "../Button";
import { Content } from "../../responsive";
import { useSelector } from "react-redux";
import { getUser } from "../../redux/authentication/authentication.selector";

const Container = styled.header``;
const Wrapper = styled(Content)`
  display: flex;
  align-items: center;
  padding: 1rem 2rem;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
`;

const Logo = styled.h1`
  text-transform: uppercase;
  text-align: center;
  margin: 0;
`;

const Center = styled.div`
  flex: 1;
`;
const Nav = styled.nav`
  padding: 0.5rem;
  display: flex;
`;

const LinkContainer = styled.ul`
  padding: 0;
  display: flex;
  width: 50%;
  margin: auto;
  justify-content: space-around;
`;

const LinkItem = styled.li`
  list-style: none;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;
`;

const Navbar = () => {
  const loggedIn = useSelector(getUser);

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
              {linkData.map(({ url, title }) => (
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

          <IconButton>
            <FavoriteBorder />
          </IconButton>

          <Link to="/cart">
            <IconButton>
              <ShoppingCartOutlined />
            </IconButton>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
