import { Link } from "react-router-dom";
import styled from "styled-components";
import Flex from "../globalStyles/Flex.style";

export const Nav = styled(Flex)`
  padding: 1rem;
`;

export const Brand = styled(Link)`
  color: ${({ theme }) => theme.colors.logoColor};
`;
