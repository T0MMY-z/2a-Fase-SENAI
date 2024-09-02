import { IoDice } from "react-icons/io5";
import { useState } from 'react'
import Titulo from '../components/Titulo'
import './Dado.css'

function Dado() {
  const [numero, setNumero]= useState()

    function Sortear() {
        let numeroSorteado = Math.floor(Math.random() * (7 - 1) + 1)
        setNumero(numeroSorteado)
    }

  return (
    <div className='sorteio-container'>
      <Titulo texto={"Leãosinho diz: role o dado e ganhe uma casa"} emoji={"🎲🦁📈"}/>
      {/*<div className='numero-sorteado'>{numero}</div>*/}
      <button className='botaodesorteio-container' onClick={Sortear}> <label className="numero-dado"> {numero} </label> </button>
    
    </div>


  )
}

export default Dado
