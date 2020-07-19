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
  display: flex;
`;

const ItemFigure = styled.figure`
  height: 100px;
`;

const ItemImg = styled.img`
  max-height: 100px;
  max-width: 100%;
`;

const ItemInfo = styled.div`
  

`;

const ItemTitle = styled.h3`
  
`;

const ItemDetails = styled.div`
  
`;


const RemoveButton = styled.button`
  color: #fff;
  border: none;
  margin: 0 10px; 
  padding: 6px;
  font-size: 14px;
  font-weight: 700;
  background-color: rgb(98, 87, 78);
  text-transform: uppercase;
`;

const ItemPrice = styled.div`
  
`;

export {
    ItemWrapper,
    ItemContent,
    ItemFigure,
    ItemImg,
    ItemInfo,
    ItemTitle,
    ItemDetails,
    RemoveButton,
    ItemPrice
};
