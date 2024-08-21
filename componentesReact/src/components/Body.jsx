import './Body.css'
import ThomeTorto from './ThomeTorto'
import Blackpao from './blackpao'

function Body() {
  return (
    <div className='body-container'>
      <h2>Fortnite gameplay chilling</h2>
      <img className="imagens-body" src="./images/fortnite_imagem.jpg" alt="" />

        <Blackpao />
        <ThomeTorto />
        
    </div>
  )
}

export default Body
