import styled from "styled-components";
import image03 from '../../assets/Images/AboutUs_Img/image03.jpg';
import { ImageContainer } from "../CommonStyles";


const OurMissionSection = () => {
    return <OurMissionSectionContainer>
        <TextContent>
            <Title>our mission</Title>
            <Content>'하우스 오브 도자기 (홋)'는 한국 전통 도자기의 아름다움과 현대적 디자인 원칙을 결합하여 전 세계적으로 그 가치를 알리고 
있습니다. 우리의 미션은 한국 도자기의 예술성과 장인정신, 그리고 문화적 의미를 세계에 소개하는 글로벌 플랫폼을 구축하는 
것입니다. 도자기 전시회, 뉴스, 브랜드 정보를 제공하는 공간을 통해 현대적이고 전통적인 한국 도자기를 사랑하는 이들을 
연결하고, 그들의 지식과 영감을 확장하는 것이 ‘홋'의 목표입니다.</Content>
        </TextContent>
        <ImageContent>
            <img src={image03} alt="하우스 오브 도자기" width="100%" />
            <p>"도자기 속에 살아있는 한국의 뿌리와 아름다움을 만나다."</p>
        </ImageContent>
    </OurMissionSectionContainer>
};

const OurMissionSectionContainer = styled.div`
    padding: 0 80px 80px 80px;
    transform: translateY(-120px);
`;

const TextContent = styled.div`
    padding: 20px;
`;

const Title = styled.h1`
    font-weight: ${({ theme }) => theme.fonts.secondaryEngWeight.regular};
    font-size: ${({ theme }) => theme.fonts.fontSize.xxLarge};
    text-transform: uppercase;
`;

const Content = styled.p`
    font-weight: ${({ theme }) => theme.fonts.secondaryEngWeight.light};
    font-size: ${({ theme }) => theme.fonts.fontSize.xLarge};
    line-height: 2;
    margin: 80px 0;
`;

const ImageContent = styled.div`
    position: relative;
    width: 100%;

    p {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: ${({ theme }) => theme.fonts.fontSize.xLarge};
    }
`;

export default OurMissionSection;