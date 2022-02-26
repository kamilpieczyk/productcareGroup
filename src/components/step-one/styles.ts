import styled from "styled-components";

export const Container = styled.div`
  h1 {
    font-size: 1em;
    display: flex;
    align-items: center;
    svg {
      font-size: 1.5em;
      color: ${({ theme }) => theme.colors.darkGrey};
      margin-right: 5px;
    }
  }
  a {
    color: ${({ theme }) => theme.colors.grey};
  }
`;

export const ImptBox = styled.div`
  display: grid;
  grid-template-columns: 70% 20%;
  grid-column-gap: 10%;
`;

export const ErrorBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  color: red;
  font-weight: 600;
  padding: 20px;
`;
