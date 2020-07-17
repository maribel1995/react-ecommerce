import React, { createContext, useState } from "react";

export const StoreContext = createContext(null);

export default ({ children }) => {
  const [showCart, setCartVisibility] = useState(false);

  const store = {
    showCart: {
      value: showCart,
      set: setCartVisibility,
    },
  };

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};
