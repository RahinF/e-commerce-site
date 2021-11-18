import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  position: relative;
`;

export const Content = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  text-transform: uppercase;
  color: white;
  margin-bottom: 2rem;
  font-size: 3rem;
`;

export const Image = styled.img`
  height: min-content;
  width: 100%;
  object-fit: cover;
`;
