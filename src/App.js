import React, { useState, useLayoutEffect } from "react";
import { Header, Cart } from "components";
import { Products } from "./pages";

const App = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isMobile, setIsMobile] = useState(true);

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
    <>
      <Header isMobile={isMobile} />
      <Products/>
      <Cart />
    </>
  );
};

export default App;
