import React, { useState } from "react";
import { Packs } from "components";
import {
  CardWrapper,
  CardContent,
  CardFigureContainer,
  CardFigure,
  CardImg,
  CardInfo,
  CardHeader,
  CardProductVendor,
  CardProductName,
  CardDiscount,
  CardDiscountText,
  CardButton,
} from "./CardStyle";

const Card = ({ image, vendors, name, packs, addItem }) => {
  const [selectedPack, setSelectedPack] = useState({});

  const getSelectedPack = (e) => {
    setSelectedPack(e);
  };

  const getDiscount = () => {
    return Math.round(
      (selectedPack.current_price / selectedPack.original_price) * 100
    );
  };

  const formatNumber = (number = 0) => {
    return number.toFixed(2).toString().replace(".", ",");
  };

  const handleOnClick = () => {
    addItem(selectedPack);
  };

  return (
    <CardWrapper>
      <CardContent>
        <CardFigureContainer>
          <CardFigure>
            <CardImg src={image} />
          </CardFigure>
        </CardFigureContainer>
        <CardInfo>
          <CardHeader>
            <CardProductVendor>{vendors[0].vendor.name}</CardProductVendor>
            <CardProductName>{name}</CardProductName>
          </CardHeader>
          <Packs packs={packs} selectedPack={getSelectedPack} />
          <CardDiscount>
            <CardDiscountText>
              <strong>Desc.:</strong> {getDiscount()}%
            </CardDiscountText>
            <CardDiscountText lineThrough>
              <strong>De:</strong> R${" "}
              {formatNumber(selectedPack.original_price)}
            </CardDiscountText>
            <CardDiscountText discount>
              <strong>Por:</strong> R${" "}
              {formatNumber(selectedPack.current_price)}
            </CardDiscountText>
          </CardDiscount>
          <CardButton onClick={handleOnClick}>Adicionar Item</CardButton>
        </CardInfo>
      </CardContent>
    </CardWrapper>
  );
};
export default Card;
