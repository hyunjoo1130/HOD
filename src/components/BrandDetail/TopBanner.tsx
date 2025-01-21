import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import backgroundImage from '../../assets/Images/BrandDetail_Img/BANNER.jpg';
import ExhibitionNavigation from '../ExhibitionNavigation';
import { BrandsData } from '../../types/dataTypes';
import { fetchBrandsData } from '../../utils/fetchBrandsData';
import { useLocation } from 'react-router-dom';

const TopBanner = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const myParam = queryParams.get('name');
  const [brandsData, setBrandsData] = useState<BrandsData[]>([]);

  useEffect(() => {
    fetchBrandsData(setBrandsData);
  }, []);

  const thisBrandData = brandsData.filter((data) => data.name === myParam)[0];
  const pathnames = location.pathname.split('/').slice(1);
  const pathname = pathnames.slice(pathnames.length - 1);

  return (
    <TopBannerContainer backgroundImage={backgroundImage}>
      <TopBannerWrapper>
        <ExhibitionNavigation linkColor="white" myPathName={pathname[0]} />
        <TextContent>
          <h1>{thisBrandData?.name}</h1>
          <p>
            롬아카이브는 부드러우면서 강인한 자연물에서 영감을 받아 전부
            수작업으로 도자를 빚어냅니다. 프로젝트별로 다루는 대상이 달라지며
            그것은 꽃이 되거나 열매, 또는 자연물의 구성원인 인간이 되면서 도자의
            모습으로 기록되어 우리 곁에서 머물 것입니다.{' '}
          </p>
        </TextContent>
      </TopBannerWrapper>
    </TopBannerContainer>
  );
};

interface TopBannerContainerProps {
  backgroundImage: string;
}

const TopBannerContainer = styled.div<TopBannerContainerProps>`
  background-image: url(${(props) => props.backgroundImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  height: 1200px;
`;

const TopBannerWrapper = styled.div`
  position: relative;
  height: 1200px;

  padding: 110px 60px 0;
`;

const TextContent = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: ${({ theme }) => theme.colors.primaryWhite};

  width: 70%;
  padding: 80px 50px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 60px;
  text-transform: uppercase;

  h1 {
    font-weight: ${({ theme }) => theme.fonts.secondaryEngWeight.regular};
    font-size: ${({ theme }) => theme.fonts.fontSize.xxLarge};
  }

  p {
    font-weight: ${({ theme }) => theme.fonts.secondaryEngWeight.light};
    font-size: ${({ theme }) => theme.fonts.fontSize.xLarge};
    line-height: 2;
  }
`;

export default TopBanner;
