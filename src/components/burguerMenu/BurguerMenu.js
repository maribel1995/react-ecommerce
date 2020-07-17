import React from "react";
import { MenuButton, MenuLayer } from './BurguerMenuStyled';

const BurguerMenu = ({ displayed, onClick }) => {
  const handleOnClick = (e) => {
    onClick(e);
  };

  return (
    <MenuButton id="burguer-menu" displayed={displayed} onClick={handleOnClick}>
      <MenuLayer />
      <MenuLayer />
      <MenuLayer />
    </MenuButton>
  );
};

export default BurguerMenu;
