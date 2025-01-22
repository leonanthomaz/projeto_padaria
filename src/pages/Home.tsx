import React from 'react';
import styled from 'styled-components';
import Card from '../components/Card';
import amassandoPao from '@/assets/imgs/amassando-pao.jpg';
import balcao from '@/assets/imgs/balcao.jpg';
import balcao2 from '@/assets/imgs/balcao2.jpg';
import boloMorango from '@/assets/imgs/bolo-morango.jpg';
import paoAcucar from '@/assets/imgs/pao-acucar.jpg';
import paoAssado from '@/assets/imgs/pao-assado.jpg';
import torta from '@/assets/imgs/torta.jpg';
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
          image={amassandoPao} 
        />
        <Card 
          title="Nosso Balcão" 
          text="Sempre repleto de delícias para você." 
          image={balcao} 
        />
        <Card 
          title="Bolo de Morango" 
          text="Frescor e sabor em cada fatia." 
          image={boloMorango} 
        />
        <Card 
          title="Pão de Açúcar" 
          text="Tradicional e cheio de sabor." 
          image={paoAcucar} 
        />
        <Card 
          title="Pão Assado" 
          text="Saindo do forno, quentinho pra você." 
          image={paoAssado} 
        />
        <Card 
          title="Torta Especial" 
          text="Delícia artesanal com um toque especial." 
          image={torta} 
        />
        <Card 
          title="Balcão Elegante" 
          text="Seu lugar de escolha para momentos doces." 
          image={balcao2} 
        />
      </Grid>
      <Footer>© 2025 Padaria - Todos os direitos reservados.</Footer>
    </>
  );
};

export default Home;
