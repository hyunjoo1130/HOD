import styled from 'styled-components';
import exhibitionBg from '../../assets/Images/Home_Img/EXHIBITION.jpg';
import newsBg from '../../assets/Images/Home_Img/NEWS.jpg';
import brandsBg from '../../assets/Images/Home_Img/BRANDS.jpg';

const MenuBanner = () => {
  return (
    <MenuBannerContainer>
      <MenuBannerBox left="0" top="0" width="50%" height="960px">
        <MenuBannerImage backgroundImage={exhibitionBg} />
        <Title height="960px">
          <span>전시회 자세히 보기</span>
          <p>exhibition</p>
        </Title>
        <OpacityBox left="0" top="0" width="100%" height="960px" />
      </MenuBannerBox>
      <MenuBannerBox left="50%" top="0" width="50%" height="480px">
        <MenuBannerImage backgroundImage={newsBg} />
        <Title height="480px">
          <span>최신 소식 확인하기</span>
          <p>news</p>
        </Title>
        <OpacityBox left="960px" top="0" width="960px" height="480px" />
      </MenuBannerBox>
      <MenuBannerBox left="50%" bottom="0" width="50%" height="480px">
        <MenuBannerImage backgroundImage={brandsBg} />
        <Title height="480px">
          <span>추천 브랜드 살펴보기</span>
          <p>brands</p>
        </Title>
        <OpacityBox left="960px" bottom="0" width="960px" height="480px" />
      </MenuBannerBox>
    </MenuBannerContainer>
  );
};

interface MenuBannerBoxProps {
  left?: string;
  top?: string;
  bottom?: string;

  width?: string;
  height?: string;
  backgroundImage?: string;
}

const MenuBannerContainer = styled.div`
  width: 100%;
  height: 960px;
  position: relative;
`;

const OpacityBox = styled.div<MenuBannerBoxProps>`
  position: absolute;
  left: 0;
  top: ${(props) => props.top};
  bottom: ${(props) => props.bottom};

  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: ${({ theme }) => theme.colors.primaryWhite};
  opacity: 0;
`;

const MenuBannerImage = styled.div<MenuBannerBoxProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.backgroundImage});
  background-size: cover;
  background-position: center;
  transition: transform 0.3s ease;
`;

const Title = styled.div<MenuBannerBoxProps>`
  position: relative;
  z-index: 1;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  height: ${(props) => props.height};

  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.primaryWhite};
  padding: 15px 20px;
`;

const MenuBannerBox = styled.div<MenuBannerBoxProps>`
  position: absolute;
  left: ${(props) => props.left};
  top: ${(props) => props.top};
  bottom: ${(props) => props.bottom};

  max-width: 960px;
  width: ${(props) => props.width};
  height: ${(props) => props.height};

  overflow: hidden;
  cursor: pointer;

  p {
    font-weight: ${({ theme }) => theme.fonts.secondaryEngWeight.regular};
    font-size: 36px;
  }

  span {
    opacity: 0;
    color: ${({ theme }) => theme.colors.black};
    font-weight: ${({ theme }) => theme.fonts.secondaryEngWeight.regular};
    margin-bottom: 12px;
  }

  &:hover {
    ${MenuBannerImage} {
      transform: scale(1.15);
    }

    p {
      color: ${({ theme }) => theme.colors.black};
      transition: 0.3s;
    }

    span {
      opacity: 1;
      transition: 0.3s;
    }

    ${OpacityBox} {
      opacity: 0.4;
      transition: 0.3s;
    }
  }
`;

export default MenuBanner;
