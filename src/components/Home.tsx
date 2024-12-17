import React from 'react';
import styled from 'styled-components';
import { Image, ImageContainer } from './CommonStyles';
import logo from '../assets/HOD.png';

const Home = () => {
  return (
    <HomeContainer>
      <ImageContainer width="30%">
        <Image src={logo} />
      </ImageContainer>
    </HomeContainer>
  );
};

const HomeContainer = styled.div`
  padding: 100px;
  margin: 0 auto;
  text-align: center;
`;

export default Home;
