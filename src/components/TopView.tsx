import styled from 'styled-components';
import poster1 from '../assets/Images/Home_Img/TOP VIEW 1.jpg';
import poster2 from '../assets/Images/Home_Img/TOP VIEW 2.jpg';
import poster3 from '../assets/Images/Home_Img/TOP VIEW 3.jpg';
import poster4 from '../assets/Images/Home_Img/TOP VIEW 4.jpg';
import poster5 from '../assets/Images/Home_Img/TOP VIEW 5.jpg';

const TopView = () => {
  const posterImg = [poster1, poster2, poster3, poster4, poster5];

  return (
    <TopViewContainer>
      <Title>
        <h1>top view</h1>
        <p>인기 콘텐츠 : 많이 본 뉴스 및 전시</p>
      </Title>
      <Posterwrapper>
        {posterImg.map((img, i) => {
          return <PosterCard backgroundImage={img} key={i} />;
        })}
      </Posterwrapper>
    </TopViewContainer>
  );
};

interface PosterCardProps {
  backgroundImage: string;
}

const TopViewContainer = styled.div`
  padding: 80px 40px;
`;

const Title = styled.div`
  text-align: center;

  h1 {
    font-family: ${({ theme }) => theme.fonts.secondaryEng};
    font-weight: ${({ theme }) => theme.fonts.secondaryEngWeight.regular};
    text-transform: uppercase;
    font-size: 50px;
  }

  p {
    color: ${({ theme }) => theme.colors.gray};
    font-size: 30px;
    margin: 19px 0 45px 0;
  }
`;

const Posterwrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
`;

const PosterCard = styled.div<PosterCardProps>`
  width: 20%;
  height: 0;
  padding-bottom: 30%;

  background-image: url(${(props) => props.backgroundImage});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  cursor: pointer;

  transition: all 0.3s cubic-bezier(0.4, 0, 1, 1);

  &:hover {
    transform: translate3d(50px, 50px, 20px) scale3d(1.2, 1.2, 1);
  }
`;

export default TopView;
