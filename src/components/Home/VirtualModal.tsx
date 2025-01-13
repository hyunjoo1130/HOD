import React from 'react';
import styled from 'styled-components';
import threeDGif from '../../assets/Images/Home_Img/hod3d.gif';
import xButton from '../../assets/icons/x.png';
import { ImageContainer } from '../CommonStyles';

type SetShowModalType = React.Dispatch<React.SetStateAction<boolean>>;

interface VirtualModalProps {
  setShowModal: SetShowModalType;
}

const VirtualModal: React.FC<VirtualModalProps> = ({ setShowModal }) => {
  return (
    <VirtualModalContainer>
      <Shadow onClick={() => setShowModal(false)} />
      <VirtualModalWrapper>
        <CloseButton onClick={() => setShowModal(false)}>
          <span>닫기</span>
          <ImageContainer width="20%">
            <img src={xButton} alt="X" width="100%" />
          </ImageContainer>
        </CloseButton>
        <img src={threeDGif} alt="3d-ceraimic" />
      </VirtualModalWrapper>
    </VirtualModalContainer>
  );
};

const VirtualModalContainer = styled.div``;

const Shadow = styled.div`
  position: fixed;
  left: 0;
  top: 0;

  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.black};
  opacity: 0.85;
  z-index: 19;
`;

const VirtualModalWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 800px;
  z-index: 20;

  img {
    width: 100%;
  }
`;

const CloseButton = styled.div`
  position: absolute;
  right: 0;
  top: -4%;

  display: flex;
  justify-content: flex-end;
  gap: 5px;
  width: 7%;

  cursor: pointer;

  span {
    color: ${({ theme }) => theme.colors.primaryWhite};
  }
`;

export default VirtualModal;
