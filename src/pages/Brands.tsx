import styled from 'styled-components';
import TopBanner from '../components/Brands/TopBanner';
import PageTitle from '../components/Brands/PageTitle';
import MainBrands from '../components/Brands/MainBrands';
import OtherBrands from '../components/Brands/OtherBrands';
import { useEffect } from 'react';
import { toTop } from '../utils/toTop';

const Brands = () => {
  useEffect(() => {
    toTop();
  }, []);

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
