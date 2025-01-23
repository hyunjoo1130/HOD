import styled from 'styled-components';
import backgroundImage from '../../assets/Images/ExhibitionDetail_Img/MAIN.jpg';
import logo from '../../assets/Images/Global_Img/logos/홋2_w.png';
import ExhibitionNavigation from '../ExhibitionNavigation';

const TopBanner = () => {
  const pathnames = location.pathname.split('/').slice(1);
  const pathname = pathnames.slice(pathnames.length - 1);

  return (
    <TopBannerContainer backgroundImage={backgroundImage}>
      <TopBannerContentWrapper>
        {/* navigation */}
        <ExhibitionNavigation linkColor="black" myPathName={pathname[0]} />
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

  height: 465px;
`;

const TopBannerContentWrapper = styled.div`
  padding: 110px 60px 0;
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
