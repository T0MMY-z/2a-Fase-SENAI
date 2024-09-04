import React, { useState } from 'react'
import Titulo from '../components/Titulo';


function Democracia() {
    const [resultado, setResultado] = useState("");

    function Experiencia() {

        let idadePresidente1 = Number(prompt("Digite a idade do primeiro candidato a presidência: "))
    let idadeVice1 = Number(prompt("Digite a idade do primeiro candidato a vice: "))
    let somaIdades1 = idadePresidente1 = idadeVice1

    let idadePresidente2 = Number(prompt("Digite a idade do segundo candidato a presidência: "))
    let idadeVice2 = Number(prompt("Digite a idade do segundo candidato a vice: "))
    let somaIdades2 = idadePresidente2 = idadeVice2


    if(somaIdades1 > somaIdades2){
        setResultado("Os primeiros candidatos possuem mais experiência")
    }else if (somaIdades2 > somaIdades1){
        setResultado("Os segundos candidatos possuem mais experiência")
    }else{
        setResultado("Os candidatos possuem a mesma experiência")
    }
}
       
     return (
        <div>
        <Titulo texto = "Calcular a experiência dos candidatos" />
        <button onClick={Experiencia}>calcular a experiência dos candidatos</button>
        <label>{resultado}</label> 
        </div>

  )

}

export default Democracia




