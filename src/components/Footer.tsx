import React from 'react';
import styled from 'styled-components';
import { ImageContainer } from './CommonStyles';
import logo from '../assets/Images/Global_Img/logos/HOUSE OF DOJAGI.png';
import meta from '../assets/icons/meta.png';
import instagram from '../assets/icons/instagram.png';
import twitter from '../assets/icons/twitter.png';
import linkedin from '../assets/icons/linkedin.png';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();
  const SNSIcons = [meta, instagram, twitter, linkedin];

  const goToPage = (link: string) => {
    navigate(`/${link}`);
  };

  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterTop>
          <ImageContainer width="20%">
            <img width="100%" src={logo} />
          </ImageContainer>
          <MenuBox>
            <p onClick={() => goToPage('exhibitions')}>exhibition</p>
            <p>news</p>
            <p>brands</p>
            <p onClick={() => goToPage('about_us')}>about us</p>
          </MenuBox>
          <SnsIcons>
            {SNSIcons.map((icon, i) => {
              return (
                <ImageContainer
                  key={i}
                  width="20px"
                  style={{ height: '20px', textAlign: 'center' }}
                >
                  <img
                    width="auto"
                    height="100%"
                    src={icon}
                    alt={icon}
                    key={i}
                  />
                </ImageContainer>
              );
            })}
          </SnsIcons>
        </FooterTop>
        <Divider />
        <FooterBottom>
          <CopyRight>2024 HOUSE OF DOJAGI. All right reserved.</CopyRight>
          <Policy>
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
            <p>Cookies Settings</p>
          </Policy>
        </FooterBottom>
      </FooterWrapper>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  padding: 150px 40px 120px;
  background: ${({ theme }) => theme.colors.secondaryWhite};
  font-weight: ${({ theme }) => theme.fonts.secondaryEngWeight.light};
`;

const FooterWrapper = styled.div``;

const FooterTop = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
`;

const MenuBox = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 40px;

  text-transform: uppercase;

  p {
    cursor: pointer;
  }
`;

const SnsIcons = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: flex-end;
  align-items: center;
  gap: 20px;
  width: 20%;

  img {
    cursor: pointer;
  }
`;

const Divider = styled.div`
  height: 1px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.black};

  padding-top: 70px;
  margin-bottom: 30px;
`;

const FooterBottom = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;

  width: 60%;
  margin: 0 auto;
`;

const CopyRight = styled.p``;

const Policy = styled.div`
  display: flex;
  flex-wrap: nowrap;
  gap: 20px;

  p {
    text-decoration: underline;
    cursor: pointer;
  }
`;

export default Footer;
