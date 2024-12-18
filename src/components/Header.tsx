import styled from 'styled-components';
import { ImageContainer } from './CommonStyles';
import logo from '../assets/Images/Global_Img/logos/HOUSE OF DOJAGI.png';

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderWrapper>
        <ImageContainer width="20%">
          <img width={'100%'} src={logo} />
        </ImageContainer>
        <MenuBox>
          <p>exhibition</p>
          <p>news</p>
          <p>brands</p>
          <p>about us</p>
        </MenuBox>
        <CustomerMenuBox>
          <p>search</p>
          <p>login</p>
        </CustomerMenuBox>
      </HeaderWrapper>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  font-family: ${({ theme }) => theme.fonts.secondaryEng};
  font-weight: ${({ theme }) => theme.fonts.secondaryEngWeight.light};
  text-transform: uppercase;
  padding: 20px;
`;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
`;

const MenuBox = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 40px;

  /* 내부의 모든 p태그에 적용될 스타일 */
  p {
    cursor: pointer;

    /* 특정 p태그만 다르게 스타일링하고 싶다면 클래스를 활용 */
    /* &.title {
      // ...
    }
    
    &:last-child {
      // ...
    } */
  }
`;

const CustomerMenuBox = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 40px;

  p {
    cursor: pointer;
  }
`;

export default Header;
