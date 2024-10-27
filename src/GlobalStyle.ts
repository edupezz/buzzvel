import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html, body, #root {
    width: 100vw;
    height: 100vh;

    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;

    font-family: "Roboto", sans-serif;
    font-size: 1rem;
  }

`;
