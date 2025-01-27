import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi'; // Ícones do react-icons
import logo from '@/assets/imgs/logo-padaria.jpg';

const NavbarContainer = styled.nav`
  background-color: #373737;
  color: #fff;
  padding: 1rem 1.2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border-bottom: 2px solid #444;
  position: relative;
  z-index: 2;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: 50%; /* Formato circular */
  overflow: hidden;
  background-color: #fff;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover; /* Ajusta a imagem dentro do container */
  }
`;

const Title = styled.span`
  font-size: 1.5rem;
  margin-left: 10px;
  font-weight: bold;
  color: #fff;
`;

const MenuToggle = styled.div`
  display: none;
  font-size: 2rem;
  color: #fff;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
    margin-top: 5px;
  }
`;


const NavLinks = styled.div<{ isOpen: boolean }>`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0;
    right: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
    height: 100vh;
    width: 250px;
    background-color: #333;
    padding: 2rem;
    transition: right 0.3s ease-in-out;
    box-shadow: -2px 0 8px rgba(0, 0, 0, 0.2);
    margin-top: 84px;
  }
`;

const NavLink = styled(Link)<{ isActive: boolean }>`
  color: #fff;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    color: #ffcc00;
  }

  ${({ isActive }) =>
    isActive &&
    `
      color: #ffcc00;
      text-decoration: underline;
    `}
`;

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation(); // Obtém a localização atual da URL

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <NavbarContainer>
      <LogoContainer>
        <Logo>
          <img src={logo} alt="Logo da Padaria" />
        </Logo>
        <Title>Padaria Senac</Title>
      </LogoContainer>
      <MenuToggle onClick={toggleMenu}>
        {menuOpen ? <FiX /> : <FiMenu />}
      </MenuToggle>
      <NavLinks isOpen={menuOpen}>
        <NavLink to="/" isActive={location.pathname === '/'} onClick={toggleMenu}>
          INÍCIO
        </NavLink>
        <NavLink to="/about" isActive={location.pathname === '/about'} onClick={toggleMenu}>
          SOBRE
        </NavLink>
        <NavLink to="/contact" isActive={location.pathname === '/contact'} onClick={toggleMenu}>
          CONTATO
        </NavLink>
      </NavLinks>
    </NavbarContainer>
  );
};

export default Navbar;
