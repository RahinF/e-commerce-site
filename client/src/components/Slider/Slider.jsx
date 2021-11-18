import { ChevronLeftOutlined, ChevronRightOutlined } from "@mui/icons-material";
import { slides } from "./data";
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
  Wrapper,
} from "./Slider.style";

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const moveSlider = (direction) => {
    const numberOfSlides = slides.length - 1;

    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : numberOfSlides);
    } 
    
    else if (direction === "right") {
      setSlideIndex(slideIndex < numberOfSlides ? slideIndex + 1 : 0);
    }
  };

  return (
    <Container>
      <Arrow direction="left" onClick={() => moveSlider("left")}>
        <ChevronLeftOutlined />
      </Arrow>

      <Wrapper slideIndex={slideIndex}>
        {slides.map(({ id, title, description, image, backgroundColor }) => (
          <Slide backgroundColor={backgroundColor} key={id}>
            <ImageContainer>
              <Image src={image} />
            </ImageContainer>

            <Content>
              <Title>{title}</Title>
              <Description>{description}</Description>
              <Button>button</Button>
            </Content>
          </Slide>
        ))}
      </Wrapper>

      <Arrow direction="right" onClick={() => moveSlider("right")}>
        <ChevronRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;
