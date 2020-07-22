import React, { useState, useContext, useEffect } from "react";
import { Packs } from "components";
import { formatNumber, getDiscount, unitPrice } from "helpers";
import { StoreContext } from "store";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  CardWrapper,
  CardContent,
  CardFigureContainer,
  CardFigure,
  CardImg,
  CardProductVendor,
  CardProductName,
  CardPrice,
  CardOriginalPrice,
  CardDiv,
  CardCurrentPrice,
  CardDiscount,
  AddCartButton,
  QuantityWrapper,
  QuantityButton,
  QuantityText,
  UnityWrapper,
  UnityText,
  UnityPrice,
} from "./CardStyle";

const Card = ({
  image,
  vendors,
  name,
  packs,
  addItem,
  increaseQuantity,
  decreaseQuantity,
}) => {
  const [selectedPack, setSelectedPack] = useState(packs[1]);
  const [showAddRemoveButtons, setShowAddRemoveButtons] = useState(false);
  const [quantity, setQuantity] = useState(0);
  const { cartItems } = useContext(StoreContext);

  useEffect(() => {
    const product = cartItems.value[itemIndex(selectedPack)];
    if (product) {
      setSelectedPack(product.selectedPack);
      handleQuantity(product.selectedPack);
      return;
    }
    handleQuantity(selectedPack);
  }, [cartItems.value]);

  const getSelectedPack = (pack) => {
    const product = cartItems.value[itemIndex(pack)];
    if (product) {
      setSelectedPack(product.selectedPack);
      handleQuantity(product.selectedPack);
      return;
    }
    handleQuantity(pack);
    setSelectedPack(pack);
  };

  const itemIndex = (pack) => {
    return cartItems.value.map((item) => item.selectedPack.id).indexOf(pack.id);
  };

  const handleOnClick = (e) => {
    const buttonType = e.currentTarget.className;

    if (buttonType.includes("plus")) {
      increaseQuantity(selectedPack);
      return;
    }

    if (buttonType.includes("minus")) {
      decreaseQuantity(selectedPack);
      return;
    }
    addItem(selectedPack);
  };

  const handleQuantity = (pack) => {
    setShowAddRemoveButtons(false);
    const isPackAddToCart = cartItems.value.some(
      (item) => item.selectedPack.id === pack.id
    );

    if (isPackAddToCart) {
      setShowAddRemoveButtons(true);
      const itemIndex = cartItems.value
        .map((item) => item.selectedPack.id)
        .indexOf(pack.id);
      setQuantity(cartItems.value[itemIndex].selectedPack.quantity);
    }
  };

  const renderQuantityButtons = () => (
    <QuantityWrapper>
      <QuantityButton className="minus" onClick={handleOnClick}>
        <FontAwesomeIcon icon={faMinus} />
      </QuantityButton>
      <QuantityText>{quantity}</QuantityText>
      <QuantityButton className="plus" onClick={handleOnClick}>
        <FontAwesomeIcon icon={faPlus} />
      </QuantityButton>
    </QuantityWrapper>
  );

  return (
    <CardWrapper>
      <CardContent>
        <CardFigureContainer>
          <CardFigure>
            <CardImg src={image} />
          </CardFigure>
        </CardFigureContainer>
        <CardDiv>
          <CardDiv>
            <CardProductVendor>{vendors[0].vendor.name}</CardProductVendor>
            <CardProductName>{name}</CardProductName>
          </CardDiv>
          <CardPrice>
            <CardOriginalPrice>
              R${formatNumber(selectedPack.original_price)}
            </CardOriginalPrice>
            <CardDiv>
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
            </CardDiv>
          </CardPrice>
          <Packs packs={packs} selectedPack={getSelectedPack} />
          <UnityWrapper>
            <UnityText>A unidade sai por</UnityText>
            <UnityPrice>
              R$
              {formatNumber(
                unitPrice(selectedPack.unities, selectedPack.current_price)
              )}
            </UnityPrice>
          </UnityWrapper>
          {showAddRemoveButtons ? (
            renderQuantityButtons()
          ) : (
            <AddCartButton onClick={handleOnClick}>
              Adicionar ao carrinho
            </AddCartButton>
          )}
        </CardDiv>
      </CardContent>
    </CardWrapper>
  );
};
export default Card;
