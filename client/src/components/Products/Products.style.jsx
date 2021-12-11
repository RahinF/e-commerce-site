import styled from "styled-components";
import { media } from "../../responsive";

export const Container = styled.div`
  ${media("sm", { display: "grid", gridTemplateColumns: "repeat(2, 1fr)" })}
  ${media("lg", { gridTemplateColumns: "repeat(3, 1fr)" })}
  ${media("xxl", { gridTemplateColumns: "repeat(4, 1fr)" })}
  margin-bottom: 3rem;
`;
