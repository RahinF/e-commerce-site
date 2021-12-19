import { ChevronLeftOutlined, ChevronRightOutlined } from "@mui/icons-material";
import { useState } from "react";
import Button from "../Button";
import {
  Arrow,
  Container,
  Description,
  Image,
  ImageContainer,
  Slide,
  Content,
  Title,
} from "./Slider.style";

const Slider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <Container>
      <Arrow direction="left" onClick={prevSlide}>
        <ChevronLeftOutlined />
      </Arrow>
      <Arrow direction="right" onClick={nextSlide}>
        <ChevronRightOutlined />
      </Arrow>

      {slides.map(
        (slide, index) =>
          index === current && (
            <Slide
              backgroundColor={slide.backgroundColor}
              key={slide.id}
            >
              <ImageContainer>
                <Image src={slide.image} />
              </ImageContainer>

              <Content>
                <Title>{slide.title}</Title>
                <Description>{slide.description}</Description>
                <Button>button</Button>
              </Content>
            </Slide>
          )
      )}
    </Container>
  );
};

export default Slider;
