import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Brand, Hamburger, Menu, MenuLink, Nav } from "./Navbar.style";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Nav justify="space-between" wrap="wrap">
        <Brand to="/">
          <i>Recipe</i>
        </Brand>
        <Hamburger onClick={() => setIsOpen(!isOpen)}>
          <GiHamburgerMenu />
        </Hamburger>
        <Menu isOpen={isOpen} onClick={() => setIsOpen(false)}>
          <MenuLink to="/">Home</MenuLink>
          <MenuLink to="about">About</MenuLink>
          <MenuLink to="register">Register</MenuLink>
          <MenuLink to="logout">Logout</MenuLink>
        </Menu>
      </Nav>
    </>
  );
};

export default Navbar;
