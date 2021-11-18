import styled from "styled-components";
import { media } from "../../responsive";

export const Container = styled.div``;
export const Title = styled.h1`
  text-align: center;
  text-transform: uppercase;
`;

export const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
`;

export const TopTextContainer = styled.div`
  display: flex;
  gap: 1rem;
`;
export const TopText = styled.h3``;

export const Bottom = styled.div`
  margin-top: 2.5rem;
  ${media("md", { display: "flex" })}
  padding: 1rem;
  gap: 1rem;
`;
export const Info = styled.div`
  flex: 3;
`;
export const Summary = styled.div`
  flex: 1;
  border: 1px solid lightgray;
  height: min-content;
  position: sticky;
  top: 10%;
  padding: 1rem;

  display: flex;
  flex-direction: column;
`;

export const SummaryTitle = styled.h2`
  text-align: center;
`;

export const SummaryItem = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const SummaryItemText = styled.p``;
export const SummaryItemTotal = styled.p``;
