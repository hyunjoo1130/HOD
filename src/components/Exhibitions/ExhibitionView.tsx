import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { ExhibitionData } from '../../types/exhibitionsData';
import { ImageContainer } from '../CommonStyles';
import { useNavigate } from 'react-router-dom';

const ExhibitionView = () => {
  const navigate = useNavigate();
  const navItems = ['ALL', '현재 전시', '예정 전시', '지난 전시'];
  const [activeNav, setActiveNav] = useState<number>(0);
  const [exhibitionData, setExhibitionData] = useState<ExhibitionData[]>([]);

  useEffect(() => {
    const fetchExhibitionData = async () => {
      try {
        const res = await fetch('/data/exhibitionsData.json');
        if (!res.ok) {
          throw new Error('데이터를 불러오는데 실패했음.');
        }
        const data = await res.json();
        setExhibitionData(data);
      } catch (error) {
        console.error('error => ', error);
      }
    };

    fetchExhibitionData();
  }, []);

  const posterUrls = exhibitionData?.map((data) => data.posterUrl);
  console.log(posterUrls);

  const goToDetail = (link: string) => {
    navigate(link);
  };

  return (
    <ExhibitionViewContainer>
      <Nav>
        {navItems.map((item, i) => {
          const isActive = i === activeNav;

          return (
            <NavItem key={i} onClick={() => setActiveNav(i)}>
              {/* onclick 한 nav item만 검정색 + underline */}
              <Item isActive={isActive}>{item}</Item>
              {i !== navItems.length - 1 ? <Divider>|</Divider> : ''}
            </NavItem>
          );
        })}
      </Nav>
      <ExhibitionPosterWrapper>
        {exhibitionData.map((data, i) => {
          return (
            <ImageContainer
              width="30%"
              onClick={() =>
                goToDetail(`/exhibition_detail?name=${data.title}`)
              }
            >
              <img src={data.posterUrl} alt={`poster${i + 1}`} width="100%" />
            </ImageContainer>
          );
        })}
      </ExhibitionPosterWrapper>
    </ExhibitionViewContainer>
  );
};

const ExhibitionViewContainer = styled.div`
  padding: 0 40px;
`;

const Nav = styled.div`
  display: flex;
  justify-content: center;
`;

const NavItem = styled.div`
  display: flex;
  align-items: center;

  font-size: ${({ theme }) => theme.fonts.fontSize.large};
  font-weight: ${({ theme }) => theme.fonts.secondaryEngWeight.light};
`;

const Item = styled.p<{ isActive: boolean }>`
  color: ${({ isActive, theme }) =>
    isActive ? theme.colors.black : theme.colors.gray};
  text-decoration: ${({ isActive }) => (isActive ? 'underline' : 'none')};
  cursor: pointer;
`;

const Divider = styled.p`
  margin: 0 20px;
`;

const ExhibitionPosterWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 30px;

  margin: 80px 40px;

  img {
    cursor: pointer;
  }
`;

export default ExhibitionView;
