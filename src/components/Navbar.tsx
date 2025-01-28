import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi'; 

const NavbarContainer = styled.nav`
  background-color: rgba(55, 55, 55, 0.8);
  color: #fff;
  padding: 1.5rem 2.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border-bottom: 2px solid #444;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  backdrop-filter: blur(5px);
  
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  
`;

// const Logo = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   width: 60px;
//   height: 60px;
//   overflow: hidden;

//   img {
//     width: 100%;
//     height: 100%;
//     object-fit: contain;
//   }
// `;

const Title = styled.span`
  font-size: 1.5rem;
  margin-left: 10px;
  font-weight: bold;
  color: #ffcc00; /* Letras douradas para combinar com a logo */
`;

const MenuToggle = styled.div`
  display: none;
  font-size: 2rem;
  color: #fff;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const NavLinks = styled.div<{ isOpen: boolean }>`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 74px;
    right: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
    height: 100vh;
    width: 250px;
    background-color: #333;
    padding: 2rem;
    transition: right 0.3s ease-in-out;
    box-shadow: -2px 0 8px rgba(0, 0, 0, 0.2);
    z-index: 999; /* Garante que o menu estará acima de outros elementos */

  }
`;

const NavLink = styled(Link)<{ isActive: boolean }>`
  color: #fff;
  text-decoration: none;
  font-weight: bold;

  @media (max-width: 768px) {
    margin-top: 20px;
  }

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
        {/* <Logo>
          <img src={logoTransparent} alt="Logo da Padaria" />
        </Logo> */}
        <Title>Pão te Kero</Title>
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
