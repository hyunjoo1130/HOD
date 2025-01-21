import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { ExhibitionData } from '../types/dataTypes';
import { fetchExhibitionData } from '../utils/fetchExhibitionData';

interface ExhibitionNavigationProps {
  linkColor: string;
  myPathName?: string;
}

const ExhibitionNavigation: React.FC<ExhibitionNavigationProps> = ({
  linkColor,
  myPathName,
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const pathnames = location.pathname.split('/').slice(1);
  const queryParams = new URLSearchParams(location.search);
  const myParam = queryParams.get('name');
  const [exhibitionData, setExhibitionData] = useState<ExhibitionData[]>([]);

  // console.log('pathnames => ', pathnames);
  // console.log('queryParams => ', queryParams);
  // console.log('myParam => ', myParam);

  useEffect(() => {
    fetchExhibitionData(setExhibitionData);
  }, []);

  const goToLink = (link: string) => {
    navigate(link);
  };

  return (
    <ExhibitionNavigationContainer>
      <ExhibitionNavigationWrapper>
        <NavigationPath>
          <NavigationText>
            <NavigationLink onClick={() => goToLink('/')} color={linkColor}>
              home
            </NavigationLink>
          </NavigationText>
        </NavigationPath>
        {pathnames.map((pathname, i) => {
          return (
            <NavigationPath key={i}>
              <NavigationText>
                <Divider color={linkColor}> | </Divider>
                <NavigationLink
                  onClick={() => {
                    goToLink(`/${pathname}`);
                  }}
                  underline={i === pathnames.length - 1 ? 'underline' : 'none'}
                  color={linkColor}
                >
                  {pathname === myPathName
                    ? myParam
                    : pathname.replace('_', ' ')}
                </NavigationLink>
              </NavigationText>
            </NavigationPath>
          );
        })}
      </ExhibitionNavigationWrapper>
    </ExhibitionNavigationContainer>
  );
};

interface NavigationLinkProps {
  underline?: string;
  color?: string;
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
  color: ${(props) => props.color};

  text-decoration: ${(props) => props.underline};
  cursor: pointer;
`;

const Divider = styled.span<NavigationLinkProps>`
  display: inline-block;
  padding: 0 10px;
  font-size: ${({ theme }) => theme.fonts.fontSize.small};
  font-weight: ${({ theme }) => theme.fonts.secondaryEngWeight.light};
  color: ${(props) => props.color};
`;

export default ExhibitionNavigation;
