import React from 'react';
import styled from 'styled-components';
import ExhibitionNavigation from '../ExhibitionNavigation';

const TopBanner = () => {
  return (
    <TopBannerContainer backgroundImage={''}>
      <TopBannerContentWrapper>
        {/* navigation */}
        <ExhibitionNavigation />
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
  background-color: #ddd;

  height: 400px;
`;

const TopBannerContentWrapper = styled.div`
  padding: 45px 60px;
`;

export default TopBanner;
