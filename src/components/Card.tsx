import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  text-align: center;
`;

const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px 8px 0 0;
  margin-bottom: 1rem;
`;

const CardTitle = styled.h3`
  margin-bottom: 0.5rem;
  font-size: 1.25rem;
`;

const CardText = styled.p`
  color: #555;
`;

interface CardProps {
  title: string;
  text: string;
  image: string;
}

const Card: React.FC<CardProps> = ({ title, text, image }) => {
  return (
    <CardContainer>
      <CardImage src={image} alt={title} />
      <CardTitle>{title}</CardTitle>
      <CardText>{text}</CardText>
    </CardContainer>
  );
};

export default Card;
