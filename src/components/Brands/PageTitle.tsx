import React from 'react';
import styled from 'styled-components';

const PageTitle = () => {
  return (
    <PageTitleContainer>
      <h1>brands</h1>
      <p>
        매주 하우스 오브 도자기에서 독특한 한국 도자기 브랜드를 소개하고
        있습니다. 인기 있는 브랜드는 물론, 신진 브랜드들도 함께 만나보실 수
        있습니다. 각 브랜드의 독특한 매력을 느끼시고, 이곳에서 여러분의 다음
        애정 브랜드를 찾아보세요!
      </p>
    </PageTitleContainer>
  );
};

const PageTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  text-align: center;
  padding: 80px;

  h1 {
    font-weight: ${({ theme }) => theme.fonts.secondaryEngWeight.regular};
    font-size: ${({ theme }) => theme.fonts.fontSize.xxLarge};
    text-transform: uppercase;
  }

  p {
    font-size: ${({ theme }) => theme.fonts.fontSize.large};
    line-height: 2;
  }
`;

export default PageTitle;
