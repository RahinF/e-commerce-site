import { Close } from "@mui/icons-material";
import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: black;
  display: flex;
  padding: 0 1rem;
`;

const Text = styled.p`
  flex: 1;
  text-align: center;
  color: white;
`;

const CloseButton = styled.div`
  align-self: center;
  cursor: pointer;
  color: white;
`;

const Annoucement = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    isVisible && (
      <Container>
        <Text>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate
          cumque, illum ratione consectetur tempora earum.
        </Text>
        <CloseButton>
          <Close onClick={() => setIsVisible(false)} />
        </CloseButton>
      </Container>
    )
  );
};

export default Annoucement;
