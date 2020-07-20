import React, { useState, useLayoutEffect, useContext } from "react";
import { Header, Cart } from "components";
import { Products } from "./pages";
import { StoreContext } from "store";
import { Main } from "./AppStyle";

const App = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isMobile, setIsMobile] = useState(true);
  const { showCart } = useContext(StoreContext);

  useLayoutEffect(() => {
    checkScreen();
  }, [windowWidth]);

  const checkScreen = () => {
    setIsMobile(false);
    window.addEventListener("resize", () => setWindowWidth(window.innerWidth));
    if (windowWidth < 600) {
      setIsMobile(true);
    }
  };

  return (
    <div className="app">
      <Header isMobile={isMobile} />
      <Main showCart={showCart.value} isMobile={isMobile}>
        <Products />
      </Main>
      <Cart isMobile={isMobile} />
    </div>
  );
};

export default App;
