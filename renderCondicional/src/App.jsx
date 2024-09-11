import { useState } from 'react'
import './App.css'
import OláUsuário from './components/OláUsuário';
import AreaParaAdulto from './components/AreaParaAdulto';
import Login from './components/Login';

function App() {

  const [logado, setLogado] = useState(false);
  const [idade, setIdade] = useState(0);



function logar(){
  setLogado(true)

}

  return (
    <>
      <div className="render-container">
        { logado && <OláUsuário /> }
        <button onClick={logar}>login</button>
        <button onClick={ () => {setLogado(false)} }>logout</button>
        <button onClick={ () => setLogado(!logado) }>Alternar</button>
      </div> 

      <div className="render-container">
        { idade>=18 && <AreaParaAdulto />}
        <button onClick={() => setIdade(idade - 1)} >-</button>
        {idade}
        <button onClick={() => setIdade(idade + 1)} >+</button>
      </div>

      <div className="render-container">
        { logado==true ? <OláUsuário /> : <Login />}

      </div>
    </>
  )
}

export default App
