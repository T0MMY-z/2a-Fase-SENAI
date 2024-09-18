import React, { useState } from 'react';
import './MediaNotas.css';

function MediaNotas() {
    const [notas, setNotas] = useState(Array(4).fill(''));
    const [resultado, setResultado] = useState('');
    const [media, setMedia] = useState(null);

    const handleNotaChange = (index, value) => {
        const newNotas = [...notas];
        newNotas[index] = value;
        setNotas(newNotas);
    };

    const fazerCalculo = () => {
        const notasNumericas = notas.map(nota => parseFloat(nota) || 0);
        const somaNotas = notasNumericas.reduce((acc, nota) => acc + nota, 0);
        const mediaCalculada = somaNotas / notasNumericas.length;

        setMedia(mediaCalculada);
        setResultado(mediaCalculada >= 7 ? 'ALUNO APROVADO' : 'ALUNO REPROVADO');
    };

    return (
        <div>
            <h1>Media Notas</h1>
            <p>
                Ponderações(: Faça um programa que receba quatro notas, sendo que cada nota só poderá receber
                valores de 0 a 10, calcule e mostre a média. Caso a média seja:
                <br />
                Média maior ou igual a 7 – ALUNO APROVADO
                <br />
                Média menor que 7 – ALUNO REPROVADO
            </p>

            <div>
                {Array.from({ length: 4 }, (_, index) => (
                    <div className='input-container' key={index}>
                        <label htmlFor={`inpnota${index + 1}`}>Nota {index + 1}</label>
                        <input 
                            type="number" 
                            id={`inpnota${index + 1}`} 
                            value={notas[index]} 
                            onChange={(e) => handleNotaChange(index, e.target.value)} 
                            min="0" 
                            max="10"
                        />
                    </div>
                ))}

                <button onClick={fazerCalculo}>Calcular média</button>

                <div className='resultado-container'>
                    <h2>{resultado}</h2>
                    {media !== null && <h3>Média: {media.toFixed(2)}</h3>}
                </div>
            </div>
        </div>
    );
}

export default MediaNotas;
