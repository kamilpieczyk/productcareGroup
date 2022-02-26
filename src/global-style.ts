import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: #e5e5e5;
    font-family: Open-Sans, Helvetica, Sans-Serif;
    font-size: 16px;
  }
  button{
    cursor: pointer;
  }
  *, *::after, *::before {
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
