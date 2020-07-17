import React, { useContext } from "react";
import { StoreContext } from "../../utils/store";
import styled from "styled-components";

const CartWrapper = styled.div`
  position: absolute;
  top: 0;
  right:0;
  width: ${({ showCart }) => showCart ?  '100%' : 0};
  height: 100vh;
  background-color: #fff;
  opacity: ${({ showCart }) => showCart ? 1 : 0};
  transition: width 0.5s ease-in 0.3s, opacity 0.5s ease-in 0.3s;
`;

const Cart = () => {
  const { showCart } = useContext(StoreContext);
  return (
    <CartWrapper showCart={showCart.value}>
      Cart
      <button onClick={() => showCart.set(!showCart.value)}> X</button>
    </CartWrapper>
  );
};

export default Cart;
