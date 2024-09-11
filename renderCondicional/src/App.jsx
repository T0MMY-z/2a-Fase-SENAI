import React, { useState } from 'react';

const HotelBookingCalculator = () => {
  const [numDiarias, setNumDiarias] = useState(0);
  const [valorFinal, setValorFinal] = useState(null);

  const calcularValorFinal = () => {
    let precoPorDiaria;
    if (numDiarias <= 5) {
      precoPorDiaria = 100;
    } else if (numDiarias <= 10) {
      precoPorDiaria = 90;
    } else {
      precoPorDiaria = 80;
    }

    const valorTotal = numDiarias * precoPorDiaria;
    const desconto10 = valorTotal * 0.10;
    const valorComDesconto10 = valorTotal - desconto10;
    const desconto15 = valorComDesconto10 * 0.15;
    const valorComDesconto15 = valorComDesconto10 - desconto15;
    const multa = 150;
    const valorFinal = valorComDesconto15 + multa;

    setValorFinal({
      valorTotal,
      desconto10,
      valorComDesconto10,
      desconto15,
      valorComDesconto15,
      multa,
      valorFinal,
    });
  };

  return (
    <div>
      <h1>Cálculo do Valor Final da Reserva</h1>
      <label>
        Número de diárias:
        <input
          type="number"
          value={numDiarias}
          onChange={(e) => setNumDiarias(parseInt(e.target.value, 10))}
        />
      </label>
      <button onClick={calcularValorFinal}>Calcular</button>

      {valorFinal && (
        <div>
          <h2>Detalhes da Compra</h2>
          <p>Preço por diária: ${numDiarias <= 5 ? 100 : numDiarias <= 10 ? 90 : 80}</p>
          <p>Valor total sem descontos: ${valorFinal.valorTotal.toFixed(2)}</p>
          <p>Desconto de 10%: -${valorFinal.desconto10.toFixed(2)}</p>
          <p>Valor com desconto de 10%: ${valorFinal.valorComDesconto10.toFixed(2)}</p>
          <p>Desconto adicional de 15%: -${valorFinal.desconto15.toFixed(2)}</p>
          <p>Valor com desconto adicional de 15%: ${valorFinal.valorComDesconto15.toFixed(2)}</p>
          <p>Multa por danos materiais: +${valorFinal.multa.toFixed(2)}</p>
          <h3>Valor final a pagar: ${valorFinal.valorFinal.toFixed(2)}</h3>
        </div>
      )}
    </div>
  );
};

export default HotelBookingCalculator;