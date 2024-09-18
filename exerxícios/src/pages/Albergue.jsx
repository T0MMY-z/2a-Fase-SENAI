import React, { useState } from 'react'
import NotaFiscal from '../components/NotaFiscal'

function Albergue() {
    const[inputDiarias, setInputDiarias] = useState('')
    const[resultado, setResultado] = useState('') 

    function calcular(){
        let valorDiaria
        if (inputDiarias <= 5 ) {
            valorDiaria = 100
        }else if(inputDiarias <= 10){
            valorDiaria = 90
        }else{
            valorDiaria = 80
        }

        let totalBruto = inputDiarias * valorDiaria 
        let descontoEmocional = totalBruto * 0.1
        let descontoUber = totalBruto * 0.15
        let multa = 150
        let totalLiquido = totalBruto - descontoEmocional - descontoUber + multa

        let objeto = {
            bruto: totalBruto,
            descontoE: descontoEmocional,
            descontoU: descontoUber,
            multa: multa,
            liquido: totalLiquido
        }
        setResultado(objeto)
    }

  return (
    <div>
      <h1>Albergue</h1>
      <p>muito texto... 🤦‍♂️</p>
      <div className='input-container'>
        <label htmlFor="inpDiárias">Diárias</label>
        <input type="number" id='inpDiarias'
            value={inputDiarias}
            onChange={ (event) => setInputDiarias(event.target.value) }
        />
            

      </div>
        <button onClick={calcular}>calcular</button>

    {!!resultado &&
        <NotaFiscal infos={resultado}/>
    }


    </div>
  )
}

export default Albergue
