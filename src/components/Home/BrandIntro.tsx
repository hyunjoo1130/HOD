import React from 'react';
import styled from 'styled-components';
import { ImageContainer, MoreButton } from '../CommonStyles';
import image from '../../assets/Images/Home_Img/BRAND INTRO.jpg';
import moreArrow from '../../assets/icons/MORE ARROW.png';
import { useNavigate } from 'react-router-dom';

const BrandIntro = () => {
  const navigate = useNavigate();

  return (
    <BrandIntroContainer>
      <TextContent>
        <Title>
          <h1>하우스 오브 도자기</h1>
          <p>2024</p>
        </Title>
        <Content>
          <p>
            '하우스 오브 도자기 (홋)'는 한국 전통 도자기의 아름다움과 현대적
            디자인 원칙을 결합하여 전 세계적으로 그 가치를 알리고 있습니다.
            우리의 미션은 한국 도자기의 예술성과 장인정신, 그리고 문화적 의미를
            세계에 소개하는 글로벌 플랫폼을 구축하는 것입니다. 도자기 전시회,
            뉴스, 브랜드 정보를 제공하는 공간을 통해 현대적이고 전통적인 한국
            도자기를 사랑하는 이들을 연결하고, 그들의 지식과 영감을 확장하는
            것이 ‘홋'의 목표입니다.
          </p>
        </Content>
        <MoreButton onClick={() => navigate('/about_us')}>
          <p>더보기</p>
          <p>
            <img width="90%" src={moreArrow} />
          </p>
        </MoreButton>
      </TextContent>
      <ImageContainer width="50%" style={{ textAlign: 'center' }}>
        <img width="90%" src={image} />
      </ImageContainer>
    </BrandIntroContainer>
  );
};

const BrandIntroContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  gap: 40px;

  padding: 80px 40px;
`;

const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 50%;
  padding: 60px 30px;
`;

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;

  h1 {
    font-weight: ${({ theme }) => theme.fonts.secondaryEngWeight.regular};
    font-size: ${({ theme }) => theme.fonts.fontSize.xxLarge};
    text-transform: uppercase;
  }

  p {
    color: ${({ theme }) => theme.colors.gray};
    font-size: ${({ theme }) => theme.fonts.fontSize.xLarge};
  }
`;

const Content = styled.div`
  p {
    line-height: 2;
    font-size: ${({ theme }) => theme.fonts.fontSize.xLarge};
    font-weight: ${({ theme }) => theme.fonts.secondaryEngWeight.light};
  }
`;

export default BrandIntro;
