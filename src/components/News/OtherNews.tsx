import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { fetchNewsData } from '../../utils/fetchNewsData';
import { NewsData } from '../../types/dataTypes';
import NewsView from './NewsView';

const OtherNews = () => {
  const navItems = ['최신', '인기'];
  const [activeNav, setActiveNav] = useState<number>(0);
  const [activeNavItem, setActiveNavItem] = useState<string>('최신');
  const [newsData, setNewsData] = useState<NewsData[]>([]);

  useEffect(() => {
    fetchNewsData(setNewsData);
  }, []);

  const otherNewsData = newsData?.slice(3);

  const sortedByViews = [...otherNewsData].sort(
    (a, b) => (b.views || 0) - (a.views || 0)
  );

  const sortedByPublishedDate = [...otherNewsData].sort(
    (a, b) =>
      new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime()
  );

  return (
    <OtherNewsContainer>
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
              {i !== navItems.length - 1 ? <NavDivider>|</NavDivider> : ''}
            </NavItem>
          );
        })}
      </Nav>
      {activeNavItem === '최신' && (
        <NewsView newsDataProps={sortedByPublishedDate} />
      )}
      {activeNavItem === '인기' && <NewsView newsDataProps={sortedByViews} />}
    </OtherNewsContainer>
  );
};

const OtherNewsContainer = styled.div`
  padding: 0 80px 80px 80px;
`;

const Nav = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 120px;
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

const NavDivider = styled.p`
  margin: 0 40px;
`;

export default OtherNews;
