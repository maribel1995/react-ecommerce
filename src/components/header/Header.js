import React, { useContext } from "react";
import { HeaderContainer, HeaderContent, HeaderLogo } from "./HeaderStyle";
import { BurguerMenu, CartButton, SearchInput } from "components";
import { StoreContext } from "store";
import { logo } from "assets";
import { normalizeString, buildSearchRegex } from "helpers";

const Header = ({ isMobile }) => {
  const { showCart, products } = useContext(StoreContext);

  const handleOnClick = () => {
    showCart.set(!showCart.value);
  };

  const handleOnChange = (e) => {
    const value = e.target.value;
    if (value.length < 1) {
      products.reset();
      return;
    }

    if (value.length > 3) {
      const regex = buildSearchRegex(value);
      console.log(regex);
      const filtredProducts = products.value.filter((p) =>
        regex.test(normalizeString(p.name))
      );
      products.set(filtredProducts);
      return;
    }

    products.reset();
  };

  const renderMobile = () => (
    <HeaderContainer showCart={showCart.value}>
      <HeaderContent>
        <BurguerMenu />
        <HeaderLogo src={logo} />
        <CartButton onClick={handleOnClick} />
      </HeaderContent>
      <SearchInput onChange={handleOnChange} />
    </HeaderContainer>
  );

  const renderDesktop = () => (
    <HeaderContainer showCart={showCart.value}>
      <HeaderContent>
        <HeaderLogo src={logo} />
        <SearchInput onChange={handleOnChange} />
        <CartButton onClick={handleOnClick} />
      </HeaderContent>
    </HeaderContainer>
  );

  return isMobile ? renderMobile() : renderDesktop();
};

export default Header;
