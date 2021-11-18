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
  Description,
  Left,
  List,
  ListItem,
  Logo,
  Right,
  SocialContainer,
  SocialIcon,
  Title,
} from "./Footer.style";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Left>
          <Logo>Takt.</Logo>
          <Description>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Perspiciatis nam ipsa quod. Placeat, impedit labore nostrum at magni
            laudantium delectus?
          </Description>
          <SocialContainer>
            <SocialIcon backgroundColor="#4267B2">
              <Facebook />
            </SocialIcon>
            <SocialIcon backgroundColor="#833AB4">
              <Instagram />
            </SocialIcon>
            <SocialIcon backgroundColor="#1DA1F2">
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
    </footer>
  );
};

export default Footer;
