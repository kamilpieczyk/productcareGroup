import styled from "styled-components";

export const Container = styled.div`
  a {
    color: ${({ theme }) => theme.colors.grey};
  }
`;

export const ImptBox = styled.div`
  display: grid;
  grid-template-columns: 70% 20%;
  grid-column-gap: 10%;
`;
