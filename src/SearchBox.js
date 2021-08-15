import { Link } from 'react-router-dom'
import logo from './Styles/Img/logo2.jpeg'

export default function SearchBox(filter) {
  return(
    <div className="app__list__searchbox">
      <div className="app__list__searchbox__container">
        <div>  
        <img src={logo} alt="rickandmorty"></img>
        </div>
        <div>
        <input 
          type="text"
          placeholder={filter.placeholder}
          onChange={filter.action}
        />
        </div>
        
        <Link to="/About"><button><strong>Sobre</strong></button></Link>
      </div>
      
    </div>
  )
}