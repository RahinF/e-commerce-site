import styled from "styled-components";
import { Content } from "../../responsive";
import { Link } from "react-router-dom";

export const Container = styled.header``;
export const Wrapper = styled(Content)`
  display: flex;
  align-items: center;
  padding: 1rem 2rem;
`;

export const Left = styled.div`
  flex: 1;
  display: flex;
`;

export const Logo = styled.h1`
  text-transform: uppercase;
  text-align: center;
  margin: 0;
`;

export const Center = styled.div`
  flex: 1;
`;
export const Nav = styled.nav`
  padding: 0.5rem;
  display: flex;
`;

export const LinkContainer = styled.ul`
  padding: 0;
  display: flex;
  width: 50%;
  margin: auto;
  justify-content: space-around;
`;

export const LinkItem = styled.li`
  list-style: none;
  text-transform: uppercase;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

export const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;
`;