import React, { useState } from 'react';

function VendendorLucro() {
  
  const [valorCompra, setValorCompra] = useState('');
  const [valorVenda, setValorVenda] = useState(null); 

  const calcularValorVenda = () => {
    const valor = parseFloat(valorCompra);

    
    if (isNaN(valor) || valor < 0) {
      alert("Por favor, insira um valor válido.");
      return;
    }

    let lucro;
    
    if (valor < 20) {
      lucro = valor * 0.45; 
    } else {
      lucro = valor * 0.30; 
    }

    setValorVenda(valor + lucro);
  };

  return (
    <div>
      <h1>Calculadora de Venda</h1>
      <p>Um comerciante comprou um produto e quer vendê-lo com lucro de 
        45% se o valor da compra for menor que R$20,00; caso contrário, o lucro 
        será de 30%. Faça um programa que entre com o valor do produto e mostre 
        o valor de venda.
      </p>
      <input
        type="number"
        value={valorCompra}
        onChange={(e) => setValorCompra(e.target.value)}
        placeholder="Valor de compra (R$)"
      />
      <button onClick={calcularValorVenda}>Calcular Valor de Venda</button>
      {valorVenda !== null && ( 
        <h2>Valor de Venda: R$ {valorVenda.toFixed(2)}</h2>
      )}
    </div>
  );
}

export default VendendorLucro;
