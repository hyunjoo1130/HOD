import styled from 'styled-components';
import Header from './Header';
import MainBanner from './MainBanner';
import MenuBanner from './MenuBanner';

const Home = () => {
  return (
    <HomeContainer>
      {/* header */}
      <Header />
      {/* main banner */}
      <MainBanner />
      {/* menu banner */}
      <MenuBanner />
    </HomeContainer>
  );
};

const HomeContainer = styled.div`
  margin: 0 auto;
`;

// practice

// interface TestImageContainerProps {
//   image?: string;
//   hoverImage?: string;
// }

// const TestImageContainer = styled.div<TestImageContainerProps>`
//   width: 50%;
//   height: 500px;
//   margin: 0 auto;
//   margin-top: 50px;
//   background-image: url(${(props) => props.image});
//   background-size: cover;
//   background-position: center;
//   transition: background-image 0.3s;

//   &:hover {
//     background-image: url(${(props) => props.hoverImage});
//   }
// `;

export default Home;
