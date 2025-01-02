import React from 'react';
import styled from 'styled-components';
import backgroundImage from '../../assets/Images/ExhibitionDetail_Img/MAIN.jpg';
import logo from '../../assets/Images/Global_Img/logos/홋2_w.png';
import ExhibitionNavigation from './ExhibitionNavigation';

const TopBanner = () => {
  return (
    <TopBannerContainer backgroundImage={backgroundImage}>
      <TopBannerContentWrapper>
        {/* navigation */}
        <ExhibitionNavigation />
        <Logo>
          <LogoImage>
            <img height="100%" src={logo} />
          </LogoImage>
        </Logo>
      </TopBannerContentWrapper>
    </TopBannerContainer>
  );
};

interface TopBannerContainerProps {
  backgroundImage: string;
}

const TopBannerContainer = styled.div<TopBannerContainerProps>`
  background-image: url(${(props) => props.backgroundImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  height: 400px;
`;

const TopBannerContentWrapper = styled.div`
  padding: 45px 60px;
`;

const Logo = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  height: 300px;
`;

const LogoImage = styled.div`
  height: 120px;
`;

export default TopBanner;
