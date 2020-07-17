import React, { useState, useLayoutEffect } from "react";
import { Header, Cart } from "components";

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
      <Cart />
    </>
  );
};

export default App;
