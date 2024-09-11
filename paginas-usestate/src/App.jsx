
import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import MeusLegos from './pages/MeusLegos'
import Contato from './pages/Contato'

function App() {
  const [pagina, setPagina] = useState (<Home />)

  return (
    <>
    <nav>
      <button onClick={ () => setPagina(<Home />)}>Home</button>
      <button onClick={ () => setPagina(<Contato />)}>Contato</button>
      <button onClick={ () => setPagina(<MeusLegos />)}>Legos</button>
    </nav>
    
    { pagina }
    </>
  )
}

export default App
