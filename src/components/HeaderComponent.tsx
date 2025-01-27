import styled from 'styled-components';
import img1 from '@/assets/imgs/balcao-pessoa.jpg';
import logo from '@/assets/imgs/logo-padaria.jpg';

const HeaderStyled = styled.header`
  position: relative;
  background: url(${img1}) center/cover no-repeat;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
  overflow: hidden;
  z-index: 1;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
`;

const Logo = styled.div`
  position: relative;
  z-index: 2; /* Para garantir que a logo fique acima do overlay */
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 150px;
  border-radius: 50%; /* Formato circular */
  overflow: hidden;
  background-color: #fff;
  margin-bottom: 1rem; /* Espaço entre a logo e o texto */

  img {
    width: 100%;
    height: 100%;
    object-fit: cover; /* Ajusta a imagem dentro do container */
  }
`;

const HeaderContent = styled.div`
  position: relative;
  z-index: 2; /* Para garantir que o texto fique acima do overlay */
  text-align: center;
  font-size: 1.8rem;
  font-weight: bold;
`;

const Header: React.FC = () => (
  <HeaderStyled>
    <Overlay />
    <Logo>
      <img src={logo} alt="Logo da Padaria" />
    </Logo>
    <HeaderContent>Bem-vindo à nossa padaria!</HeaderContent>
  </HeaderStyled>
);

export default Header;
