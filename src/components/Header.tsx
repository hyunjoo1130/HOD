import styled from 'styled-components';
import { ImageContainer } from './CommonStyles';
import logo from '../assets/Images/Global_Img/logos/HOUSE OF DOJAGI.png';
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
          <p onClick={() => goToPage('exhibitions')}>exhibition</p>
          <p>news</p>
          <p>brands</p>
          <p onClick={() => goToPage('about_hod')}>about us</p>
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
  justify-content: space-around;
  align-items: center;
  gap: 40px;

  p {
    cursor: pointer;
  }
`;

export default Header;
