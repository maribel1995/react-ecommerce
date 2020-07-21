import React, { useEffect, useState, useContext } from "react";
import {
  PacksContainer,
  PacksTitle,
  PacksContent,
  Pack,
  PackUnities,
  PackUnitiesText,
} from "./PacksStyle";
import { StoreContext } from "store";

const Packs = ({ packs, selectedPack }) => {
  const [isSelected, setIsSelected] = useState({});
  const { products } = useContext(StoreContext);

  useEffect(() => {
    const defaultPack = packs[1];
    setIsSelected(defaultPack);
    selectedPack(defaultPack);
  }, [products.value]);

  const handleOnClick = (e) => {
    const targetId = e.currentTarget.id;
    const pack = packs.find((pack) => pack.id === targetId);
    setIsSelected(pack);
    selectedPack(pack);
  };

  const isPackSelected = (packId) => isSelected.id === packId;

  return (
    <PacksContainer>
      <PacksTitle>Escolha o Pack</PacksTitle>
      <PacksContent>
        {packs.map((pack) => (
          <Pack
            key={pack.id}
            id={pack.id}
            isSelected={isPackSelected(pack.id)}
            onClick={handleOnClick}
          >
            <PackUnities isSelected={isPackSelected(pack.id)}>
              {pack.unities}
            </PackUnities>
            <PackUnitiesText isSelected={isPackSelected(pack.id)}>
              unid.
            </PackUnitiesText>
          </Pack>
        ))}
      </PacksContent>
    </PacksContainer>
  );
};

export default Packs;
