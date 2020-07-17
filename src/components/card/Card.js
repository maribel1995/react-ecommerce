import React from "react";
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
} from "./CardStyle";

const Card = ({ image , vendors, name, }) => {
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
        </CardInfo>
      </CardContent>
    </CardWrapper>
  );
};
export default Card;
