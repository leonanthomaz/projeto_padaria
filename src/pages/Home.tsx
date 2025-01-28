import React from 'react';
import styled from 'styled-components';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Header from '../components/HeaderComponent';
import Footer from '../components/Footer';
import Card from '../components/Card';
import paoDeAçucar from '@/assets/imgs/pao-de-acucar.jpg';
import paoAssado from '@/assets/imgs/pao-assado.jpg';
import tortaEspecial from '@/assets/imgs/torta-especial.jpg';
import oficinaIdeias from '@/assets/imgs/oficina-ideias.png';
import brinquedoReciclavel from '@/assets/imgs/brinquedo-reciclavel.png';
import ajudaColetiva from '@/assets/imgs/ajuda-coletiva.png';
import parallaxImage from '@/assets/imgs/parallax-pao.jpg'; // Imagem para o parallax

const PageContainer = styled.div`
  font-family: Arial, sans-serif;
  color: #333;
  padding: 2rem;
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

const ParallaxSection = styled.div`
  position: relative;
  background-image: url(${parallaxImage});
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ParallaxOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Escurece a imagem */
`;

const ParallaxText = styled.h2`
  position: relative;
  color: white;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.7);
  font-size: 2rem;
  text-align: center;
  padding: 0 1rem;
`;

const FinalSection = styled.div`
  background-color: #f8f8f8;
  padding: 3rem 1rem;
  text-align: center;
`;

const FinalTitle = styled.h2`
  font-size: 2.5rem;
  color: #444;
  margin-bottom: 1.5rem;
`;

const FinalParagraph = styled.p`
  font-size: 1.2rem;
  color: #555;
  line-height: 1.8;
  margin-bottom: 2rem;
`;

const CallToActionButton = styled.a`
  display: inline-block;
  background-color: #ff7043;
  color: white;
  font-size: 1rem;
  padding: 0.8rem 1.5rem;
  border-radius: 5px;
  text-decoration: none;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e64a19;
  }
`;

const Home: React.FC = () => (
  <>
  <Header />
  <PageContainer>
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
          <img src={paoDeAçucar} alt="Pães deliciosos" />
        </div>
        <div>
          <img src={paoAssado} alt="Oficinas de panificação" />
        </div>
        <div>
          <img src={tortaEspecial} alt="Produtos frescos todos os dias" />
        </div>
      </Carousel>
    </CarouselWrapper>

    <Section>
      <Title>Nossas Iniciativas</Title>
      <CardGrid>
        <Card
          title="Oficinas de Educação"
          text="Compartilhamos conhecimentos sobre panificação. Participe de aulas práticas e aprenda desde a escolha dos ingredientes até o pão sair do forno."
          image={oficinaIdeias}
        />
        <Card
          title="Brinquedos com Materiais Recicláveis"
          text="Transformamos resíduos recicláveis em brinquedos que incentivam a criatividade e promovem a consciência ambiental."
          image={brinquedoReciclavel}
        />
        <Card
          title="Pegue e Leve"
          text="Itens próximos da validade são oferecidos gratuitamente para ajudar a reduzir o desperdício e apoiar quem mais precisa."
          image={ajudaColetiva}
        />
      </CardGrid>
    </Section>

    <ParallaxSection>
      <ParallaxOverlay />
      <ParallaxText>
        "Pães feitos com amor, cuidado e dedicação. Venha experimentar o sabor da tradição."
      </ParallaxText>
    </ParallaxSection>

    <FinalSection>
      <FinalTitle>Venha nos conhecer!</FinalTitle>
      <FinalParagraph>
        Estamos ansiosos para receber você em nossa padaria. Seja para experimentar nossos produtos deliciosos ou
        participar de uma de nossas iniciativas, estamos aqui para fazer a diferença. 
      </FinalParagraph>
      <CallToActionButton href="#contato">Entre em contato</CallToActionButton>
    </FinalSection>
  </PageContainer>
  <Footer />
  </>
);

export default Home;
