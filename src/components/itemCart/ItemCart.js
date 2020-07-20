import React from "react";
import { formatNumber, getDiscount } from "helpers";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  ItemWrapper,
  ItemContent,
  ItemFigure,
  ItemImg,
  ItemInfo,
  ItemTitle,
  ItemDetails,
  QuantityWrapper,
  QuantityButton,
  QuantityText,
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
          <QuantityWrapper id={selectedPack.id}>
            <QuantityButton className="minus" onClick={handleOnClick}>
              <FontAwesomeIcon icon={faMinus} />
            </QuantityButton>
            <QuantityText>{selectedPack.quantity}</QuantityText>
            <QuantityButton className="plus" onClick={handleOnClick}>
              <FontAwesomeIcon icon={faPlus} />
            </QuantityButton>
          </QuantityWrapper>
        </ItemInfo>
      </ItemContent>
    </ItemWrapper>
  );
};

export default ItemCart;
