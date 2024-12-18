import styled from 'styled-components';
import exhibitionBg from '../assets/Images/Home_Img/EXHIBITION.jpg';
import newsBg from '../assets/Images/Home_Img/NEWS.jpg';
import brandsBg from '../assets/Images/Home_Img/BRANDS.jpg';

// hover시, 이미지 커지는 거 구현하기
// hover시, 간단설명 텍스트 보이게끔 구현하기

const MenuBanner = () => {
  return (
    <MenuBannerContainer>
      <MenuBannerBox left="0" top="0" width="720px" height="720px">
        <MenuBannerImage backgroundImage={exhibitionBg} />
        <TitleBox height="720px">
          <span>description text</span>
          <p>exhibition</p>
        </TitleBox>
        <OpacityBox left="0" top="0" width="720px" height="720px" />
      </MenuBannerBox>
      <MenuBannerBox left="720px" top="0" width="720px" height="360px">
        <MenuBannerImage backgroundImage={newsBg} />
        <TitleBox height="360px">
          <span>description text</span>
          <p>news</p>
        </TitleBox>
        <OpacityBox left="720px" top="0" width="720px" height="360px" />
      </MenuBannerBox>
      <MenuBannerBox left="720px" bottom="0" width="720px" height="360px">
        <MenuBannerImage backgroundImage={brandsBg} />
        <TitleBox height="360px">
          <span>description text</span>
          <p>brands</p>
        </TitleBox>
        <OpacityBox left="720px" bottom="0" width="720px" height="360px" />
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
  height: 720px;
  position: relative;
  background-color: ${({ theme }) => theme.colors.primaryWhite};
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

const TitleBox = styled.div<MenuBannerBoxProps>`
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
