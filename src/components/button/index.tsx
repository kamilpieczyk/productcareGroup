import styled from "styled-components";

const Button = styled.button`
  border: none;
  background-color: ${({ theme }) => theme.colors.dargGrey};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 5px;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  svg {
    margin-right: 3px;
    font-size: 1.4em;
  }
`;

export default Button;
