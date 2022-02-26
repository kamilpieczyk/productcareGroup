import styled from "styled-components";

const Title = styled.h1`
  font-size: 1em;
  display: flex;
  align-items: center;
  svg {
    font-size: 1.5em;
    color: ${({ theme }) => theme.colors.darkGrey};
    margin-right: 5px;
  }
`;

export default Title;
