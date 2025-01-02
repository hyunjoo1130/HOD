import React from 'react';
import styled from 'styled-components';
import { ImageContainer } from '../CommonStyles';
import exhibitionPoster from '../../assets/Images/ExhibitionDetail_Img/POSTER.jpg';

const ExhibitionAbout = () => {
  const title: string = '달항아리를 만든 곳, 금사리';
  const description: string = `1467년 무렵 조선왕실은 궁궐에서 사용할 백자를 만들기 위해 경기도 광주에 관요 곧 왕실 도자기 가마를 두었습니다. 금사리金沙里는 1734년부터 1751년까지 운영된 가마입니다. 금사리는 유백색 곧 우윳빛의 백자색과 달항아리를 만든 곳으로 유명합니다. 금사리 수습 파편을 통해 달항아리 등 금사리에서 만들어진 백자들을 살펴볼 수 있습니다.`;

  return (
    <ExhibitionAboutContainer>
      <ImageContainer width="50%" style={{ textAlign: 'center' }}>
        <img width="90%" src={exhibitionPoster} />
      </ImageContainer>
      <TextContent>
        <Title>
          <h1>{title}</h1>
          <p>about</p>
        </Title>
        <Description>
          <p>{description}</p>
        </Description>
      </TextContent>
    </ExhibitionAboutContainer>
  );
};

const ExhibitionAboutContainer = styled.div`
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
  flex-direction: column;
  gap: 16px;

  h1 {
    font-size: ${({ theme }) => theme.fonts.fontSize.xxLarge}; // 50px
    font-weight: ${({ theme }) => theme.fonts.secondaryEngWeight.regular};
  }

  p {
    font-size: ${({ theme }) => theme.fonts.fontSize.xLarge}; // 30px
    font-weight: ${({ theme }) => theme.fonts.secondaryEngWeight.light};
    color: ${({ theme }) => theme.colors.gray};
    text-transform: uppercase;
  }
`;

const Description = styled.div`
  p {
    line-height: 2;
    font-size: ${({ theme }) => theme.fonts.fontSize.large}; // 25px;
    font-weight: ${({ theme }) => theme.fonts.secondaryEngWeight.light};
  }
`;

export default ExhibitionAbout;
