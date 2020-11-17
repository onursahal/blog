import { createGlobalStyle } from "styled-components"
export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.50s linear;
  }
  h1,h2,h3,h4{
      color: ${({ theme }) => theme.header};
  }
  a {
      color: ${({ theme }) => theme.link};
  }
  button,span{
      color: ${({ theme }) => theme.button};
  }
  `
