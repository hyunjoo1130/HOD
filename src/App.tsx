import styled, { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import GlobalStyles from './styles/globalStyles';
import Home from './components/Home';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <MainContainer>
        <Home />
      </MainContainer>
    </ThemeProvider>
  );
}

const MainContainer = styled.div``;

export default App;
