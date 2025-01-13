import styled from "styled-components";
import ExhibitionNavigation from "../ExhibitionNavigation";
import backgroundImage from '../../assets/Images/AboutUs_Img/BANNER IMAGE.jpg'

const TopBanner = () => {
    return <TopBannerContainer backgroundImage={backgroundImage}>
        <TopBannerContentWrapper>
            {/* navigation */}
            <ExhibitionNavigation />
            <TextContent>
                <Title>about us</Title>
                <Content>통과 현대가 조화를 이루는 이 공간은 누구나 편안하게 다가갈 수 있으며, 따뜻한 자연의 색조가 한국 도자기의 유기적 아름다움과 자연과의 연결을 강조합니다</Content>
            </TextContent>
        </TopBannerContentWrapper>
    </TopBannerContainer>
}

interface TopBannerContainerProps {
    backgroundImage: string;
}

const TopBannerContainer = styled.div<TopBannerContainerProps>`
    background-image: url(${(props) => props.backgroundImage});
    background-size: cover;
    background-position: bottom;
    background-repeat: no-repeat;

    height: 1200px;
`;

const TopBannerContentWrapper = styled.div`
    padding: 110px 60px 0;
`;

const TextContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 40px;

    width: 60%;
    height: 450px;
    margin: 0 auto;
`;

const Title = styled.h1`
    font-weight: ${({ theme }) => theme.fonts.secondaryEngWeight.regular};
    font-size: ${({ theme }) => theme.fonts.fontSize.xxLarge};
    text-transform: uppercase;
`;

const Content = styled.p`
    line-height: 1.5;
    font-size: ${({ theme }) => theme.fonts.fontSize.large};
    font-weight: ${({ theme }) => theme.fonts.secondaryEngWeight.light};

    text-align: center;
`;

export default TopBanner;