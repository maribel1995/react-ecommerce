import styled from "styled-components";

const CardWrapper = styled.div`
  width: 99.96%;
  margin-left: 0%;
  max-width: 100%;
  padding-left: 8px;
  padding-right: 8px;
  box-sizing: border-box;
  align-self: stretch;

  @media screen and (min-width: 768px) {
    max-width: 49.998%;
  }

  @media screen and (min-width: 1024px) {
    max-width: 33.332%;
  }
`;

const CardContent = styled.div`
  width: 100%;
  border-radius: 4px;
  box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1),
    0 0 0 1px rgba(10, 10, 10, 0.02);
  background-color: #fff;
  border: 1px solid #d1d1d1;
  text-align: center;
  margin: 0.5rem 0;
  position: relative;
`;

const CardFigureContainer = styled.div`
  padding: 1rem 0.5rem;
  border-bottom: 2px solid #ebeaea;
  margin-bottom: 0.5rem;
`;

const CardFigure = styled.figure`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 215px;
`;

const CardImg = styled.img`
  max-height: 215px;
  height: auto;
  max-width: 100%;
  flex: 0 1 auto;
`;

const CardInfo = styled.div``;

const CardHeader = styled.div``;

const CardProductVendor = styled.h3`
  color: rgb(70, 68, 69);
  font-size: 14px;
  margin-bottom: 5px;
`;

const CardProductName = styled.h3`
  color: rgb(153, 153, 153);
  font-size: 14px;
  margin-bottom: 5px;
`;

const CardPrice = styled.div`
  width: 300px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const CardOriginalPrice = styled.span`
  color: ${({discount}) => discount ? "#db2828;" : "rgb(70, 68, 69);"};
  text-transform: uppercase;
  font-size: 14px;
  text-decoration: line-through;
  margin: 3px;
`;

const CardPriceWrapper = styled.span`
`;

const CardCurrentPrice = styled.span`
  color: ${({discount}) => discount ? "#db2828;" : "rgb(70, 68, 69);"};
  text-transform: uppercase;
  font-size: 18px;
  font-weight: 700;
  margin: 3px;
`;

const CardDiscount = styled.span`
  color: #FFF;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 700;
  padding: 3px;
  margin: 3px;
  background-color: rgb(218, 40, 40);
`;

const CardButton = styled.button`
  background-color: rgb(98, 87, 78);
  color: #ffff;
  border: none;
  margin-top: 10px; 
  padding: 10px 0;
  width: 100%;
  font-size: 14px;
  text-transform: uppercase;
  font-weight: 700;
`;

export {
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
  CardButton
};
