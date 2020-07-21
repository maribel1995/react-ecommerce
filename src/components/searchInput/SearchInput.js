import React from "react";
import {
  SearchInputContainer,
  Input,
  StyledFontIcon,
} from "./SearchInputStyle";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchInput = ({ type, onChange }) => {
  const handleOnChange = (e) => {
    onChange(e);
  };

  return (
    <SearchInputContainer>
      <StyledFontIcon icon={faSearch} />
      <Input
        name={type}
        required
        type="text"
        placeholder="Pesquise sua bebida favorita"
        onChange={(e) => handleOnChange(e)}
      />
    </SearchInputContainer>
  );
};

export default SearchInput;
