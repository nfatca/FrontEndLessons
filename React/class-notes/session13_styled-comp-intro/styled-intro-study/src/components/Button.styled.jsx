import styled from "styled-components";

export const Button = styled.button`
  /* background-color: hotpink; */
  background-color: ${(props) => (props.primary ? "white" : "red")};
  color: ${(props) => (props.primary ? "red" : "white")};
  font-size: xx-large;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  cursor: pointer;
  width: 17rem;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  border-color: red;
  &:active {
    transform: scale(0.95);
  }
`;

export const TomatoButton = styled(Button)`
  background-color: ${({ primary }) => (primary ? "tomato" : "white")};
  color: ${({ primary }) => (primary ? "white" : "tomato")};
  border-color: tomato;
`;
