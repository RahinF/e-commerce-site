import styled from "styled-components";

export const Title = styled.h1`
  position: relative;
  text-decoration: none;
  font-size: 3rem;
  font-weight: 400;
  color: white;
  transition: all 0.35s ease;

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: white;
    visibility: hidden;
    transform: scaleX(0);
    transition: all 0.3s ease-in-out 0s;
  }
`;

export const Image = styled.img`
  height: min-content;
  width: 100%;
  object-fit: cover;
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

export const Container = styled.div`
  flex: 1;
  position: relative;
  overflow: hidden;

  &:hover ${Title} {
    &::before {
      visibility: visible;
      transform: scaleX(1);
    }
  }

  &:hover ${Image} {
    transition: all 0.35s ease;
    transform: scale(1.1);
  }
`;

