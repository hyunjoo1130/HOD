import React from 'react';
import styled from 'styled-components';
import TopBanner from '../components/AboutUs/TopBanner';
import DojagiSection from '../components/AboutUs/DojagiSection';
import OurMissionSection from '../components/AboutUs/OurMissionSection';

const AboutUs = () => {
  return <AboutUsContainer>
    {/* top banner */}
    <TopBanner />
    {/* dojagi */}
    <DojagiSection />
    {/* our misson */}
    <OurMissionSection />
  </AboutUsContainer>;
};

const AboutUsContainer = styled.div``;

export default AboutUs;
