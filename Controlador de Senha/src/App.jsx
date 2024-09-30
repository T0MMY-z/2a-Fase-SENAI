import { useState } from 'react'
import './App.css'

function App() {

  const [fila, setFila] = useState([])

  function gerarSenha(){
    let senha = {
      numero: Date.now(),
      tipo: "normal",
    }
    setFila([...fila, senha])
  }

  function gerarSenhaPreferencial(){
    let senha = {
      numero: Date.now(),
      tipo: "preferencial",
    }
    setFila([...fila, senha])

  }

  function atender(){
    if(fila.length){
      alert(fila[0].numero)
      //let filaTemp = [...fila,]
      //fila.splice(0, 1)
      setFila(fila.slice(1))
    }else{
      alert("Não tem ninguém na fila xará, finge que tá fazendo alguma coisa de útil e vai descansar 👍")
    }}

  return (
    <>
        <button onClick={atender}>Atender</button>
        <button onClick={gerarSenha}>Senha normal</button>
        <button onClick={gerarSenhaPreferencial}>Senha preferencial</button>

        {fila.map( (senha) => (

          <div key={senha.numero}>
            <p>{senha.numero}</p>
            <p>{senha.tipo}</p>
          </div>
        )) }


    </> 
  )
}

export default App
