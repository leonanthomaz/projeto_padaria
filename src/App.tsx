import React from 'react';
import Navbar from './components/Navbar';
import AppRoute from './routes/AppRoute';

const App: React.FC = () => {
  return (
    <div>
      <Navbar /> {/* Navbar agora está global */}
      <AppRoute /> {/* Rotas da aplicação */}
    </div>
  );
};

export default App;
