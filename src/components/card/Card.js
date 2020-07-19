import React, { useState, useContext, useEffect } from "react";
import { Packs } from "components";
import { formatNumber, getDiscount } from "helpers";
import { StoreContext } from "store";
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
  CardPrice,
  CardOriginalPrice,
  CardPriceWrapper,
  CardCurrentPrice,
  CardDiscount,
  CardButton,
} from "./CardStyle";

const Card = ({ image, vendors, name, packs, addItem, increaseQuantity, decreaseQuantity }) => {
  const [selectedPack, setSelectedPack] = useState(packs[1]);
  const [showAddRemoveButtons, setShowAddRemoveButtons] = useState(false);
  const [quantity, setQuantity] = useState(0);
  const { cartItems } = useContext(StoreContext);
  const isPackAddToCart = cartItems.value.some((item) => item.selectedPack.id === selectedPack.id);

  useEffect(() => {
    setShowAddRemoveButtons(false);
    if(isPackAddToCart){
      setShowAddRemoveButtons(true);
      const itemIndex = cartItems.value.map((item) => item.selectedPack.id).indexOf(selectedPack.id);
      setQuantity(cartItems.value[itemIndex].selectedPack.quantity);
    }
  }, [cartItems.value]);

  const getSelectedPack = (pack) => {
    setShowAddRemoveButtons(false);
    if(isPackAddToCart){
      setShowAddRemoveButtons(true);
      const itemIndex = cartItems.value.map((item) => item.selectedPack.id).indexOf(pack.id);
      setQuantity(cartItems.value[itemIndex].selectedPack.quantity);
    }
    setSelectedPack(pack);
  };

  const handleOnClick = (e) => {
    const idButton = e.currentTarget.id;
    if(idButton && idButton === "plus"){
      increaseQuantity(selectedPack);
      return;
    }

    if(idButton && idButton === "minus"){
      decreaseQuantity(selectedPack);
      return;
    }
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
          <CardPrice>
            <CardOriginalPrice>
              R${formatNumber(selectedPack.original_price)}
            </CardOriginalPrice>
            <CardPriceWrapper>
              <CardCurrentPrice>
                R${formatNumber(selectedPack.current_price)}
              </CardCurrentPrice>
              <CardDiscount>
                {getDiscount(
                  selectedPack.current_price,
                  selectedPack.original_price
                )}
                % OFF
              </CardDiscount>
            </CardPriceWrapper>
          </CardPrice>
          <Packs packs={packs} selectedPack={getSelectedPack} />
          {showAddRemoveButtons ? (<div>
            <button id="minus" onClick={handleOnClick}>-</button>
          <div>{quantity}</div>
            <button id="plus" onClick={handleOnClick}>+</button>
          </div>) : <CardButton onClick={handleOnClick}>Adicionar ao carrinho</CardButton>}
        </CardInfo>
      </CardContent>
    </CardWrapper>
  );
};
export default Card;
