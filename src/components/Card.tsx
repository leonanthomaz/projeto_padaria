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

const CardTitle = styled.h3`
  margin-bottom: 0.5rem;
  font-size: 1.25rem;
`;

const CardText = styled.p`
  color: #555;
`;

const Card: React.FC<{ title: string; text: string }> = ({ title, text }) => {
  return (
    <CardContainer>
      <CardTitle>{title}</CardTitle>
      <CardText>{text}</CardText>
    </CardContainer>
  );
};

export default Card;
