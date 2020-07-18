import React, { useContext } from "react";
import { StoreContext } from "store";
import {
  CartButtonWrapper,
  CircularLabel,
  LabelContent,
  StyledFontAwesomeIcon,
} from "./CartButtonStyle";
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";

const CartButton = ({ onClick }) => {
  const { cartItems } = useContext(StoreContext);

  const handleOnClick = (e) => {
    onClick(e);
  };

  return (
    <CartButtonWrapper id="CartButton" onClick={handleOnClick}>
      <CircularLabel displayed={cartItems.value.length > 0}>
        <LabelContent>{cartItems.value.length}</LabelContent>
      </CircularLabel>
      <StyledFontAwesomeIcon icon={faShoppingBasket} />
    </CartButtonWrapper>
  );
};

export default CartButton;
