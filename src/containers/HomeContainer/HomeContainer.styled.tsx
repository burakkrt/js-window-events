import styled from "@emotion/styled";

export const HomeContainer = styled.div`
  min-height: 100vh;
  padding: 10px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: max-content;
  gap: 8px;
  max-width: 90%;
  margin: auto;
`;
