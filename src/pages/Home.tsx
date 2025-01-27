import React from 'react';
import styled from 'styled-components';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Header from '../components/HeaderComponent'; // Importando o Header ajustado
import Card from '../components/Card';
import carouselImg1 from '@/assets/imgs/pao-acucar.jpg';
import carouselImg2 from '@/assets/imgs/pao-assado.jpg';
import carouselImg3 from '@/assets/imgs/torta.jpg';
import homemPao from '@/assets/imgs/homem-pao.png';
import quadroIdeia from '@/assets/imgs/quadro-ideia.png';
import latasLixoReciclaveis from '@/assets/imgs/trash.png';

const PageContainer = styled.div`
  font-family: Arial, sans-serif;
  color: #333;
  margin-top: 85px;
`;

const Section = styled.section`
  margin: 2rem auto;
  max-width: 1200px;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2rem;
  color: #444;
  margin-bottom: 1.5rem;
`;

const Paragraph = styled.p`
  font-size: 1rem;
  color: #555;
  line-height: 1.6;
  margin-bottom: 2rem;
`;

const CarouselWrapper = styled.div`
  margin: 2rem auto;
  max-width: 800px;
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
`;

const Footer = styled.footer`
  background-color: #f8f9fa;
  padding: 1.5rem 0;
  margin-top: 2rem;
  border-top: 1px solid #ddd;
  font-size: 0.9rem;
  text-align: center;
`;

const Home: React.FC = () => (
  <PageContainer>
    <Header />

    <Section>
      <Title>Descubra uma nova experiência</Title>
      <Paragraph>
        Bem-vindo à Pão te Kero! Nossa padaria oferece mais do que pães frescos e saborosos. Aqui, você encontra
        aprendizado, sustentabilidade e uma conexão genuína com a comunidade. Descubra como transformar ações simples
        em mudanças significativas.
      </Paragraph>
    </Section>

    <CarouselWrapper>
      <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false}>
        <div>
          <img src={carouselImg1} alt="Pães deliciosos" />
        </div>
        <div>
          <img src={carouselImg2} alt="Oficinas de panificação" />
        </div>
        <div>
          <img src={carouselImg3} alt="Produtos frescos todos os dias" />
        </div>
      </Carousel>
    </CarouselWrapper>

    <Section>
      <Title>Nossas Iniciativas</Title>
      <CardGrid>
        <Card
          title="Oficinas de Panificação"
          text="Aprenda os segredos do pão artesanal com nossos especialistas em aulas práticas."
          image={homemPao}
        />
        <Card
          title="Sustentabilidade"
          text="Reduzimos resíduos e transformamos materiais recicláveis em novos propósitos."
          image={quadroIdeia}
        />
        <Card
          title="Alimentos para Todos"
          text="Contribuímos para a comunidade com doações de alimentos próximos da validade."
          image={latasLixoReciclaveis}
        />
      </CardGrid>
    </Section>

    <Footer>
      <p>
        <strong>Pão te Kero</strong> - Rua dos Poderes, 221 - Centro, RJ
      </p>
      <p>Telefone: (21) 99765-6340 | E-mail: padariapaotekero@gmail.com</p>
    </Footer>
  </PageContainer>
);

export default Home;
