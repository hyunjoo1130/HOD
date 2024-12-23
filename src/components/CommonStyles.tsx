import styled from 'styled-components';

interface ImageContainerProps {
  width?: string;
}

export const ImageContainer = styled.div<ImageContainerProps>`
  width: ${(props) => props.width || '100%'};
`;

export const MoreButton = styled.div`
  display: flex;
  width: fit-content;
  border-bottom: 1.5px solid ${({ theme }) => theme.colors.black};
  padding: 2px;

  cursor: pointer;

  p {
    &:last-child {
      display: block;
      padding-left: 7px;
    }
  }
`;
