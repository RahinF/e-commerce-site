import styled from "styled-components";
import { media } from "../../responsive";

export const Container = styled.div`
  ${media("md", { display: "flex", padding: "1rem 0" })}
  gap: 1rem;
  padding: 1rem;
`;
