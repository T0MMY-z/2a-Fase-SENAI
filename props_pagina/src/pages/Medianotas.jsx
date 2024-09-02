import React from 'react'
import Titulo from '../components/Titulo'

function Medianotas() {

    let nota1 = Number(prompt('digite a primeira nota'))
    let nota2 = Number(prompt('digite a segunda nota'))
    let nota3 = Number(prompt('digite a terceira nota'))
    let nota4 = Number(prompt('digite a quarta nota'))

    let mediadasnotas = (nota1 + nota2 + nota3 + nota4) / 4

    alert(mediadasnotas)

  return (
    <div>
      <Titulo texto={"Vamos calcular a média das notas"} emoji={"✏"} />
    </div>
  )
}

export default Medianotas
