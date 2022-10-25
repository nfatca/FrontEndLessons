import styled from "styled-components";

const Container = styled.div`
  background-color: ${({ bg }) => bg || "white"};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem;
`;

export default Container;
