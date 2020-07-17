import styled from "styled-components";

const HeaderContainer = styled.header`
  background-color: #ffffff;
  border-bottom: 1px solid #e9e8e8;
`;

const HeaderContent = styled.nav`
  margin: 0 auto;
  width: 100%;
  max-width: 1200px;
  height: 72px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 24px;
  padding-right: 24px;
  box-sizing: border-box;
`;

export { HeaderContainer, HeaderContent };
