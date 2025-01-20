import styled from 'styled-components';
import { ImageContainer } from './CommonStyles';
import logo from '../assets/Images/Global_Img/logos/HOUSE OF DOJAGI.png';
import search from '../assets/icons/SEARCH.png';
import login from '../assets/icons/LOGIN.png';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const goToPage = (link: string) => {
    navigate(`/${link}`);
  };

  return (
    <HeaderContainer>
      <HeaderWrapper>
        <ImageContainer width="20%">
          <img width={'100%'} src={logo} onClick={() => navigate('/')} />
        </ImageContainer>
        <MenuBox>
          <p onClick={() => goToPage('ai_search')}>ai search</p>
          <p onClick={() => goToPage('exhibitions')}>exhibition</p>
          <p>news</p>
          <p onClick={() => goToPage('brands')}>brands</p>
          <p onClick={() => goToPage('about_us')}>about us</p>
        </MenuBox>
        <CustomerMenuBox>
          <ImageContainer width="10%">
            <img src={search} alt="검색" width="100%" />
          </ImageContainer>
          <ImageContainer width="9%">
            <img src={login} alt="로그인" width="100%" />
          </ImageContainer>
        </CustomerMenuBox>
      </HeaderWrapper>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;

  font-weight: ${({ theme }) => theme.fonts.secondaryEngWeight.light};
  text-transform: uppercase;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.7);

  z-index: 30;
`;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;

  img {
    cursor: pointer;
  }
`;

const MenuBox = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 40px;

  p {
    cursor: pointer;
  }
`;

const CustomerMenuBox = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 30px;
  padding-right: 20px;

  p {
    cursor: pointer;
  }
`;

export default Header;
