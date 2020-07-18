import React, { createContext, useState } from "react";

export const StoreContext = createContext(null);

export default ({ children }) => {
  const [showCart, setCartVisibility] = useState(false);
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cartItems")) || []
  );

  const store = {
    showCart: {
      value: showCart,
      set: setCartVisibility,
    },
    cartItems: {
      value: cartItems,
      set: setCartItems,
    },
  };

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};
