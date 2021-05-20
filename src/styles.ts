import styled from "styled-components";

export const AppContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: max-content 1fr; // FIXME: wheel height
  grid-gap: 15px;
  color: #ffffff;
`;
