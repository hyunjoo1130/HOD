import styled from 'styled-components';

const PageTitle = () => {
  return (
    <PageTitleContainer>
      <h1>news</h1>
      <p>
        전통 도자기와 현대 도자기 문화에 관한 모든 정보를 한 곳에서 만나보세요.
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
