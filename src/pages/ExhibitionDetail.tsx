import { useEffect } from 'react';
import styled from 'styled-components';
import TopBanner from '../components/ExhibitionDetail/TopBanner';
import ExhibitionAbout from '../components/ExhibitionDetail/ExhibitionAbout';
import ExhibitionPicture from '../components/ExhibitionDetail/ExhibitionPicture';
import ExhibitionInfo from '../components/ExhibitionDetail/ExhibitionInfo';
import { toTop } from '../utils/toTop';

const ExhibitionDetail = () => {
  useEffect(() => {
    toTop();
  }, []);

  return (
    <ExhibitionDetailContainer>
      {/* top banner */}
      <TopBanner />
      {/* about */}
      <ExhibitionAbout />
      {/* Images */}
      <ExhibitionPicture />
      {/* info */}
      <ExhibitionInfo />
    </ExhibitionDetailContainer>
  );
};

const ExhibitionDetailContainer = styled.div``;

export default ExhibitionDetail;
