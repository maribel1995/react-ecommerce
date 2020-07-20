import styled from "styled-components";

const ItemWrapper = styled.div`
  margin: 0 15px;
`;

const ItemContent = styled.div`
  width: 100%;
  border-radius: 4px;
  box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1),
    0 0 0 1px rgba(10, 10, 10, 0.02);
  background-color: #fff;
  border: 1px solid #d1d1d1;
  margin: 0.5rem 0;
  padding: 0.5rem;
  display: flex;
  box-sizing: border-box;
`;

const ItemFigure = styled.figure`
  height: 100px;
`;

const ItemImg = styled.img`
  max-height: 100px;
  max-width: 100%;
`;

const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
`;

const ItemTitle = styled.h3``;

const ItemDetails = styled.div`
  color: rgb(153, 153, 153);
`;

const QuantityWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 250px;
`;

const QuantityButton = styled.button`
  background-color: #fff;
  color: rgb(71, 68, 69);
  border: none;
  padding: 10px 0;
  width: 50px;
  font-size: 14px;
  font-weight: 700;
`;

const QuantityText = styled.div`
  color: rgb(71, 68, 69);
  border: 2px solid #e9e8e8;
  margin: 0 10px;
  padding: 10px 0;
  width: 150px;
  font-size: 14px;
  font-weight: 700;
  text-align: center;
`;

export {
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
};
