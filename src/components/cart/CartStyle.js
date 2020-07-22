import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CartContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: ${({ showCart }) => (showCart ? "100%" : "0" )};
  height: 100%;
  z-index: 9999;
  ${({ showCart }) => showCart && "background-color:rgba(0, 0, 0, 0.5)"};
  transition: background-color .5s ease-in ${({ showCart }) => (showCart ? "0s" : "0.7s")};
`;

const CartWrapper = styled.div`
  width: ${({ isMobile, windowWidth }) => (isMobile ? `${windowWidth}px` : "500px" )};
  background-color: #fff;
  position: absolute;
  height: inherit;
  transform: ${({ showCart }) => (showCart ? "translateX(0)" : "translateX(100%)" )};
  right: 0;
  transition: transform .5s ease-in;
`;

const CartContent = styled.div`
  position: relative;
  top: 55px;
  bottom: 55px;
  height: calc(100% - 200px);
  overflow: auto;
`;

const StyledFontIcon = styled(FontAwesomeIcon)`
  font-size: 36px;
  margin-left: 20px;
  margin-right: 10px;
  color: #fff;
`;

const CartHeader = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  background-color: rgb(98, 87, 78);
  z-index: 1;
`;

const CartHeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px;
`;

const CartCloseButton = styled.button`
  outline: none;
  background-color: inherit;
  border: none;
`;

const CartHeaderText = styled.span`
  text-transform: uppercase;
  font-weight: 700;
  font-size: 14px;
  display: flex;
  align-items: center;
  color: #fff;
`;

const CartFooter = styled.div`
  position: fixed;
  width: 100%;
  bottom: 0;
  background-color: #fff;
`;

const CartFooterContent = styled.div`
  border-top: 2px solid #e9e8e8;
  margin: 20px;
  padding: 20px 0;
  display: flex;
  justify-content: space-between;
`;

const CardTotalText = styled.span`
  font-weight: 700;
  font-size: 24px;
  color: rgb(71, 68, 69);
`;

export {
  CartContainer,
  CartWrapper,
  CartContent,
  CartHeader,
  CartCloseButton,
  CartHeaderContent,
  StyledFontIcon,
  CartHeaderText,
  CartFooter,
  CardTotalText,
  CartFooterContent,
};
