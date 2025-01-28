import React from 'react';
import styled from 'styled-components';
import aboutImage from '@/assets/imgs/balcao.jpg';
import Card from '../components/Card';
import Footer from '../components/Footer'; // Importando o Footer separado
import woman from '@/assets/imgs/woman-160281_1280.png';
import workshop from '@/assets/imgs/ai-generated-9340329_1280.png';
import recycling from '@/assets/imgs/recycling-160925_1280.png';

const AboutContainer = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  font-family: Arial, sans-serif;
  margin-top: 70px;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 1rem;
  text-align: center;
`;

const AboutImage = styled.div`
  background-image: url(${aboutImage});
  background-size: cover;
  background-position: center;
  height: 300px;
  border-radius: 10px;
  margin-bottom: 2rem;
`;

const Section = styled.section`
  margin-top: 2rem;
`;

const Subtitle = styled.h2`
  font-size: 2rem;
  color: #444;
  margin-bottom: 1rem;
  text-align: center;
`;

const Paragraph = styled.p`
  font-size: 1rem;
  color: #555;
  line-height: 1.6;
  text-align: justify;
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
`;

const About: React.FC = () => (
  <>
  <AboutContainer>
    <Title>Quem Somos</Title>
    <AboutImage />
    <Paragraph>
      Na <strong>Pão te Kero</strong>, acreditamos que o pão é mais do que alimento – é uma forma de conectar pessoas,
      compartilhar histórias e transformar vidas. Desde nossa fundação, nosso compromisso tem sido trazer qualidade,
      sustentabilidade e impacto social positivo à nossa comunidade.
    </Paragraph>

    <Section>
      <Subtitle>Nossas Missões</Subtitle>
      <CardGrid>
        <Card
          title="Oficinas de Panificação"
          text="Promovemos aprendizado através de oficinas práticas que ensinam desde a seleção dos ingredientes até a finalização dos produtos."
          image={workshop}
        />
        <Card
          title="Sustentabilidade"
          text="Adotamos práticas responsáveis para reduzir o impacto ambiental e criar um futuro mais verde para nossa comunidade."
          image={recycling}
        />
        <Card
          title="Alimentos para Todos"
          text="Garantimos que ninguém fique sem acesso a alimentos de qualidade, por meio de iniciativas de doação e combate ao desperdício."
          image={woman}
        />
      </CardGrid>
    </Section>
  </AboutContainer>
  <Footer />
  </>
);

export default About;
