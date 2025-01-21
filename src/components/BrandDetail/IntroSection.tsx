import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { ImageContainer } from '../CommonStyles';
import introImage01 from '../../assets/Images/BrandDetail_Img/image01.jpg';
import introImage02 from '../../assets/Images/BrandDetail_Img/image03.jpg';
import thumbnail from '../../assets/Images/BrandDetail_Img/image02.jpg';
import { fetchBrandsData } from '../../utils/fetchBrandsData';
import { BrandsData } from '../../types/dataTypes';
import { useLocation } from 'react-router-dom';
import instagramIcon from '../../assets/icons/brand_instagram.png';
import websiteIcon from '../../assets/icons/brand_website.png';

const IntroSection = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const myParam = queryParams.get('name');
  const [brandsData, setBrandsData] = useState<BrandsData[]>([]);

  useEffect(() => {
    fetchBrandsData(setBrandsData);
  }, []);

  const thisBrandData = brandsData.filter((data) => data.name === myParam)[0];
  const websiteUrl = thisBrandData?.homepageUrl.split('/');
  const website = websiteUrl?.filter((url) => url.includes('.com'))[0];
  const smartstore =
    websiteUrl && website + '/' + websiteUrl[websiteUrl.length - 1];

  return (
    <IntroSectionContainer>
      <IntroSectionWrapper>
        <LeftContent>
          <ImageContainer width="50%">
            <img src={introImage01} alt="intro image" width="100%" />
          </ImageContainer>
          <BrandUrl>
            <Thumbnail>
              <ImageContainer width="65%" margin="0 auto">
                <img src={thumbnail} alt="" width="100%" />
              </ImageContainer>
            </Thumbnail>
            <UrlBox>
              <UrlLink>
                <ImageContainer width="5%" margin="0 10px 0 0">
                  <img src={instagramIcon} alt="Instagram" width="100%" />
                </ImageContainer>
                <a href={thisBrandData?.instaUrl} target="_blank">
                  @{thisBrandData?.name}
                </a>
              </UrlLink>
              <UrlLink>
                <ImageContainer width="5%" margin="0 10px 0 0">
                  <img src={websiteIcon} alt="Website" width="100%" />
                </ImageContainer>
                <a href={thisBrandData?.homepageUrl} target="_blank">
                  {thisBrandData?.homepageUrl
                    ? website.includes('smartstore')
                      ? smartstore
                      : website
                    : '준비중입니다.'}
                </a>
              </UrlLink>
            </UrlBox>
          </BrandUrl>
        </LeftContent>
        <RightContent>
          <TextContent>
            <Title>
              <h1>design influence</h1>
              <p>about</p>
            </Title>
            <Content>
              건드리면 끊어질 듯 연약한 모습으로 자연에 순응하며 수만 년을
              이어온 생명력의 힘, 있는 그대로 살아가는 것을 가치 있게 여기고
              이를 담아내려 합니다. 말라 있는 백색부터 여러 가지의 빛과 그로부터
              발생되는 색으로 각기 다른 특유의 분위기를 냅니다.
            </Content>
          </TextContent>
          <ImageContainer width="50%">
            <img src={introImage02} alt="intro image" width="100%" />
          </ImageContainer>
        </RightContent>
      </IntroSectionWrapper>
    </IntroSectionContainer>
  );
};

const IntroSectionContainer = styled.div``;

const IntroSectionWrapper = styled.div``;

const LeftContent = styled.div`
  display: flex;
`;

const BrandUrl = styled.div`
  position: relative;
  width: 50%;

  padding: 40px;
`;

const Thumbnail = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  width: 100%;
`;

const UrlBox = styled.div`
  position: absolute;
  left: 4%;
  bottom: 4%;
  font-size: 18px;
  text-transform: uppercase;

  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const UrlLink = styled.div`
  display: flex;
  align-items: center;

  a {
    text-decoration: underline;
  }
`;

const RightContent = styled.div`
  display: flex;
`;

const TextContent = styled.div`
  width: 50%;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 100px 60px;
`;

const Title = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  gap: 30px;
  text-transform: uppercase;

  h1 {
    font-weight: ${({ theme }) => theme.fonts.secondaryEngWeight.regular};
    font-size: ${({ theme }) => theme.fonts.fontSize.xxLarge};
  }

  p {
    font-weight: ${({ theme }) => theme.fonts.secondaryEngWeight.light};
    font-size: ${({ theme }) => theme.fonts.fontSize.xLarge};
    color: ${({ theme }) => theme.colors.gray};
  }
`;

const Content = styled.p`
  line-height: 2;
  font-weight: ${({ theme }) => theme.fonts.secondaryEngWeight.light};
  font-size: ${({ theme }) => theme.fonts.fontSize.xLarge};
  margin: 60px 0;
`;

export default IntroSection;
