import styled from 'styled-components';
import TopBanner from '../components/News/TopBanner';
import PageTitle from '../components/News/PageTitle';
import MainNews from '../components/News/MainNews';
import OtherNews from '../components/News/OtherNews';
import { useEffect } from 'react';
import { toTop } from '../utils/toTop';

const News = () => {
  useEffect(() => {
    toTop();
  }, []);

  return (
    <NewsContainer>
      {/* top banner */}
      <TopBanner />
      {/* title */}
      <PageTitle />
      {/* main news */}
      <MainNews />
      {/* other news */}
      <OtherNews />
    </NewsContainer>
  );
};

const NewsContainer = styled.div``;

export default News;
