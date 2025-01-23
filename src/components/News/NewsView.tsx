import React from 'react';
import styled from 'styled-components';
import { NewsData } from '../../types/dataTypes';
import { ImageContainer } from '../CommonStyles';

interface NewsViewProps {
  newsDataProps: NewsData[];
}

const NewsView: React.FC<NewsViewProps> = ({ newsDataProps }) => {
  const publishedDate = (date: string) => {
    const [year, month, day] = date.split('.').map(Number);

    return `${year}-${month}-${day}`;
  };

  return (
    <NewsViewContainer>
      {newsDataProps?.map((data, i) => {
        return (
          <NewsRowWrapper key={i}>
            <NewsRow>
              <ImageContainer width="50%">
                <img src={data.thumbnail} alt={data.title} width="100%" />
              </ImageContainer>
              <TextContent>
                <h1>{data.title}</h1>
                <span>{data.subTitle}</span>
                <p>
                  BY: {data.writer} | 입력 {publishedDate(data.publishedDate)}
                </p>
              </TextContent>
            </NewsRow>
            <Divider />
          </NewsRowWrapper>
        );
      })}
    </NewsViewContainer>
  );
};

const NewsViewContainer = styled.div``;

const NewsRowWrapper = styled.div``;

const NewsRow = styled.div`
  display: flex;
  gap: 40px;
`;

const TextContent = styled.div`
  width: 50%;
  padding: 30px 0;

  display: flex;
  flex-direction: column;
  gap: 20px;

  h1 {
    font-size: ${({ theme }) => theme.fonts.fontSize.xxLarge};
    font-weight: ${({ theme }) => theme.fonts.secondaryEngWeight.regular};
    line-height: 1.2;
    cursor: pointer;
  }

  span {
    color: ${({ theme }) => theme.colors.gray};
    font-size: ${({ theme }) => theme.fonts.fontSize.large};
    line-height: 1.2;
  }

  p {
    font-size: ${({ theme }) => theme.fonts.fontSize.large};
    margin-top: 57px;
  }
`;

const Divider = styled.div`
  height: 1px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.black};

  margin: 40px 0;
`;

export default NewsView;
