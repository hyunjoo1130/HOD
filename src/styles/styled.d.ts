// 공통스타일 타입 정의

import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primaryWhite: string;
      secondaryWhite: string;
      black: string;
      green: string;
      gray: string;
    };
    fonts: {
      primaryEng: string;
      primaryKr: string;
      secondaryEng: string;
      fontSize: {
        small: string;
        medium: string;
        large: string;
        xLarge: string;
      };
      primaryKrWeight: {
        regular: string;
        semiBold: string;
      };
      secondaryEngWeight: {
        light: string;
        regular: string;
        bold: string;
      };
    };
  }
}
