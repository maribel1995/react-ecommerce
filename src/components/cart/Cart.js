import React, { useContext } from "react";
import { StoreContext } from "../../utils/store";
import { ItemCart } from "components";
import styled from "styled-components";

const CartWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: ${({ showCart }) => (showCart ? "100%" : 0)};
  height: 100vh;
  background-color: #fff;
  opacity: ${({ showCart }) => (showCart ? 1 : 0)};
  transition: width 0.5s ease-in, opacity 0.5s ease-in;
`;

const Cart = () => {
  const { showCart, cartItems } = useContext(StoreContext);

  const handleItem = (e) => {
    const buttonType = e.currentTarget.id;
    const itemId = e.currentTarget.parentNode.id;
    const cart = cartItems.value;
    const itemIndex = cart.map((item) => item.selectedPack.id).indexOf(itemId);

    if (buttonType === "minus") {
      cartItems.decreaseQuantity(cart[itemIndex].selectedPack);
    }

    if (buttonType === "plus") {
      cartItems.increaseQuantity(cart[itemIndex].selectedPack);
    }
  };

  return (
    <CartWrapper showCart={showCart.value}>
      <button onClick={() => showCart.set(!showCart.value)}> X</button>
      {cartItems.value.map((item) => (
        <ItemCart key={item.selectedPack.id} {...item} onClick={handleItem} />
      ))}
    </CartWrapper>
  );
};

export default Cart;
