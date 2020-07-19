import React, { createContext, useState } from "react";

export const StoreContext = createContext(null);

export default ({ children }) => {
  const [showCart, setCartVisibility] = useState(false);
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cartItems")) || []
  );

  const increaseQuantity = (selectedPack) => {
    if (selectedPack.quantity < 3) {
      const newCart = cartItems.map((item) => {
        if (item.selectedPack.id === selectedPack.id) {
          item.selectedPack.quantity++;
        }
        return item;
      });
      setCartItems([...newCart]);
    }
  };

  const decreaseQuantity = (selectedPack) => {
    if (selectedPack.quantity > 1) {
      const newCart = cartItems.map((item) => {
        if (item.selectedPack.id === selectedPack.id) {
          item.selectedPack.quantity--;
        }
        return item;
      });
      setCartItems([...newCart]);
      return;
    }
    removeItem(selectedPack.id);
  };

  const removeItem = (id) => {
    const cart = cartItems;
    const itemIndex = cart.map((item) => item.selectedPack.id).indexOf(id);
    cart.splice(itemIndex, 1);
    setCartItems([...cart]);
  };

  const store = {
    showCart: {
      value: showCart,
      set: setCartVisibility,
    },
    cartItems: {
      value: cartItems,
      set: setCartItems,
      increaseQuantity: increaseQuantity,
      decreaseQuantity: decreaseQuantity,
    },
  };

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};
