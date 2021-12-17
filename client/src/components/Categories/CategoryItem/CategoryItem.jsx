import { Link } from "react-router-dom";
import { Container, Content, Image, Title } from "./CategoryItem.style";

const CategoryItem = ({ item }) => {
  const { title, image, category } = item;

  return (
    <Container>
      <Link to={`/products/${category}`}>
        <Image src={image} />
        <Content>
          <Title>{title}</Title>
        </Content>
      </Link>
    </Container>
  );
};

export default CategoryItem;
