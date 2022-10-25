import styled from "styled-components";

const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.colors.header};
  padding: 4rem 0rem;
`;

export const Logo = styled.img`
  width: 300px;
  padding: 2rem;
`;
export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: ${({ theme }) => theme.responsive}) {
    flex-direction: column;
  }
`;
export const Image = styled(Logo)`
  @media (max-width: ${({ theme }) => theme.responsive}) {
    margin: 2rem 0;
  }
`;

export default StyledHeader;
