import styled from "styled-components";
import { Content, media } from "../../responsive";

export const Container = styled(Content)`
  ${media("md", { display: "flex", padding: "1rem 0" })}
  padding: 1rem;
  gap: 1rem;
`;

export const FooterContent = styled.div``;

export const Left = styled.div`
  flex: 1;
`;

export const Logo = styled.h1`
  text-transform: uppercase;
`;

export const Description = styled.p`
  max-width: 50ch;
  margin-bottom: 2rem;
`;

export const SocialContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

export const SocialIcon = styled.div`
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 0.25s ease-in-out;

  &:hover {
    transform: scale(1.2);
  }
`;

export const Center = styled.div`
  flex: 1;
`;

export const Title = styled.h3`
  font-size: 1.5rem;
`;

export const List = styled.ul`
  padding-left: 0;
  display: flex;
  flex-wrap: wrap;
`;

export const ListItem = styled.li`
  list-style: none;
  min-width: 50%;
  padding: 1rem 0;
`;

export const Right = styled.div`
  flex: 1;
`;

export const ContactContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;
export const ContactItem = styled.p``;