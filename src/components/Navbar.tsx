import React from 'react';
import styled from 'styled-components';

const NavbarContainer = styled.nav`
  background-color: #333;
  color: #fff;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    color: #fff;
    text-decoration: none;
    margin: 0 1rem;
    font-weight: bold;

    &:hover {
      color: #ffcc00;
    }
  }
`;

const Logo = styled.div`
  font-size: 1.5rem;
`;

const NavLinks = styled.div`
  display: flex;
`;

const Navbar: React.FC = () => {
  return (
    <NavbarContainer>
      <Logo>Padaria</Logo>
      <NavLinks>
        <a href="/">Home</a>
        <a href="/about">Sobre</a>
        <a href="/products">Produtos</a>
        <a href="/contact">Contato</a>
      </NavLinks>
    </NavbarContainer>
  );
};

export default Navbar;
