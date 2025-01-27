import React from 'react';
import styled from 'styled-components';
import Card from '../components/Card';
import homemPao from '@/assets/imgs/homem-pao.png';
import quadroIdeia from '@/assets/imgs/quadro-ideia.png';
import latasLixoReciclaveis from '@/assets/imgs/trash.png';
import boloMorango from '@/assets/imgs/bolo-morango.jpg';
import paoAssado from '@/assets/imgs/pao-assado.jpg';
import Header from '../components/HeaderComponent';

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
      <Header />
      <Grid>
        <Card 
          title="Amassando o Pão" 
          text="O segredo de um pão perfeito começa aqui." 
          image={homemPao} 
        />
        <Card 
          title="Brinquedos Criativos" 
          text="Transformando materiais recicláveis em diversão." 
          image={quadroIdeia} 
        />
        <Card 
          title="Reciclagem Consciente" 
          text="Reduza, reuse e recicle!" 
          image={latasLixoReciclaveis} 
        />
        <Card 
          title="Bolo de Morango" 
          text="Frescor e sabor em cada fatia." 
          image={boloMorango} 
        />
        <Card 
          title="Pão Assado" 
          text="Saindo do forno, quentinho pra você." 
          image={paoAssado} 
        />
      </Grid>
      <Footer>© 2025 Padaria - Todos os direitos reservados.</Footer>
    </>
  );
};

export default Home;
