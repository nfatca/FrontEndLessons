import styled, { css } from "styled-components";

const StyledLink = styled.a`
  /* ... */
  font-size: 2rem;
  text-decoration: none;
  &:hover {
    opacity: 0.5;
  }
  ${(props) =>
    props.secondary &&
    css`
      background-color: lightblue;
      color: crimson;
      padding: 0.3rem;
    `}
`;

export default StyledLink;
