import Titulo from '../components/Titulo'
import './Cadastro.css'
function Cadastro() {
    function cadastrar(){
        alert("Cadastro feito")
    }
  return (
    <div className='cadastro-container'>
      <Titulo texto={"Cadaxtro"} emoji={"✔📝"}/>
      <label>Nome</label>
      <input type="text" />
      <label>altura</label>
      <input type="text" />
      <button onClick={cadastrar}>Cadastrar</button>
    

    </div>
  )
}

export default Cadastro
