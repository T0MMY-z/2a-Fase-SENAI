import React, { useState } from 'react';
import './DEMOcracia.css'

function DEMOcracia() {
  const [age1, setAge1] = useState('');
  const [age2, setAge2] = useState('');
  const [age3, setAge3] = useState('');
  const [age4, setAge4] = useState('');
  const [result, setResult] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const totalExperienceChapa1 = Number(age1) + Number(age2);
    const totalExperienceChapa2 = Number(age3) + Number(age4);
    
    if (totalExperienceChapa1 > totalExperienceChapa2) {
      setResult('Chapa 1 tem mais experiência.');
    } else if (totalExperienceChapa1 < totalExperienceChapa2) {
      setResult('Chapa 2 tem mais experiência.');
    } else {
      setResult('As chapas têm a mesma experiência.');
    }
  };

  return (
    <div>
        <div className='form-container'>
            <div className='input-container'>
      <h1>DEMOcracia</h1>
      <form onSubmit={handleSubmit}>
        <h2>Chapa 1</h2>
        <input
          type="number"
          placeholder="Idade do Candidato 1"
          value={age1}
          onChange={(e) => setAge1(e.target.value)}
        />
        <input
          type="number"
          placeholder="Idade do Vice 1"
          value={age2}
          onChange={(e) => setAge2(e.target.value)}
        />
        <h2>Chapa 2</h2>
        <input
          type="number"
          placeholder="Idade do Candidato 2"
          value={age3}
          onChange={(e) => setAge3(e.target.value)}
        />
        <input
          type="number"
          placeholder="Idade do Vice 2"
          value={age4}
          onChange={(e) => setAge4(e.target.value)}
        />
        <button type="submit">Comparar Experiência</button>
      </form>
      {result && <h3>{result}</h3>}
        </div>
      </div>
    </div>
  );
}

export default DEMOcracia;
