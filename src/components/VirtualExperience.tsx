import styled from 'styled-components';
import threeDImg from '../assets/Images/Home_Img/VIRTUAL CERAMIC.png';
import { ImageContainer, MoreButton } from './CommonStyles';
import moreArrow from '../assets/icons/MORE ARROW.png';

const VirtualExperience = () => {
  return (
    <VirtualExperienceContainer>
      {/* img 바꾸기  */}
      <ImageContainer width="50%" style={{ textAlign: 'center' }}>
        <img width="34%" src={threeDImg} />
      </ImageContainer>
      <TextContentBox>
        <Titles>
          <p>3D 체험</p>
          <h1>virtual experience</h1>
          <p>언제 어디서든 전통 한국 도자기의 매력을 느껴보세요</p>
        </Titles>
        <MoreButton>
          <p>더보기</p>
          <p>
            <img width="90%" src={moreArrow} />
          </p>
        </MoreButton>
      </TextContentBox>
    </VirtualExperienceContainer>
  );
};

const VirtualExperienceContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;

  background-color: ${({ theme }) => theme.colors.secondaryWhite};
  padding: 80px 40px 80px 0;
`;

const TextContentBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 50%;
  padding-left: 30px;
`;

const Titles = styled.div`
  display: flex;
  flex-direction: column;

  p {
    font-weight: ${({ theme }) => theme.fonts.secondaryEngWeight.regular};

    &:first-child {
      color: ${({ theme }) => theme.colors.gray};
      font-size: 30px;
    }

    &:last-child {
      font-size: 25px;
    }
  }

  h1 {
    font-family: ${({ theme }) => theme.fonts.secondaryEng};
    font-weight: ${({ theme }) => theme.fonts.secondaryEngWeight.regular};
    text-transform: uppercase;
    font-size: 50px;
    margin: 10px 0 20px;
  }
`;

export default VirtualExperience;
