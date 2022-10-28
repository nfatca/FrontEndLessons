import styled from "styled-components";

export const Main = styled.main`
  width: ${({ theme }) => theme.width};
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
  background-color: #eee;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem;
  margin: 1rem auto;
  gap: 3rem;
  max-width: ${({ theme }) => theme["max-width"]};
  flex-direction: ${({ id }) => (id % 2 === 1 ? "row" : "row-reverse")};
  @media (max-width: ${({ theme }) => theme.responsive}) {
    /* flex-direction: column; */
    text-align: center;
    flex-direction: column-reverse;
  } ;
`;

export const CardImg = styled.img`
  width: 90%;
  object-fit: cover;
  margin: 20px;
  border-radius: 10px;
  @media (max-width: ${({ theme }) => theme.responsive}) {
    text-align: center;
  } ;
`;

export const CardTitle = styled.h2`
  font-weight: bolder;
  margin: 1rem 0.4rem;
`;
export const Description = styled.p`
  max-width: 500px;
  min-width: 250px;
  font-size: 1.1rem;
`;
