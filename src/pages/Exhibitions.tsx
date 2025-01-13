import React, { useEffect } from 'react';
import styled from 'styled-components';
import TopBanner from '../components/Exhibitions/TopBanner';
import PageTitle from '../components/Exhibitions/PageTitle';
import ExhibitionView from '../components/Exhibitions/ExhibitionView';
import { toTop } from '../utils/toTop';

const Exhibitions = () => {
  useEffect(() => {
    toTop();
  }, []);

  return (
    <ExhibitionsContainer>
      {/* top banner */}
      <TopBanner />
      {/* page title */}
      <PageTitle />
      {/* exhibition view */}
      <ExhibitionView />
    </ExhibitionsContainer>
  );
};

const ExhibitionsContainer = styled.div``;

export default Exhibitions;
