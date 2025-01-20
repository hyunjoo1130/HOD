import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { ImageContainer, MoreButton } from '../CommonStyles';
import { BrandsData } from '../../types/dataTypes';
import { useNavigate } from 'react-router-dom';
import moreArrow from '../../assets/icons/MORE ARROW.png';
import { fetchBrandsData } from '../../utils/fetchBrandsData';

const MainBrands = () => {
  const navigate = useNavigate();
  const [brandsData, setBrandsData] = useState<BrandsData[]>([]);

  useEffect(() => {
    // 브랜드 데이터 불러오기
    fetchBrandsData(setBrandsData);
  }, []);

  return (
    <MainBrandsContainer>
      <MainBrandSection>
        <ImageContainer width="50%">
          <img
            src={brandsData[0]?.thumbnailUrl}
            alt={brandsData[0]?.name}
            width="100%"
          />
        </ImageContainer>
        <TextContent>
          <Title>
            <h1>{brandsData[0]?.name}</h1>
            <p>this week</p>
          </Title>
          <Content>{brandsData[0]?.description}</Content>
          <MoreButton onClick={() => navigate('/brands_detail')}>
            <p>더보기</p>
            <p>
              <img width="90%" src={moreArrow} />
            </p>
          </MoreButton>
        </TextContent>
      </MainBrandSection>
      <MainBrandSection>
        <TextContent>
          <Title>
            <h1>{brandsData[1]?.name}</h1>
            <p>lase week</p>
          </Title>
          <Content>{brandsData[1]?.description}</Content>
          <MoreButton onClick={() => navigate('/brands_detail')}>
            <p>더보기</p>
            <p>
              <img width="90%" src={moreArrow} />
            </p>
          </MoreButton>
        </TextContent>
        <ImageContainer width="50%">
          <img
            src={brandsData[1]?.thumbnailUrl}
            alt={brandsData[1]?.name}
            width="100%"
          />
        </ImageContainer>
      </MainBrandSection>
    </MainBrandsContainer>
  );
};

const MainBrandsContainer = styled.div``;

const MainBrandSection = styled.div`
  display: flex;
`;

const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  width: 50%;
  padding: 60px;
`;

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
  text-transform: uppercase;

  h1 {
    font-weight: ${({ theme }) => theme.fonts.secondaryEngWeight.regular};
    font-size: ${({ theme }) => theme.fonts.fontSize.xxLarge};
    width: 70%;
    overflow-wrap: break-word;
    word-wrap: break-word;
  }

  p {
    color: ${({ theme }) => theme.colors.gray};
    font-size: ${({ theme }) => theme.fonts.fontSize.xLarge};
  }
`;

const Content = styled.p`
  line-height: 2;
  font-size: ${({ theme }) => theme.fonts.fontSize.xLarge};
  font-weight: ${({ theme }) => theme.fonts.secondaryEngWeight.light};
`;

export default MainBrands;
