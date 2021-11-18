import styled, { css } from "styled-components";

export const breakpoints = {
  // bootstrap breakpoints
  sm: "576px",
  md: "768px", // tablet
  lg: "992px",
  xl: "1200px",
  xxl: "1400px",
};

export const media = (size, props) => {
  return css`
    @media only screen and (min-width: ${breakpoints[size]}) {
      ${props}
    }
  `;
};

export const Content = styled.div`
  max-width: ${breakpoints.xxl};
  margin: auto;
`;
