import './Medianotas.css'
import { useState } from 'react'
import Titulo from '../components/Titulo'

function Medianotas() {
  const [nota1, setNota1] = useState('')
  const [nota2, setNota2] = useState('')
  const [nota3, setNota3] = useState('')
  const [nota4, setNota4] = useState('')
  const [medianotas, setMediaNotas] = useState(null)

  function calcularMédia() {
    const n1 = Number(nota1)
    const n2 = Number(nota2)
    const n3 = Number(nota3)
    const n4 = Number(nota4)

    if (isNaN(n1) || isNaN(n2) || isNaN(n3) || isNaN(n4)) {
      alert("As notas devem ser números válidos")
      return
    }

    const mediaCalculada = (n1 + n2 + n3 + n4) / 4
    setMediaNotas(mediaCalculada.toFixed(2))
  }

  return (
    <div className='notas'>
      
    <Titulo texto={"Sorteio de um número qualquer aí"} emoji={"🎲📈"}/>
    <label> Nota 1 <input type="text" value={nota1} onChange={(e) => setNota1(e.target.value)}/></label>
    <br />
    <label> Nota 2 <input type="text" value={nota2} onChange={(e) => setNota2(e.target.value)}/></label> 
    <br />
    <label> Nota 3 <input type="text" value={nota3} onChange={(e) => setNota3(e.target.value)} /></label> 
    <br />
    <label> Nota 4 <input type="text" value={nota4} onChange={(e) => setNota4(e.target.value)} /></label> 
    <br />
    <br />
    <button className='calcular-media' onClick={calcularMédia}>Calcular Média</button>
    {medianotas !== null && <div>Média: {medianotas}</div>}

    </div>
  )
}

export default Medianotas
