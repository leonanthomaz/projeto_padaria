import React from 'react';
import styled from 'styled-components';
import aboutImage from '@/assets/imgs/balcao.jpg';

const AboutContainer = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  font-family: Arial, sans-serif;
  margin-top: 85px;

`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 1rem;
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
`;

const Paragraph = styled.p`
  font-size: 1rem;
  color: #555;
  line-height: 1.6;
`;

const List = styled.ul`
  margin: 1rem 0;
  padding-left: 1.5rem;
  list-style: disc;
  color: #555;
`;

const Footer = styled.footer`
  background-color: #f8f9fa;
  padding: 1.5rem 0;
  margin-top: 2rem;
  border-top: 1px solid #ddd;
  font-size: 0.9rem;
  text-align: center;
`;

const About: React.FC = () => (
  <AboutContainer>
    <Title>Quem Somos</Title>
    <AboutImage />
    <Paragraph>
      Na Pão te Kero, acreditamos que o pão é mais do que alimento – é uma forma de conectar pessoas, compartilhar histórias
      e fazer a diferença. Desde nossa fundação, temos o compromisso de trazer qualidade, sustentabilidade e ações sociais
      para nossa comunidade.
    </Paragraph>

    <Section>
      <Subtitle>Nossas Missões</Subtitle>
      <List>
        <li>Promover aprendizado através de oficinas de panificação.</li>
        <li>Reduzir desperdícios com iniciativas sustentáveis.</li>
        <li>Garantir acesso a alimentos para todos na comunidade.</li>
      </List>
    </Section>
    <Footer>
      <p>
        <strong>Pão te Kero</strong> - Rua dos Poderes, 221 - Centro, RJ
      </p>
      <p>Telefone: (21) 99765-6340 | E-mail: padariapaotekero@gmail.com</p>
    </Footer>
  </AboutContainer>
);

export default About;
