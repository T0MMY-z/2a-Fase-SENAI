import { useState } from 'react'
import './App.css'
import ArCondicionado from './pages/ArCondicionado'
import Porquinho from './pages/Porquinho'
import MediaNotas from './pages/MediaNotas'
import VendendorLucro from './pages/VendendorLucro'
import ConceitoNotas from './pages/ConceitoNotas'
import DEMOcracia from './pages/DEMOcracia'
import CopoMeioCheio from './pages/CopoMeioCheio'
import DoisCoposMeioCheio from './pages/DoisCoposMeioCheio'
import Garçom from './pages/Garçom'

function App() {
  const [pagina, setPagina] = useState()

  return (
    <>
    <nav>
      <button onClick={() => setPagina(<VendendorLucro />)}>5.23</button>
      <button onClick={() => setPagina(<ConceitoNotas />)}>5.24</button>
      <button onClick={() => setPagina(<Porquinho />)}>5.25</button>
      <button onClick={() => setPagina(<MediaNotas />)}>5.26</button>
      <button onClick={() => setPagina(<ArCondicionado />)}>5.27</button>
      <button onClick={() => setPagina(<DEMOcracia />)}>5.28</button>
      <button onClick={() => setPagina(<CopoMeioCheio />)}>5.29</button>
      <button onClick={() => setPagina(<DoisCoposMeioCheio />)}>5.30</button>
      <button onClick={() => setPagina(<Garçom />)}>5.31</button>
    </nav>
    { pagina }
    </>
  )
}

export default App
