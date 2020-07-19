import React from "react";
import { formatNumber, getDiscount } from "helpers";
import {
  ItemWrapper,
  ItemContent,
  ItemFigure,
  ItemImg,
  ItemInfo,
  ItemTitle,
  ItemDetails,
  RemoveButton,
  ItemPrice,
} from "./ItemCartStyle";

const ItemCart = ({ image, name, selectedPack, onClick }) => {

  const handleOnClick = (e) => {
    onClick(e);
  };

  return (
    <ItemWrapper>
      <ItemContent>
        <ItemFigure>
          <ItemImg src={image} />
        </ItemFigure>
        <ItemInfo>
          <ItemTitle>{name}</ItemTitle>
          <ItemDetails>
            R${formatNumber(selectedPack.current_price)} | R$
            {formatNumber(selectedPack.original_price)} |{" "}
            {getDiscount(
              selectedPack.current_price,
              selectedPack.original_price
            )}
            %
          </ItemDetails>
          <div id={selectedPack.id}>
            <RemoveButton id="minus" onClick={handleOnClick}>Remover</RemoveButton>
            <div>quantidade: {selectedPack.quantity}</div>
            <RemoveButton id="plus" onClick={handleOnClick}>Adicionar</RemoveButton>
          </div>
        </ItemInfo>
        <ItemPrice></ItemPrice>
      </ItemContent>
    </ItemWrapper>
  );
};

export default ItemCart;
