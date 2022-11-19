import styled from "styled-components";

const FooterDiv = styled.footer`
  background: ${({ theme }) => theme.color.footer};
`;

export default FooterDiv;

export const FooterContent = styled.div`
  max-width: ${({ theme }) => theme["max-width"]};
  margin: auto;
`;

export const FooterLogo = styled.img`
  width: 320px;
  margin: 1rem auto;
  @media (max-width: ${({ theme }) => theme.responsive}) {
    display: block;
    width: 90%;
  } ;
`;

export const FooterFlex = styled.div`
  display: flex;
  justify-content: space-between;
  ul {
    list-style-type: none;
  }
  li {
    margin-bottom: 1rem;
    padding: 0 0.4rem;
  }
  @media (max-width: ${({ theme }) => theme.responsive}) {
    flex-direction: column;
    text-align: center;
    ul {
      padding: 1.8rem;
    }
  } ;
`;

export const SocialIcons = styled(FooterFlex)`
  align-items: center;
  a {
    color: ${({ theme }) => theme.color.header};
    border: 1px solid white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    margin: 0.7rem;
    padding: 0.5rem;
  }
  @media (max-width: ${({ theme }) => theme.responsive}) {
    flex-direction: row;
    justify-content: center;
    margin-bottom: 1rem;
  } ;
`;
