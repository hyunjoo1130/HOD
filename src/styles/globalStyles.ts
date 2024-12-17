import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: ${({ theme }) => theme.colors.secondaryWhite}
  }

  body {
    font-family: ${({ theme }) => theme.fonts.primaryKr};
    background-color: ${({ theme }) => theme.colors.primaryWhite};
    padding: 0;
    margin: 0;
    line-height: 1;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.fonts.primaryEng};
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
