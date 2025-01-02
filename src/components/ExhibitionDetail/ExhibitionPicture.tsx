import React from 'react';
import styled from 'styled-components';
import exhibitionImage01 from '../../assets/Images/ExhibitionDetail_Img/Detail01.jpg';
import exhibitionImage02 from '../../assets/Images/ExhibitionDetail_Img/Detail02.jpg';
import exhibitionImage03 from '../../assets/Images/ExhibitionDetail_Img/Detail03.jpg';

const ExhibitionPicture = () => {
  return (
    <ExhibitionPictureContainer>
      <PictureBox left="0" top="0" width="50%" height="400px">
        <PictureImage backgroundImage={exhibitionImage01} />
        <OpacityBox left="0" top="0" width="100%" height="400px" />
      </PictureBox>
      <PictureBox left="0" top="50%" width="50%" height="400px">
        <PictureImage backgroundImage={exhibitionImage02} />
        <OpacityBox left="0" top="0" width="100%" height="400px" />
      </PictureBox>
      <PictureBox left="50%" top="0" width="50%" height="800px">
        <PictureImage backgroundImage={exhibitionImage03} />
        <OpacityBox left="50%" top="0" width="100%" height="800px" />
      </PictureBox>
    </ExhibitionPictureContainer>
  );
};

interface PictureBoxProps {
  left?: string;
  top?: string;
  bottom?: string;

  width?: string;
  height?: string;
  backgroundImage?: string;
}

const ExhibitionPictureContainer = styled.div`
  width: 100%;
  height: 800px;
  position: relative;
`;

const PictureImage = styled.div<PictureBoxProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.backgroundImage});
  background-size: cover;
  background-position: center;
  transition: transform 0.3s ease;
`;

const OpacityBox = styled.div<PictureBoxProps>`
  position: absolute;
  left: 0;
  top: ${(props) => props.top};
  bottom: ${(props) => props.bottom};

  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: ${({ theme }) => theme.colors.primaryWhite};
  opacity: 0;
`;

const PictureBox = styled.div<PictureBoxProps>`
  position: absolute;
  left: ${(props) => props.left};
  top: ${(props) => props.top};
  bottom: ${(props) => props.bottom};

  max-width: 800px;
  width: ${(props) => props.width};
  height: ${(props) => props.height};

  overflow: hidden;
  cursor: pointer;

  &:hover {
    ${PictureImage} {
      transform: scale(1.15);
    }

    ${OpacityBox} {
      opacity: 0.4;
      transition: 0.3s;
    }
  }
`;

export default ExhibitionPicture;