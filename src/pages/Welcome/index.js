// src\pages\Welcome\index.js

import React from 'react';
import './styles.css';
import { useNavigate } from 'react-router-dom';

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div className="welcome-container">
      <h1>Bem-vindo ao Barcelona FC</h1>
      <h2>visca barça y visca catalunya</h2>
      <p>Escolha uma opção para continuar:</p>
      <div className="button-group">
        <button onClick={() => navigate('/cadastro')}>Cadastrar jogador</button>
        <button onClick={() => navigate('/lista')}>Listar jogadores</button>
      </div>
    </div>
  );
};

export default Welcome;
