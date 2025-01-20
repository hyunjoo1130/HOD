import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { BrandsData } from '../../types/dataTypes';
import { fetchBrandsData } from '../../utils/fetchBrandsData';
import { ImageContainer } from '../CommonStyles';
import { useNavigate } from 'react-router-dom';

const OtherBrands = () => {
  const navigate = useNavigate();
  const [brandsData, setBrandsData] = useState<BrandsData[]>([]);

  const goToDetail = (query: string) => {
    navigate(`/brands/brands_detail?name=${query}`);
  };

  useEffect(() => {
    // 브랜드 데이터 불러오기
    fetchBrandsData(setBrandsData);
  }, []);

  const otherBrandDataArray = brandsData.slice(2);

  return (
    <OtherBrandsContainer>
      {otherBrandDataArray.map((data, i) => {
        return (
          <BrandCard key={i}>
            <HoverBox>
              <h3>@{data.name}</h3>
              <p onClick={() => goToDetail(data.name)}>더보기</p>
            </HoverBox>
            <ImageContainer>
              <img src={data.thumbnailUrl} alt={data.name} width="100%" />
            </ImageContainer>
          </BrandCard>
        );
      })}
    </OtherBrandsContainer>
  );
};

const HoverBox = styled.div`
  opacity: 0;
  position: absolute;
  left: 0;
  top: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;

  width: 100%;
  height: 100%;
  text-align: center;
  background-color: rgba(255, 255, 255, 0.65);

  z-index: 2;

  h3 {
    font-size: ${({ theme }) => theme.fonts.fontSize.xLarge};
    text-transform: uppercase;
  }

  p {
    text-decoration: underline;
    cursor: pointer;
  }
`;

const OtherBrandsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 30px;
  column-gap: 30px;

  padding: 80px 40px;
`;

const BrandCard = styled.div`
  position: relative;
  overflow: hidden;

  &:hover {
    ${HoverBox} {
      opacity: 1;
    }

    img {
      filter: blur(4px);
    }
  }
`;

export default OtherBrands;
