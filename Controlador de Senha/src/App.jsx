import { useState } from 'react';
import './App.css';
import TelevisorSenhas from './components/TelevisorSenhas'; 

function App() {
  const [fila, setFila] = useState([]);

  function gerarSenhaAleatoria() {
    return Math.floor(1000 + Math.random() * 9000); 
  }

  function gerarSenha() {
    let senha = {
      numero: gerarSenhaAleatoria(),
      tipo: "normal",
    };
    setFila([...fila, senha]);
  }

  function gerarSenhaPreferencial() {
    let senha = {
      numero: gerarSenhaAleatoria(),
      tipo: "preferencial",
    };
    setFila([...fila, senha]);
  }

  function atender() {
    
    const filaPrioritaria = fila.filter(s => s.tipo === "preferencial");
    const filaNormal = fila.filter(s => s.tipo === "normal");

    const novaFila = [...filaPrioritaria, ...filaNormal];

    if (novaFila.length) {
      alert(`Atendendo senha: ${novaFila[0].numero}`);
     
      setFila(novaFila.slice(1));
    } else {
      alert("Não tem ninguém na fila xará, finge que tá fazendo alguma coisa de útil e vai descansar 👍");
    }
  }

  return (
    <>
      {fila.length > 0 && (
        <TelevisorSenhas senhaAtual={fila[0].numero} tipo={fila[0].tipo} />
      )}

      <button onClick={atender}>Atender</button>
      <button onClick={gerarSenha}>Senha normal</button>
      <button onClick={gerarSenhaPreferencial}>Senha preferencial</button>

      <div>
        {fila.map((senha) => (
          <div key={senha.numero}>
            <p>{senha.numero}</p>
            <p>{senha.tipo}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
