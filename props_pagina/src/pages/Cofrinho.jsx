import React from 'react'
import Titulo from '../components/Titulo'

function Cofrinho() {
 
    let precoProduto = Number(prompt("Qual o valor da compra?"))
    let moeda5centavo = Number(prompt("quantas moedas de R$0,05 possui?"))
    let moeda10centavo = Number(prompt("quantas moedas de R$0,10 possui?"))
    let moeda25centavo = Number(prompt("quantas moedas de R$0,25 possui?"))
    let moeda50centavo = Number(prompt("quantas moedas de R$0,50 possui?"))
    let moeda1Real = Number(prompt("quantas moedas de R$1,00 possui?"))

    let valortotal 



    return (
    <div>
      <Titulo texto={"Porkinho diz: OLÁ, ENFIE UMA MOEDA NO MEU UC"} emoji={"🐷💵"}/>
    </div>

  )

}

export default Cofrinho