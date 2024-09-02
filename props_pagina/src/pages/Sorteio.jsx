import { useState } from 'react'
import Titulo from '../components/Titulo'
import './Sorteio.css'

function Sorteio() {
  const [numero, setNumero]= useState()

    function Sorteio() {
        let numeroSorteado = Math.floor(Math.random() * (1000 - 0) + 0)
        setNumero(numeroSorteado)
    }

    function aumentar(){
      setNumero(numero + 1)
        
    }

    function diminuir(){
      setNumero(numero - 1)
        
    }
    
  return (
    <div className='sorteio-container'>
      <Titulo texto={"Sorteio de um número qualquer aí"} emoji={"🎲📈"}/>
      <button className='botaodesortear-container' onClick={Sorteio}>sortear número</button>
      <button className='botao-aumenta' onClick={aumentar}>+</button>
      <div className='numero-sorteado'>{numero}</div>
      <button className='botao-diminui' onClick={diminuir}>-</button>
    </div>
  )
}

export default Sorteio
