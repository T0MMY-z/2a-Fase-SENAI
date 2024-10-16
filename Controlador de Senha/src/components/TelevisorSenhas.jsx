import React from 'react';
import './TelevisorSenhas.css';  

const TelevisorSenhas = ({ senhaAtual, tipo }) => {
  return (
    <div className="televisor-container">
      <div className="televisor-header">{tipo}</div>
      <div className="televisor-senha">{senhaAtual}</div>
    </div>
    
  );
};

export default TelevisorSenhas;