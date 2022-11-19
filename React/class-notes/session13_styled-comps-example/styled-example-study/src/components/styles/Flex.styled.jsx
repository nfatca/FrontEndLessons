import styled from "styled-components";

const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  text-align: center;
  margin: 2rem 3rem 2rem 2rem;
  @media (max-width: ${({ theme }) => theme.responsive}) {
    flex-direction: column;
  } ;
`;

export default Flex;
