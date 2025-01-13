import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { ExhibitionData } from '../types/exhibitionsData';

const ExhibitionNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const pathnames = location.pathname.split('/').slice(1);
  const queryParams = new URLSearchParams(location.search);
  const myParam = queryParams.get('name');
  const [exhibitionData, setExhibitionData] = useState<ExhibitionData[]>([]);

  console.log('queryParams => ', queryParams);
  console.log('myParam => ', myParam);

  useEffect(() => {
    // fetch 함수는 포스터 클릭 했을 때 실행 돼야 함
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

  const goToLink = (link: string) => {
    navigate(link);
  };

  return (
    <ExhibitionNavigationContainer>
      <ExhibitionNavigationWrapper>
        <NavigationPath>
          <NavigationText>
            <NavigationLink onClick={() => goToLink('/')}>home</NavigationLink>
          </NavigationText>
        </NavigationPath>
        {pathnames.map((pathname, i) => {
          return <NavigationPath key={i}>
          <NavigationText>
            <Divider> | </Divider>
            <NavigationLink onClick={() => {goToLink(`/${pathname}`)}}
            underline={i === pathnames.length - 1 ? 'underline' : 'none'}>
              {pathname === 'exhibition_detail' ? myParam : pathname.replace('_', ' ')}
            </NavigationLink>
          </NavigationText>
        </NavigationPath>
        })}
      </ExhibitionNavigationWrapper>
    </ExhibitionNavigationContainer>
  );
};

interface NavigationLinkProps {
  underline?: string;
}

const ExhibitionNavigationContainer = styled.div``;

const ExhibitionNavigationWrapper = styled.div`
  display: flex;
`;

const NavigationPath = styled.div`
  display: flex;
  align-items: center;
`;

const NavigationText = styled.div``;

const NavigationLink = styled.span<NavigationLinkProps>`
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.fonts.fontSize.small};
  font-weight: ${({ theme }) => theme.fonts.secondaryEngWeight.light};
  color: ${({ theme }) => theme.colors.primaryWhite};

  text-decoration: ${(props) => props.underline};
  cursor: pointer;
`;

const Divider = styled.span`
  display: inline-block;
  padding: 0 10px;
  font-size: ${({ theme }) => theme.fonts.fontSize.small};
  font-weight: ${({ theme }) => theme.fonts.secondaryEngWeight.light};
  color: ${({ theme }) => theme.colors.primaryWhite};
`;

export default ExhibitionNavigation;
