import React from 'react';
// Router
import { useRoutes } from 'react-router-dom';
import routes from './router/routes';

import styled, { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import GlobalStyles from './styles/globalStyles';
import Header from './components/Header';
import Footer from './components/Footer';
import { RecoilRoot } from 'recoil';

const App: React.FC = () => {
  const routing = useRoutes(routes);

  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <MainContainer>
          <Header />
          {routing}
          <Footer />
        </MainContainer>
      </ThemeProvider>
    </RecoilRoot>
  );
};

const MainContainer = styled.div`
  position: relative;
`;

export default App;
