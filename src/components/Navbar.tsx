import React from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom'; // Importando Link do react-router-dom
import logo from '@/assets/imgs/logo.png'; // Importando a logo

const NavbarContainer = styled.nav`
  background-color: #333;
  color: #fff;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border-bottom: 2px solid #444;
  height: 80px;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex: 1; /* Isso faz a logo e o título ocuparem o máximo de espaço à esquerda */
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  width: 50px;
  height: 50px;
  
  img {
    width: 100%;
    margin-right: 0.5rem;
  }
`;

const Title = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
  color: #fff;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
`;

const NavLink = styled(Link)<{ isActive: boolean }>`
  color: #fff;
  text-decoration: none;
  font-weight: bold;
  position: relative;

  &:hover {
    color: #ffcc00;
  }

  ${({ isActive }) =>
    isActive &&
    `
      color: #ffcc00; /* Altere a cor quando ativo */
      font-weight: bold;
      text-decoration: underline; /* Sublinha quando ativo */
    `}
`;

const Navbar: React.FC = () => {
  const location = useLocation(); // Obtém a localização atual da URL
  
  return (
    <NavbarContainer>
      <LogoContainer>
        <Logo>
          <img src={logo} alt="Logo da Padaria"/>
        </Logo>
        <Title>Padaria Senac</Title>
      </LogoContainer>
      <NavLinks>
        <NavLink to="/" isActive={location.pathname === '/'}>HOME</NavLink>
        <NavLink to="/about" isActive={location.pathname === '/about'}>SOBRE</NavLink>
        <NavLink to="/contact" isActive={location.pathname === '/contact'}>CONTATO</NavLink>
      </NavLinks>
    </NavbarContainer>
  );
};

export default Navbar;
