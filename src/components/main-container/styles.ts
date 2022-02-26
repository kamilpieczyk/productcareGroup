import styled from "styled-components";

export const Container = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContentBox = styled.div<{ isVisible: boolean }>`
  background-color: ${({ theme }) => theme.colors.white};
  border: 2px solid ${({ theme }) => theme.colors.yellow};
  padding: 15px;
  position: relative;
  display: ${({ isVisible }) => (isVisible ? "block" : "none")};
`;
