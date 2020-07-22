import styled from "styled-components";

export const Main = styled.main`
  display: ${({ showCart, isMobile }) =>
    showCart && isMobile ? "none" : "block"};
  position: relative;
  top: 90px;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;
