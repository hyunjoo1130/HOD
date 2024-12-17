// 공통스타일(디자인시스템) 설정

import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
  // ${({theme}) => theme.colors.컬러이름}
  colors: {
    primaryWhite: '#fff',
    secondaryWhite: '#f2f2f2',
    black: '#000',
    green: '#a3b8a5',
    gray: '#898989',
  },
  // 폰트는 확정되면 수정하기
  fonts: {
    // ${({theme}) => theme.fonts.폰트이름}
    primaryEng: 'Toppan Bunkyu Mincho',
    primaryKr: 'Eulyoo1945',
    secondaryEng: 'Helvetica',
    fontSize: {
      small: '12px',
      medium: '16px',
      large: '20px',
    },
    fontWeight: {
      light: '300',
      normal: '400',
      bold: '700',
    },
  },
};

export default theme;
