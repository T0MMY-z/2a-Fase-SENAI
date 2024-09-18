import React, { useState } from 'react';

function ConceitoNotas() {
  const [nota1, setNota1] = useState('');
  const [nota2, setNota2] = useState('');
  const [resultado, setResultado] = useState(null);

  const calcularMedia = () => {
    const n1 = parseFloat(nota1);
    const n2 = parseFloat(nota2);
    
    if (isNaN(n1) || isNaN(n2)) {
      alert('Por favor, insira notas válidas.');
      return;
    }

    const media = (n1 + n2) / 2;
    let conceito;

    if (media > 9.0 && media <= 10.0) {
      conceito = 'A';
    } else if (media > 7.5 && media <= 9.0) {
      conceito = 'B';
    } else if (media > 6.0 && media <= 7.5) {
      conceito = 'C';
    } else if (media > 4.0 && media <= 6.0) {
      conceito = 'D';
    } else {
      conceito = 'E';
    }

    setResultado({ media, conceito });
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Cálculo de Média e Conceito</h1>
      <p>
        Faça um programa que leia duas notas parciais obtidas por um aluno qualquer numa disciplina qualquer ao longo de
        um semestre qualquer, e calcule a sua média. De posse da média, esta deve ser convertida em conceito que é o novo
        hype do momento na educação! A conversão deve seguir a regra descrita abaixo:
      </p>
      <ul>
        <li>Entre [9.0] e [10.0] A</li>
        <li>Entre [7.5] e [9.0] B</li>
        <li>Entre [6.0] e [7.5] C</li>
        <li>Entre [4.0] e [6.0] D</li>
        <li>Entre [0.0] e [4.0] E</li>
      </ul>
      <div>
        <label>
          Nota 1:
          <input 
            type="number" 
            step="0.1" 
            value={nota1} 
            onChange={(e) => setNota1(e.target.value)} 
          />
        </label>
      </div>
      <div>
        <label>
          Nota 2:
          <input 
            type="number" 
            step="0.1" 
            value={nota2} 
            onChange={(e) => setNota2(e.target.value)} 
          />
        </label>
      </div>
      <button onClick={calcularMedia}>Calcular</button>

      {resultado && (
        <div style={{ marginTop: '20px' }}>
          <h2>Resultado:</h2>
          <p>Nota 1: {nota1}</p>
          <p>Nota 2: {nota2}</p>
          <p>Média: {resultado.media.toFixed(1)}</p>
          <p>Conceito: {resultado.conceito}</p>
        </div>
      )}
    </div>
  );
}

export default ConceitoNotas;
