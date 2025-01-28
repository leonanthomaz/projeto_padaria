import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: rgba(55, 55, 55, 0.8);
  padding: 1.5rem 0;
  margin-top: 2rem;
  border-top: 1px solid #ddd;
  font-size: 0.9rem;
  text-align: center;

  color: #fff;

  strong, span{
    color: #ffcc00;
  }
`;

const Footer: React.FC = () => (
  <FooterContainer>
    <p>
      <strong>Pão te Kero</strong> - Rua dos Poderes, 221 - Centro, RJ
    </p>
    <p>Telefone: (21) 99765-6340 | <span>E-mail: padariapaotekero@gmail.com</span></p>
  </FooterContainer>
);

export default Footer;
