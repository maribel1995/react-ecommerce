import styled from "styled-components";

const MenuLayer = styled.span`
  display: block;
  width: 21px;
  height: 2px;
  border-radius: 1px;
  background-color: #4d54ff;
  margin-top: 5px;
`;
const MenuButton = styled.button`
    display: ${({ displayed }) => (displayed ? "block;" : "none;")}
    outline: none;
    border: none;
    background-color: unset;
  `;

export { MenuLayer, MenuButton };
