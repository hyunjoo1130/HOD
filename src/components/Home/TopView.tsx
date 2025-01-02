import styled from 'styled-components';
import poster1 from '../../assets/Images/Home_Img/TOP VIEW 1.jpg';
import poster2 from '../../assets/Images/Home_Img/TOP VIEW 2.jpg';
import poster3 from '../../assets/Images/Home_Img/TOP VIEW 3.jpg';
import poster4 from '../../assets/Images/Home_Img/TOP VIEW 4.jpg';
import poster5 from '../../assets/Images/Home_Img/TOP VIEW 5.jpg';
import { useState } from 'react';

const TopView = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [hoverHistory, setHoverHistory] = useState<number[]>([]);
  const posterImg = [poster1, poster2, poster3, poster4, poster5];

  const handleMouseEnter = (index: number) => {
    const newHistory = hoverHistory.filter((i) => i !== index);

    setHoverHistory([index, ...newHistory].slice(0, 5));
    setActiveIndex(index);
  };

  const getZIndex = (index: number) => {
    const historyIndex = hoverHistory.indexOf(index);
    if (historyIndex !== -1) {
      return 5 - historyIndex;
    }

    // 기본 z-index 값
    switch (index) {
      case 0:
        return 1;
      case 1:
        return 2;
      case 2:
        return 5;
      case 3:
        return 4;
      case 4:
        return 3;
      // default:
      //   return 1;
    }
  };

  const getTransform = (index: number) => {
    const zIndex = getZIndex(index);
    // hover된 경우의 transform
    if (hoverHistory.includes(index)) {
      switch (zIndex) {
        case 5: // 가장 최근에 hover된 카드
          return 'translate3d(0, 0, 0) scale3d(1.1, 1.1, 1)';
        case 4:
          return 'translate3d(0, 0, 0) scale3d(1, 1, 1)';
        case 3:
          return 'translate3d(0, 0, 0) scale3d(0.90, 0.90, 1)';
        case 2:
          return 'translate3d(0, 0, 0) scale3d(0.80, 0.80, 1)';
        case 1:
          return 'translate3d(0, 0, 0) scale3d(0.70, 0.70, 1)';
      }
    }

    // 기본 transform 값
    switch (index) {
      case 0:
        return 'translate3d(0, 0, 0) scale3d(0.90, 0.90, 1)';
      case 1:
        return 'translate3d(0, 0, 0) scale3d(1, 1, 1)';
      case 2:
        return 'translate3d(0, 0, 0) scale3d(1.1, 1.1, 1)';
      case 3:
        return 'translate3d(0, 0, 0) scale3d(1, 1, 1)';
      case 4:
        return 'translate3d(0, 0, 0) scale3d(0.90, 0.90, 1)';
      // default:
      //   return 'translate3d(0, 0, 0) scale3d(1, 1, 1)';
    }
  };

  return (
    <TopViewContainer>
      <Title>
        <h1>top view</h1>
        <p>인기 콘텐츠 : 많이 본 뉴스 및 전시</p>
      </Title>
      <Posterwrapper>
        {posterImg.map((img, i) => {
          return (
            <PosterCard
              backgroundImage={img}
              key={i}
              style={{
                zIndex: getZIndex(i),
                transform: getTransform(i),
              }}
              onMouseEnter={() => handleMouseEnter(i)}
              onMouseLeave={() => setActiveIndex(null)}
            />
          );
        })}
      </Posterwrapper>
    </TopViewContainer>
  );
};

interface PosterCardProps {
  backgroundImage: string;
}

const TopViewContainer = styled.div`
  padding: 80px 40px;
`;

const Title = styled.div`
  text-align: center;

  h1 {
    font-weight: ${({ theme }) => theme.fonts.secondaryEngWeight.regular};
    font-size: ${({ theme }) => theme.fonts.fontSize.xxLarge};
    text-transform: uppercase;
  }

  p {
    color: ${({ theme }) => theme.colors.gray};
    font-size: 30px;
    margin: 19px 0 70px 0;
  }
`;

const Posterwrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;

  position: relative;
  width: 100%;
  max-width: 1400px;
  height: 400px;
  margin: 0 auto;
`;

const PosterCard = styled.div<PosterCardProps>`
  position: absolute;
  width: 472px;
  height: 400px;
  padding-bottom: 30%;

  background-image: url(${(props) => props.backgroundImage});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  cursor: pointer;

  transition: all 0.3s ease;

  &:nth-child(1) {
    left: 0;
    /* z-index: 3; */
  }

  &:nth-child(2) {
    left: 240px;
    /* z-index: 4; */
  }

  &:nth-child(3) {
    left: 480px;
    /* z-index: 5; */
  }

  &:nth-child(4) {
    left: 720px;
    /* z-index: 2; */
  }

  &:nth-child(5) {
    left: 960px;
    /* z-index: 1; */
  }

  /* &:hover {
    transform: translate3d(0, 0, 20px) scale3d(1.1, 1.1, 1);
  } */
`;

export default TopView;
