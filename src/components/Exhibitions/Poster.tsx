import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { ExhibitionData } from '../../types/dataTypes';

interface PosterProps {
  data: ExhibitionData;
  i: number;
}

const Poster = ({ data, i }: PosterProps) => {
  const navigate = useNavigate();

  const goToDetail = (query: string) => {
    navigate(`/exhibitions/exhibition_detail?name=${query}`);
  };

  return (
    <PosterContainer className={`poster${i + 1}`} key={i}>
      <HoverBox>
        <h3>{data.title}</h3>
        <p onClick={() => goToDetail(data.title)}>더보기</p>
      </HoverBox>
      <img
        src={data.posterUrl}
        alt={`poster${i + 1}`}
        width="100%"
        height="100%"
      />
    </PosterContainer>
  );
};

const HoverBox = styled.div`
  opacity: 0;
  position: absolute;
  left: 0;
  top: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;

  width: 100%;
  height: 100%;
  text-align: center;
  background-color: rgba(255, 255, 255, 0.65);

  z-index: 2;

  h3 {
    font-size: ${({ theme }) => theme.fonts.fontSize.xLarge};
  }

  p {
    text-decoration: underline;
    cursor: pointer;
  }
`;

const PosterContainer = styled.div`
  position: relative;
  overflow: hidden;

  &.poster1 {
    grid-area: item1;
  }

  &.poster2 {
    grid-area: item2;
  }

  &.poster3 {
    grid-area: item3;
  }

  &.poster4 {
    grid-area: item4;
  }

  &.poster5 {
    grid-area: item5;
  }

  &.poster6 {
    grid-area: item6;
  }

  &.poster7 {
    grid-area: item7;
  }

  &.poster8 {
    grid-area: item8;
  }

  img {
    width: 100%;
    height: auto;
    z-index: 1;
  }

  &:hover {
    ${HoverBox} {
      opacity: 1;
    }

    img {
      filter: blur(4px);
    }
  }
`;

export default Poster;
