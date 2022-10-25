import styled from "styled-components";

export const Button = styled.button`
  /* background-color: hotpink; */
  background-color: ${(props) => (props.primary ? "white" : "purple")};
  /* color: white; */
  /* color: ${(props) => (props.primary ? "purple" : "white")}; */
  color: ${({ primary }) => (primary ? "purple" : "white")};
  cursor: pointer;
  padding: 1rem 2rem;
  width: 7rem;
  border-radius: 0.5rem;
  border-color: purple;
  font-size: 1.1rem;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  &:hover {
    transform: scale(0.97);
  }
`;

export const TomatoButton = styled(Button)`
  background-color: ${(props) => (props.primary ? "white" : "tomato")};
  color: ${({ primary }) => (primary ? "tomato" : "white")};
  border: 1px solid tomato;
`;
