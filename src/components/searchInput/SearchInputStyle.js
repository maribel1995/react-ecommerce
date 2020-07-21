import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SearchInputContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  position: relative;
  max-width: 100%;
`;

const Input = styled.input`
  width: 100%;
  height: 48px;
  border-radius: 8px;
  box-sizing: border-box;
  color: #333;
  background-color: #fff;
  font-size: 16px;
  line-height: 20px;
  font-family: Roboto;
  border: 1px solid #ccc;
  padding-left: 48px;
  font-size: 16px;
  border-color: #fff;
  max-width: 100%;
`;

const StyledFontIcon = styled(FontAwesomeIcon)`
  top: 50%;
  z-index: 10;
  flex-shrink: 0;
  position: absolute;
  transform: translate(16px, -50%);
`;

export { SearchInputContainer, Input, StyledFontIcon };
