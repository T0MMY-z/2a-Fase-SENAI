import React, { useState } from 'react';
import './Garçom.css'

function Garçom() {
  const [salario, setSalario] = useState('');
  const [valorEmprestimo, setValorEmprestimo] = useState('');
  const [numPrestacoes, setNumPrestacoes] = useState('');
  const [resultado, setResultado] = useState('');

  const calcularEmprestimo = (e) => {
    e.preventDefault();

    const salarioNum = parseFloat(salario);
    const valorEmprestimoNum = parseFloat(valorEmprestimo);
    const numPrestacoesNum = parseInt(numPrestacoes, 10);

    if (salarioNum <= 0 || valorEmprestimoNum <= 0 || numPrestacoesNum <= 0) {
      setResultado('Os valores informados não podem ser zero ou negativos.');
      return;
    }

    const valorPrestacao = valorEmprestimoNum / numPrestacoesNum;
    const limitePrestacao = salarioNum * 0.3;

    if (valorPrestacao <= limitePrestacao) {
      setResultado('Empréstimo pode ser concedido.');
    } else {
      setResultado('Empréstimo não pode ser concedido. A prestação ultrapassa 30% do salário.');
    }
  };

  return (
    <div>
      <h1>Garçom</h1>
      <p>Não tem garçom de cara feia: Uma empresa abriu uma linha de crédito para os funcionários. O valor da prestação não pode ultrapassar 30% do salário. Faça um programa que receba o salário, o valor do empréstimo e o número de prestações e informe se o empréstimo pode ser concedido. Nenhum dos valores informados pode ser zero ou negativo</p>
      
      <form onSubmit={calcularEmprestimo}>
        <div className='form-container'>
        <div className='input-container'>
          <label>
            Salário:
            <input 
              type="number" 
              value={salario} 
              onChange={(e) => setSalario(e.target.value)} 
              required/>
          </label>
        </div>

        <div className='input-container'>
          <label>
            Valor do Empréstimo:
            <input 
              type="number" 
              value={valorEmprestimo} 
              onChange={(e) => setValorEmprestimo(e.target.value)} 
              required />

          </label>
        </div>

        <div className='input-container'>
          <label>
            Número de Prestações:
            <input 
              type="number" 
              value={numPrestacoes} 
              onChange={(e) => setNumPrestacoes(e.target.value)} 
              required/>
          </label>
        </div>

        <button type="submit">Calcular</button>
        </div>
      </form>
      {resultado && <p>{resultado}</p>}

    </div>
    
  );
}

export default Garçom;
