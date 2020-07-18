import styled from "styled-components";

const PacksContainer = styled.div`
  display: inline-block;
  background-color: rgb(218, 113, 146, 0.3);
  margin: 15px auto;
  padding: 10px 0;
  width: 100%;
`;

const PacksTitle = styled.h3`
  color: rgb(70, 68, 69);
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 700;
`;

const PacksContent = styled.div`
  margin: 0 auto;
  width: 200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
`;

const Pack = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 100rem;
  border: 2px solid rgb(218, 113, 146);
  background-color: ${({isSelected}) => isSelected ? "rgb(218, 113, 146);": "#ffff;" };
  width: 60px;
  height: 60px;
`;

const PackUnities = styled.div`
  font-size: 24px;
  font-weight: 700;
  color: ${({isSelected}) => isSelected ? "#ffff;": "rgb(218, 113, 146);"};
`;
const PackUnitiesText = styled.div`
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 700;
  color: ${({isSelected}) => isSelected ? "#ffff;": "rgb(218, 113, 146);"};
`;

export {
  PacksContainer,
  PacksTitle,
  PacksContent,
  Pack,
  PackUnities,
  PackUnitiesText,
};
