import React from "react";
import { MenuButton, MenuLayer } from "./BurguerMenuStyled";

const BurguerMenu = () => {
  return (
    <MenuButton id="burguer-menu">
      <MenuLayer />
      <MenuLayer />
      <MenuLayer />
    </MenuButton>
  );
};

export default BurguerMenu;
