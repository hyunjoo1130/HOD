import styled from 'styled-components';

interface ImageContainerProps {
  width?: string;
}

export const ImageContainer = styled.div<ImageContainerProps>`
  width: ${(props) => props.width || '100%'};
  margin: 0 auto;
`;

export const Image = styled.img`
  width: 100%;
  margin: 0 auto;
`;
