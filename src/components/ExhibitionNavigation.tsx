import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const ExhibitionNavigation = () => {
  const navigate = useNavigate();
  const examplePathnames = ['exhibition', '달항아리를 만든 곳, 금사리'];

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
        {examplePathnames.map((path, i) => {
          return (
            <NavigationPath key={i}>
              <Divider> | </Divider>
              <NavigationText>
                {i === examplePathnames.length - 1 ? (
                  <NavigationLink
                    onClick={() => goToLink(`/exhibition_detail`)}
                    underline="underline"
                  >
                    {path}
                  </NavigationLink>
                ) : (
                  <NavigationLink onClick={() => goToLink(`/exhibitions`)}>
                    {path}
                  </NavigationLink>
                )}
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
}

const ExhibitionNavigationContainer = styled.div``;

const ExhibitionNavigationWrapper = styled.div`
  display: flex;
  width: 25%;
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
