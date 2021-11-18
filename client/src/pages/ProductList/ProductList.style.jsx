import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
`;

export const FilterContainer = styled.div`
  padding: 1rem 2rem;
  display: flex;
`;

export const Left = styled.div`
  flex: 1;
  display: flex;
  gap: 1rem;
`;

export const FilterItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const FilterTitle = styled.h3``;

export const Select = styled.select`
  padding: 0.5rem 1rem;
  background: white;
  border: 1px solid black;
  cursor: pointer;
`;

export const Option = styled.option`
  background: white;
`;

export const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`;