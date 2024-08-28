import Titulo from '../components/Titulo'
import './Sorteio.css'

function Sorteio() {
    function Sorteio() {
        let numeroSorteado = Math.floor(Math.random() * (10 - 0) + 0)
        alert(numeroSorteado)

    }
    
  return (
    <div className='sorteio-container'>
      <Titulo texto={"Sorteio de um número qualquer aí"} emoji={"🎲🐲💵💰💳💲🤑💸📈📈"}/>
      <button className='botaodesortear-container' onClick={Sorteio}>sortear número</button>
    </div>
  )
}

export default Sorteio
