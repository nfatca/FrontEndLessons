import React from "react";
import {
  Button,
  FoodInput,
  FormContainer,
  HeaderContainer,
  MainHeader,
  Select,
} from "./Header.style";

const Header = ({ setQuery }) => {
  return (
    <HeaderContainer>
      <MainHeader>Recipe App</MainHeader>
      <FormContainer>
        <FoodInput
          type="text"
          placeholder="Search"
          onChange={(e) => setQuery(e.target.value)}
        />
        <Button type="submit">Search</Button>

        <Select></Select>
      </FormContainer>
    </HeaderContainer>
  );
};

export default Header;
