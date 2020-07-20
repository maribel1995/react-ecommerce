import React, { useContext } from "react";
import { StoreContext } from "../../utils/store";
import { ItemCart } from "components";
import { formatNumber } from "helpers";
import {
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
} from "./CartStyle";
import { faShoppingBasket, faTimes } from "@fortawesome/free-solid-svg-icons";

const Cart = ({ isMobile }) => {
  const { showCart, cartItems } = useContext(StoreContext);

  const handleItem = (e) => {
    const buttonType = e.currentTarget.className;
    const itemId = e.currentTarget.parentNode.id;
    const cart = cartItems.value;
    const itemIndex = cart.map((item) => item.selectedPack.id).indexOf(itemId);

    if (buttonType.includes("minus")) {
      cartItems.decreaseQuantity(cart[itemIndex].selectedPack);
    }

    if (buttonType.includes("plus")) {
      cartItems.increaseQuantity(cart[itemIndex].selectedPack);
    }
  };

  const totalValue = () => {
    return cartItems.value
      .map((item) => {
        const { current_price, quantity } = item.selectedPack;
        return current_price * quantity;
      })
      .reduce((acm, value) => acm + value, 0);
  };

  return (
    <CartContainer showCart={showCart.value}>
      <CartWrapper showCart={showCart.value} isMobile={isMobile}>
        <CartHeader>
          <CartHeaderContent>
            <CartHeaderText>
              <StyledFontIcon icon={faShoppingBasket} />
              Carrinho
            </CartHeaderText>
            <CartCloseButton onClick={() => showCart.set(!showCart.value)}>
              <StyledFontIcon icon={faTimes} />
            </CartCloseButton>
          </CartHeaderContent>
        </CartHeader>
        <CartContent>
          {cartItems.value.map((item) => (
            <ItemCart
              key={item.selectedPack.id}
              {...item}
              onClick={handleItem}
            />
          ))}
        </CartContent>
        <CartFooter>
          <CartFooterContent>
            <CardTotalText>Total</CardTotalText>
            <CardTotalText>R${formatNumber(totalValue())}</CardTotalText>
          </CartFooterContent>
        </CartFooter>
      </CartWrapper>
    </CartContainer>
  );
};

export default Cart;
