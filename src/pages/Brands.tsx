import React from 'react';
import styled from 'styled-components';
import TopBanner from '../components/Brands/TopBanner';
import PageTitle from '../components/Brands/PageTitle';
import MainBrands from '../components/Brands/MainBrands';
import OtherBrands from '../components/Brands/OtherBrands';

const Brands = () => {
  return (
    <BrandsContainer>
      {/* top banner */}
      <TopBanner />
      {/* page title */}
      <PageTitle />
      {/* main brands section */}
      <MainBrands />
      {/* other brands */}
      <OtherBrands />
    </BrandsContainer>
  );
};

const BrandsContainer = styled.div``;

export default Brands;
