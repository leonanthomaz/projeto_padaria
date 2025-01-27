import React from 'react';
import styled from 'styled-components';
import aboutImage from '@/assets/imgs/balcao.jpg';
import homemPao from '@/assets/imgs/homem-pao.png';
import quadroIdeia from '@/assets/imgs/quadro-ideia.png';
import latasLixoReciclaveis from '@/assets/imgs/trash.png';

const AboutContainer = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 1rem;
  text-align: left;
`;

const AboutImage = styled.div`
  background-image: url(${aboutImage});
  background-size: cover;
  background-position: center;
  height: 300px;
  border-radius: 10px;
  margin-bottom: 2rem;
`;

const Paragraph = styled.p`
  font-size: 1rem;
  color: #555;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const InitiativesContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;
  margin-top: 2rem;
`;

const Initiative = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const InitiativeIcon = styled.img`
  width: 100px;
  height: 100px;
  margin-bottom: 1rem;
`;

const InitiativeText = styled.p`
  font-size: 1rem;
  color: #555;
`;

const About: React.FC = () => {
  return (
    <AboutContainer>
      <Title>Sobre a Pão te Kero</Title>
      <AboutImage />
      <Paragraph>
        Na "Pão te Kero", estamos comprometidos em fazer mais do que apenas fornecer pães frescos e deliciosos. Queremos contribuir para a nossa comunidade de maneira significativa. Conheça algumas de nossas iniciativas:
      </Paragraph>
      <InitiativesContainer>
        <Initiative>
          <InitiativeIcon src={homemPao} alt="Oficinas de Educação" />
          <InitiativeText>Oficinas de Educação</InitiativeText>
        </Initiative>
        <Initiative>
          <InitiativeIcon src={quadroIdeia} alt="Brinquedos Recicláveis" />
          <InitiativeText>Brinquedos com Materiais Recicláveis</InitiativeText>
        </Initiative>
        <Initiative>
          <InitiativeIcon src={latasLixoReciclaveis} alt="Pegue e Leve" />
          <InitiativeText>Pegue e Leve</InitiativeText>
        </Initiative>
      </InitiativesContainer>
      <Paragraph>
        Venha visitar a "Pão te Kero" e descubra como podemos fazer a diferença juntos.
      </Paragraph>
    </AboutContainer>
  );
};

export default About;
