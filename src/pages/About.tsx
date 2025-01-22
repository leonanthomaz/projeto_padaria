import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Card from '../components/Card';

const Header = styled.header`
  background: url('https://via.placeholder.com/1920x300') center/cover no-repeat;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 2rem;
  font-weight: bold;
`;

const Grid = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  padding: 2rem;
`;



const About: React.FC = () => {
  return (
    <>
      <Navbar />
      <h1>Sobre</h1>
    </>
  );
};

export default About;
