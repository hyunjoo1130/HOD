import React, { useEffect } from 'react';
import styled from 'styled-components';
import TopBanner from '../components/BrandDetail/TopBanner';
import IntroSection from '../components/BrandDetail/IntroSection';
import { toTop } from '../utils/toTop';
import BrandProducts from '../components/BrandDetail/BrandProducts';

const BrandDetail = () => {
  useEffect(() => {
    toTop();
  }, []);

  return (
    <BrandDetailContainer>
      {/* top banner */}
      <TopBanner />
      {/* brand intro */}
      <IntroSection />
      {/* brand product intro */}
      <BrandProducts />
    </BrandDetailContainer>
  );
};

const BrandDetailContainer = styled.div``;

export default BrandDetail;
