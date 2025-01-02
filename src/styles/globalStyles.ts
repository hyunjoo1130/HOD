import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: ${({ theme }) => theme.fonts.secondaryEng};
    background-color: ${({ theme }) => theme.colors.primaryWhite};
    padding: 0;
    margin: 0 auto;
    line-height: 1;
    max-width: 1920px;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.fonts.secondaryEng};
  }

  ol, ul {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default GlobalStyles;
