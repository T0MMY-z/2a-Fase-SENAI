// src/components/Home.js
import React from 'react';
import Invitation from './Invitation';

const Home = () => {
  return (
    <main style={{
      padding: '20px',
      backgroundColor: 'var(--cor-2)',
      color: 'var(--cor-4)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center', // Centraliza horizontalmente
      justifyContent: 'center', // Centraliza verticalmente
      minHeight: '100vh', // Garante que o conteúdo ocupe a altura total da tela
      textAlign: 'center', // Centraliza o texto
    }}>
      <h2>Bem-vindo à nossa nova farmácia!</h2>
      <p>
        Estamos animados em anunciar que a Farmácia Nova Direção mudou de localização!
        Venha nos visitar e conhecer nossa nova marca.
      </p>
      <p>
        Convidamos todos os nossos clientes para a nossa inauguração. Esperamos vê-lo lá!
      </p>
      <Invitation />
    </main>
  );
};

export default Home;
