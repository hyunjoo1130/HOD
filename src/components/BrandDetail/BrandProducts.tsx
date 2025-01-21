import React from 'react';
import styled from 'styled-components';
import productImage01 from '../../assets/Images/BrandDetail_Img/image04.jpg';
import productImage02 from '../../assets/Images/BrandDetail_Img/image05.jpg';
import productImage03 from '../../assets/Images/BrandDetail_Img/image06.jpg';
import moreArrow from '../../assets/icons/MORE ARROW.png';
import { ImageContainer, MoreButton } from '../CommonStyles';

const BrandProducts = () => {
  const productImagesArray = [productImage01, productImage02, productImage03];

  return (
    <BrandProductsContainer>
      <BrandProductsWrapper>
        <BrandProductsBox>
          {productImagesArray.map((image, i) => {
            return (
              <ImageContainer key={i} width="30%">
                <img src={image} alt="product image" width="100%" />
              </ImageContainer>
            );
          })}
        </BrandProductsBox>
        <TextContent>
          <TitleBox>
            <Title>
              <h1>COTTON WOOL CUP 03 (UNIQUE)</h1>
              <span>limited</span>
            </Title>
            <MoreButton>
              <p>
                <a
                  href="https://smartstore.naver.com/shoparvo/category/26201978ead84da68a88071b6760863b"
                  target="_blank"
                >
                  바로 구매하기
                </a>
              </p>
              <p>
                <img width="90%" src={moreArrow} />
              </p>
            </MoreButton>
          </TitleBox>
          <Content>
            <p>
              ‘UNIQUE’ 라인은 여러 가지 유약을 믹스하여 붓으로 섬세하게 칠하여
              각각의 무드를 표현합니다. 수작업으로 입혀지는 독특하고도 우아한
              색감은 각 개체마다 다르고, 단 한 점씩만을 제작합니다.
            </p>
          </Content>
        </TextContent>
      </BrandProductsWrapper>
    </BrandProductsContainer>
  );
};

const BrandProductsContainer = styled.div`
  padding: 80px 40px;
`;

const BrandProductsWrapper = styled.div``;

const BrandProductsBox = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const TextContent = styled.div`
  display: flex;
  justify-content: space-around;

  padding: 60px;
`;

const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  width: 50%;
`;

const Title = styled.div`
  text-transform: uppercase;

  h1 {
    font-weight: ${({ theme }) => theme.fonts.secondaryEngWeight.regular};
    font-size: ${({ theme }) => theme.fonts.fontSize.xxLarge};
    margin-bottom: 15px;
  }

  span {
    font-weight: ${({ theme }) => theme.fonts.secondaryEngWeight.light};
    font-size: ${({ theme }) => theme.fonts.fontSize.xLarge};
    color: ${({ theme }) => theme.colors.gray};
  }
`;

const Content = styled.div`
  width: 50%;

  p {
    line-height: 2;
    font-size: ${({ theme }) => theme.fonts.fontSize.xLarge};
    font-weight: ${({ theme }) => theme.fonts.secondaryEngWeight.light};
  }
`;

export default BrandProducts;
