import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { ExhibitionData } from '../../types/dataTypes';
import Poster from './Poster';
import { fetchExhibitionData } from '../../utils/fetchExhibitionData';

const ExhibitionView = () => {
  const navItems = ['ALL', '현재 전시', '예정 전시', '지난 전시'];
  const [activeNav, setActiveNav] = useState<number>(0);
  const [activeNavItem, setActiveNavItem] = useState<string>('ALL');
  const [exhibitionData, setExhibitionData] = useState<ExhibitionData[]>([]);

  useEffect(() => {
    fetchExhibitionData(setExhibitionData);
  }, []);

  const isDateBeforeToday = (exhibitionDate: string) => {
    const [year, month, day] = exhibitionDate.split('.').map(Number);
    const date = new Date(year, month - 1, day);

    const today = new Date();

    return date < today;
  };

  const isDateAfterToday = (exhibitionDate: string) => {
    const [year, month, day] = exhibitionDate.split('.').map(Number);
    const date = new Date(year, month - 1, day);

    const today = new Date();

    return date > today;
  };

  // 현재전시 : 시작하는 날짜가 오늘 날짜보다 전 & 끝나는 날짜가 오늘 날짜보다 후
  const currentExhibitionArray = exhibitionData.filter(
    (data) =>
      isDateBeforeToday(data.startDate) && isDateAfterToday(data.endDate)
  );

  // 예정전시 : 시작하는 날짜가 오늘 날짜보다 후
  const pastExhibitionArray = exhibitionData.filter((data) =>
    isDateBeforeToday(data.endDate)
  );

  // 지난전시 : 끝나는 날짜가 오늘 날짜보다 전
  const upcomingExhibitionArray = exhibitionData.filter((data) =>
    isDateAfterToday(data.startDate)
  );

  return (
    <ExhibitionViewContainer>
      <Nav>
        {navItems.map((item, i) => {
          const isActive = i === activeNav;
          return (
            <NavItem
              key={i}
              onClick={() => {
                setActiveNav(i);
                setActiveNavItem(item);
              }}
            >
              <Item isActive={isActive}>{item}</Item>
              {i !== navItems.length - 1 ? <Divider>|</Divider> : ''}
            </NavItem>
          );
        })}
      </Nav>
      <ExhibitionPosterWrapper>
        {activeNavItem === 'ALL' &&
          exhibitionData.map((data, i) => {
            return <Poster data={data} i={i} />;
          })}
        {activeNavItem === '현재 전시' &&
          currentExhibitionArray.map((data, i) => {
            return <Poster data={data} i={i} />;
          })}
        {activeNavItem === '예정 전시' &&
          upcomingExhibitionArray.map((data, i) => {
            return <Poster data={data} i={i} />;
          })}
        {activeNavItem === '지난 전시' &&
          pastExhibitionArray.map((data, i) => {
            return <Poster data={data} i={i} />;
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
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto auto;
  grid-template-areas:
    'item1 item2 item2'
    'item3 item4 item5'
    'item6 item7 item8';
  gap: 30px;

  margin: 80px;
`;

export default ExhibitionView;
