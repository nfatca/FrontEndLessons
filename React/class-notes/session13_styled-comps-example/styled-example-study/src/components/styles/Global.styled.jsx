import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body{
    background: ${({ theme }) => theme.colors.body};
    color: "#00252e";
    font-size: 1.1rem;
}

`;
