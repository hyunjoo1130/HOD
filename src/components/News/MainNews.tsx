import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { ImageContainer } from '../CommonStyles';
import { fetchNewsData } from '../../utils/fetchNewsData';
import { NewsData } from '../../types/dataTypes';

const MainNews = () => {
  const [newsData, setNewsData] = useState<NewsData[]>([]);

  useEffect(() => {
    fetchNewsData(setNewsData);
  }, []);

  const mainNewsData = newsData?.slice(0, 3);

  return (
    <MainNewsContainer>
      <MainNewsWrapper>
        <LeftNews>
          <LeftNewsCard>
            <ImageContainer>
              <img
                src={mainNewsData[0]?.thumbnail}
                alt={mainNewsData[0]?.title}
                width="100%"
              />
            </ImageContainer>
            <Title>
              <h1>{mainNewsData[0]?.title}</h1>
            </Title>
          </LeftNewsCard>
        </LeftNews>
        <RightNews>
          {mainNewsData.slice(1).map((data, i) => {
            return (
              <RightNewsCard key={i}>
                <ImageContainer>
                  <img src={data.thumbnail} alt={data.title} width="100%" />
                </ImageContainer>
                <Title>
                  <h3>{data.title}</h3>
                </Title>
              </RightNewsCard>
            );
          })}
        </RightNews>
      </MainNewsWrapper>
      <Divider />
    </MainNewsContainer>
  );
};

const MainNewsContainer = styled.div``;

const MainNewsWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 720px;
  max-height: 720px;
`;

const LeftNews = styled.div`
  width: 50%;

  height: 720px;
  overflow: hidden;
`;

const RightNews = styled.div`
  display: flex;
  flex-direction: column;

  width: 50%;
  height: 720px;
  overflow: hidden;
`;

const LeftNewsCard = styled.div`
  position: relative;
  height: 720px;
  cursor: pointer;
`;

const RightNewsCard = styled.div`
  position: relative;
  height: 360px;
  cursor: pointer;
`;

const Title = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  padding: 40px;
  color: white;

  h1 {
    font-size: ${({ theme }) => theme.fonts.fontSize.xxLarge};
    font-weight: ${({ theme }) => theme.fonts.secondaryEngWeight.regular};
    line-height: 1.2;
  }

  h3 {
    font-size: ${({ theme }) => theme.fonts.fontSize.large};
    font-weight: ${({ theme }) => theme.fonts.secondaryEngWeight.regular};
    line-height: 1.2;
  }
`;

const Divider = styled.div`
  height: 1px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.black};

  margin: 170px 40px 60px;
`;

export default MainNews;
