import styled from "styled-components";
import { ImageContainer } from "../CommonStyles";
import image01 from '../../assets/Images/AboutUs_Img/image01.jpg';
import image02 from '../../assets/Images/AboutUs_Img/image02.jpg';

const DojagiSection = () => {
    return <DojagiSectionContainer>
        <DojagiSectionWrapper>
            <LeftContent>
                <ImageContainer width="100%">
                    <img src={image01} alt="하우스 오브 도자기" width="100%" />
                </ImageContainer>
                <p>하우스 오브 도자기</p>
            </LeftContent>
            <RightContent>
                <TextContent>
                    <Title>
                        <h1>dojagi</h1>
                        <p>history</p>
                    </Title>
                    <Content>
                    도자기는 진흙을 구워 만든 세라믹 제품으로, 그릇이나 장식품 등 다양한 형태로 사용됩니다. 보통 고온에서 구워내어 단단하고 내구성이 강한 특성을 가집니다. 주로 예술적이거나 실용적인 용도로 만들어집니다.
                    </Content>
                </TextContent>
                <ImageContainer>
                    <img src={image02} alt="하우스 오브 도자기" width="100%" />
                </ImageContainer>
            </RightContent>
        </DojagiSectionWrapper>
    </DojagiSectionContainer>
};

const DojagiSectionContainer = styled.div`
    padding: 80px;
`;

const DojagiSectionWrapper = styled.div`
    display: flex;
    gap: 100px;
`;

const LeftContent = styled.div`
    position: relative;
    width: 50%;

    p {
        position: absolute;
        right: 4%;
        top: 2%;
        font-family: ${({theme}) => theme.fonts.primaryKr};
        font-size: ${({theme}) => theme.fonts.fontSize.xLarge};

        width: 2%;
    }
`;

const RightContent = styled.div`
    width: 50%;
    padding-top: 50px;
`;

const TextContent = styled.div`
`;

const Title = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 30px;
    text-transform: uppercase;

    h1 {
        font-weight: ${({ theme }) => theme.fonts.secondaryEngWeight.regular};
        font-size: ${({ theme }) => theme.fonts.fontSize.xxLarge};
    }
    
    p {
        font-weight: ${({ theme }) => theme.fonts.secondaryEngWeight.light};
        font-size: ${({ theme }) => theme.fonts.fontSize.xLarge};
        color: ${({theme}) => theme.colors.gray};
    }
`;

const Content = styled.p`
    line-height: 2;
    font-size: ${({ theme }) => theme.fonts.fontSize.xLarge};
    margin: 80px 0;
`;

export default DojagiSection;