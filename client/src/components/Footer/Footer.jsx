import {
  Email,
  Facebook,
  Instagram,
  Phone,
  Room,
  Twitter,
} from "@mui/icons-material";
import {
  Center,
  ContactContainer,
  ContactItem,
  Container,
  Left,
  List,
  ListItem,
  Right,
  SocialContainer,
  SocialIcon,
  Title,
} from "./Footer.style";
import Newsletter from "../Newsletter";
import { Content } from "../../responsive";

const Footer = () => {
  return (
    <footer>
      <Content>
        <Container>
          <Left>
            <Newsletter />
            <Title>Socials</Title>
            <SocialContainer>
              <SocialIcon>
                <Facebook />
              </SocialIcon>
              <SocialIcon>
                <Instagram />
              </SocialIcon>
              <SocialIcon>
                <Twitter />
              </SocialIcon>
            </SocialContainer>
          </Left>
          <Center>
            <Title>Useful Links</Title>
            <List>
              <ListItem>Home</ListItem>
              <ListItem>Cart</ListItem>
              <ListItem>Men's Fashion</ListItem>
              <ListItem>Women's Fashion</ListItem>
              <ListItem>Accessories</ListItem>
              <ListItem>My Account</ListItem>
              <ListItem>Wishlist</ListItem>
              <ListItem>Shipping</ListItem>
            </List>
          </Center>
          <Right>
            <Title>Contact</Title>
            <ContactContainer>
              <Room />
              <ContactItem>62 Parkes Road, Melbourne, VIC, 3000</ContactItem>
            </ContactContainer>
            <ContactContainer>
              <Phone />
              <ContactItem>(03) 8100 5534</ContactItem>
            </ContactContainer>
            <ContactContainer>
              <Email />
              <ContactItem>contact@takt.dev</ContactItem>
            </ContactContainer>
          </Right>
        </Container>
      </Content>
    </footer>
  );
};

export default Footer;
