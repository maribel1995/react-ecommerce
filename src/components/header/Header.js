import React, { useContext } from "react";
import { HeaderContainer, HeaderContent } from "./HeaderStyle";
import { BurguerMenu, CartButton } from "components";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { StoreContext } from "store";

const Header = ({ isMobile }) => {
  const { showCart } = useContext(StoreContext);

  const handleOnClick = (e) => {
    showCart.set(!showCart.value);
  };

  return (
    <HeaderContainer showCart={showCart.value}>
      <HeaderContent>
        <BurguerMenu onClick={handleOnClick} displayed={isMobile} />
        <FontAwesomeIcon icon={faSearch} />
        <CartButton onClick={handleOnClick} />
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;
