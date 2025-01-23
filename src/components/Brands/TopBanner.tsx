import styled from 'styled-components';
import ExhibitionNavigation from '../ExhibitionNavigation';
import backgroundImage from '../../assets/Images/Brands_Img/BANNER.jpg';

const TopBanner = () => {
  return (
    <TopBannerContainer backgroundImage={backgroundImage}>
      <TopBannerContentWrapper>
        {/* navigation */}
        <ExhibitionNavigation linkColor="white" />
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

  height: 465px;
`;

const TopBannerContentWrapper = styled.div`
  padding: 110px 60px 0;
`;

export default TopBanner;
