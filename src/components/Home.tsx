import styled from 'styled-components';
import Header from './Header';
import MainBanner from './MainBanner';
import MenuBanner from './MenuBanner';
import Question from './Question';
import Footer from './Footer';
import VirtualExperience from './VirtualExperience';
import TopView from './TopView';
import BrandIntro from './BrandIntro';

const Home = () => {
  return (
    <HomeContainer>
      {/* header */}
      <Header />
      {/* main banner */}
      <MainBanner />
      {/* menu banner */}
      <MenuBanner />
      {/* ask a question */}
      <Question />
      {/* virtual experience */}
      <VirtualExperience />
      {/* top view */}
      <TopView />
      {/* brand intro */}
      <BrandIntro />
      {/* footer  */}
      <Footer />
    </HomeContainer>
  );
};

const HomeContainer = styled.div`
  margin: 0 auto;
`;

export default Home;
