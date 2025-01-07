import React from 'react';
import styled from 'styled-components';

const PageTitle = () => {
  return (
    <PageTitleContainer>
      <h1>exhibition</h1>
      <p>
        '하우스 오브 도자기 (홋)'는 전통 도자기에 대한 깊이 있는 정보를 보다
        쉽게 접할 수 있도록 하는 것을 중요하게 생각합니다.
        <br /> 저희는 한국 도자기의 역사와 예술적 아름다움을 직접 체험할 수
        있도록 최신 전시와 관련된 다양한 정보를 제공합니다.
      </p>
      <Divider />
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

const Divider = styled.div`
  height: 1px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.black};

  padding-top: 50px;
  margin-bottom: 30px;
`;

export default PageTitle;
