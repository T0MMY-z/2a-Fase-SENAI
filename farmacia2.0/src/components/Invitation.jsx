// src/components/Invitation.js
import React from 'react';

const Invitation = () => {
  return (
    <section style={{
      backgroundColor: 'var(--cor-5)',
      padding: '10px',
      borderRadius: '5px',
      textAlign: 'center', // Centraliza o texto dentro do convite
      marginTop: '20px', // Adiciona um espaço entre a descrição e o convite
    }}>
      <h3 style={{ color: 'var(--cor-1)' }}>Inauguração!</h3>
      <p style={{ color: 'var(--cor-4)' }}>Data: 01 de Novembro de 2024</p>
      <p style={{ color: 'var(--cor-4)' }}>Horário: 9h às 17h</p>
    </section>
  );
};

export default Invitation;
