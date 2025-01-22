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

const Footer = styled.footer`
  background-color: #333;
  color: #fff;
  text-align: center;
  padding: 1rem;
  margin-top: 2rem;
`;

const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <Header>Bem-vindo à nossa padaria!</Header>
      <Grid>
        <Card title="Pão Francês" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
        <Card title="Croissant" text="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris." />
        <Card title="Bolo de Cenoura" text="Duis aute irure dolor in reprehenderit in voluptate velit esse." />
        <Card title="Torta de Maçã" text="Excepteur sint occaecat cupidatat non proident, sunt in culpa." />
      </Grid>
      <Footer>© 2025 Padaria - Todos os direitos reservados.</Footer>
    </>
  );
};

export default Home;
