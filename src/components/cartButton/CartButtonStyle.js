import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  color: rgb(57, 38, 41);
  font-size: 28px;
`;

const CartButtonWrapper = styled.div`
  position: relative;
  color: #4d54ff;
  cursor: pointer;
`;

const CircularLabel = styled.div`
  position: absolute;
  display: ${({ displayed }) => (displayed ? "block;" : "none;")};
  top: -18px;
  left: 15px;
  width: fit-content;
  width: -webkit-fit-content;
  width: -moz-fit-content;
  height: 20px;
  line-height: 1em;
  text-align: center;
  border-radius: 500rem;
  background-color: #db2828;
  border-color: #db2828;
  cursor: pointer;
  box-sizing: border-box;
`;

const LabelContent = styled.span`
  right: 10px;
  color: #fff;
  font-size: 11px;
  font-weight: 700;
  padding: 8px;
`;

export {
  StyledFontAwesomeIcon,
  CartButtonWrapper,
  CircularLabel,
  LabelContent,
};
