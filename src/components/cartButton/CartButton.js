import React from "react";
import {
  CartButtonWrapper,
  CircularLabel,
  LabelContent,
  StyledFontAwesomeIcon,
} from "./CartButtonStyle";
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";

const CartButton = ({ onClick, productCounter = 2 }) => {
  const handleOnClick = (e) => {
    onClick(e);
  };

  return (
    <CartButtonWrapper id="CartButton" onClick={handleOnClick}>
      <CircularLabel displayed={productCounter > 0}>
        <LabelContent>{productCounter}</LabelContent>
      </CircularLabel>
      <StyledFontAwesomeIcon icon={faShoppingBasket} />
    </CartButtonWrapper>
  );
};

export default CartButton;
