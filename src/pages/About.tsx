import React from 'react';
import styled from 'styled-components';
import aboutImage from '@/assets/imgs/balcao.jpg'; // Imagem ilustrativa para o About

const AboutContainer = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 1rem;
  text-align: left; /* Agora o título ficará alinhado à esquerda */
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

const About: React.FC = () => {
  return (
    <AboutContainer>
      <Title>Sobre a Padaria Senac</Title>
      <AboutImage /> {/* Imagem ilustrativa */}
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vestibulum justo sit amet nulla eleifend, a gravida orci auctor. Integer feugiat, purus eu aliquam convallis, nisi metus congue sapien, non tempus purus arcu nec libero. Proin sagittis consequat nisi, ac vulputate justo dictum eget. Curabitur cursus eros at risus cursus, id tincidunt lorem iaculis.
      </Paragraph>
      <Paragraph>
        Aliquam erat volutpat. Curabitur at magna nisl. Nam efficitur ligula a felis sodales sollicitudin. Nulla facilisi. Integer vulputate risus vel sapien hendrerit, sit amet congue orci bibendum. Nulla facilisi. Aenean volutpat vehicula lectus et auctor.
      </Paragraph>
      <Paragraph>
        Duis euismod velit et erat pharetra, ac tincidunt nisi vehicula. Etiam et velit a odio posuere tempus in eu eros. In eget odio magna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed euismod lectus ut neque placerat, in auctor nisi cursus.
      </Paragraph>
    </AboutContainer>
  );
};

export default About;
