import styled from 'styled-components';

interface ImageContainerProps {
  width?: string;
}

export const ImageContainer = styled.div<ImageContainerProps>`
  width: ${(props) => props.width || '100%'};
`;
