import { Link } from "react-router-dom";
import styled from "styled-components";
import Flex from "../globalStyles/Flex.style";

export const Nav = styled(Flex)`
  padding: 1rem 1.5rem;
  background-color: rgba(0, 173, 181, 0.5);
`;

export const Brand = styled(Link)`
  color: ${({ theme }) => theme.colors.mainColor};
  text-decoration: none;
  font-weight: 800;
  font-size: 2rem;
  &:hover {
    color: ${({ theme }) => theme.colors.logoColor};
    font-weight: bold;
  }
`;

export const Menu = styled(Flex)`
  @media (max-width: ${({ theme }) => theme.screens.lg}) {
    /* display: none; */
    flex-direction: column;
    width: 100%;
    max-height: ${({ isOpen }) => (isOpen ? "400px" : "0")};
    overflow: hidden;
  }
`;

export const MenuLink = styled(Link)`
  text-align: center;
  padding: 1rem 2rem;
  cursor: pointer;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.linkColor};
  transition: all 0.3s ease-in;

  &:hover {
    color: ${({ theme }) => theme.colors.mainColor};
    font-weight: bold;
  }
  @media (max-width: ${({ theme }) => theme.screens.lg}) {
    width: 100%;
    border-bottom: 2px solid ${({ theme }) => theme.colors.mainColor};
  }
`;

export const Hamburger = styled.div`
  display: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.mainColor};
  @media (max-width: ${({ theme }) => theme.screens.lg}) {
    display: block;
  }
`;
