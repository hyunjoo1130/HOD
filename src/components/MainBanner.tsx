import React from 'react';
import styled from 'styled-components';
import mainBannerImage from '../assets/Images/Home_Img/MAIN BANNER.jpg';
import logo from '../assets/Images/Global_Img/logos/홋2_w.png';
import { ImageContainer } from './CommonStyles';

const MainBanner = () => {
  return (
    <MainBannerContainer image={mainBannerImage}>
      <ImageContainer width="10%">
        <img width={'100%'} src={logo} />
      </ImageContainer>
    </MainBannerContainer>
  );
};

interface MainBannerContainerProps {
  image?: string;
}

const MainBannerContainer = styled.div<MainBannerContainerProps>`
  width: 100%;
  height: 900px;
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export default MainBanner;
