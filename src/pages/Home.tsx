import styled from 'styled-components';
import MainBanner from '../components/Home/MainBanner';
import MenuBanner from '../components/Home/MenuBanner';
import Question from '../components/Home/Question';
import VirtualExperience from '../components/Home/VirtualExperience';
import TopView from '../components/Home/TopView';
import BrandIntro from '../components/Home/BrandIntro';
import { useEffect } from 'react';
import { toTop } from '../utils/toTop';

const Home = () => {
  useEffect(() => {
    toTop();
  }, []);

  return (
    <HomeContainer>
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
    </HomeContainer>
  );
};

const HomeContainer = styled.div`
  position: relative;
  margin: 0 auto;
`;

export default Home;
