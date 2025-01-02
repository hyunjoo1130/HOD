import React from 'react';
import styled from 'styled-components';

const ExhibitionInfo = () => {
  // 임시 데이터
  const infoDetailTitle = [
    { title: '전시명', content: `달항아리를 만든 곳, 금사리` },
    { title: '전시장소', content: `분청사기·백자실` },
    { title: '전시기간', content: `2024-06-25 ~ 2025-06-22` },
    {
      title: '전시품',
      content: `금사리 수습 <달항아리 구연부편> 등 27건 28점`,
    },
    {
      title: '전시요약',
      content: `18세기 전반 운영된 경기도 광주 금사리 관요 수습 파편과 완형을 함께 전시`,
    },
    {
      title: '담당부서',
      content: `미술부 임진아 (02-2077-9508)`,
    },
  ];

  return (
    <ExhibitionInfoContainer>
      <InfoWrapper>
        <Title>
          <h1>information</h1>
          <p>더 자세한 정보</p>
        </Title>
        <InfoDetail>
          {infoDetailTitle.map((info, i) => {
            return (
              <Detail key={i}>
                <p>{info.title}</p>
                <p>{info.content}</p>
              </Detail>
            );
          })}
        </InfoDetail>
      </InfoWrapper>
    </ExhibitionInfoContainer>
  );
};

const ExhibitionInfoContainer = styled.div`
  padding: 80px 40px;
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 100px;
  padding: 40px;
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  h1 {
    font-size: ${({ theme }) => theme.fonts.fontSize.xxLarge};
    font-weight: ${({ theme }) => theme.fonts.secondaryEngWeight.regular};
    text-transform: uppercase;
  }

  p {
    color: ${({ theme }) => theme.colors.gray};
    font-size: ${({ theme }) => theme.fonts.fontSize.xLarge};
  }
`;

const InfoDetail = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  row-gap: 60px;
`;

const Detail = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;

  width: 30%;

  p {
    font-size: ${({ theme }) => theme.fonts.fontSize.large};
  }

  p:first-child {
    font-weight: ${({ theme }) => theme.fonts.secondaryEngWeight.bold};
  }

  p:last-child {
    line-height: 1.5;
  }
`;

export default ExhibitionInfo;
