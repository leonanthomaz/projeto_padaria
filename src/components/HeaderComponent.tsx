import styled from 'styled-components';
import img1 from '@/assets/imgs/balcao-pessoa.jpg';

const HeaderStyled = styled.header`
  position: relative;
  background: url(${img1}) center/cover no-repeat;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 2rem;
  font-weight: bold;
  overflow: hidden;
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

const HeaderContent = styled.div`
  position: relative;
  z-index: 2; /* Para garantir que o texto fique acima do overlay */
`;

const Header: React.FC = () => (
  <HeaderStyled>
    <Overlay />
    <HeaderContent>Bem-vindo à nossa padaria!</HeaderContent>
  </HeaderStyled>
);

export default Header;
