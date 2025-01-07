import React, { useState } from 'react';
import styled from 'styled-components';

const ExhibitionView = () => {
  const navItems = ['ALL', '현재 전시', '예정 전시', '지난 전시'];
  const [activeNav, setActiveNav] = useState<number>(0);

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
      <ExhibitionPosterWrapper></ExhibitionPosterWrapper>
    </ExhibitionViewContainer>
  );
};

const ExhibitionViewContainer = styled.div``;

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
  height: 1000px;
`;

export default ExhibitionView;
