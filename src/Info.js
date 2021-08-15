import {useState} from 'react';
import { Link } from 'react-router-dom';


export default function Info(props) {

  const [rickandmorty, setRickAndMorty] = useState(props.location.state)
  console.log(props)
  let id = rickandmorty.id;

  return (
    <div className="app__info">
      <div className="app__info__card">
        <img className="app__info__img" src={"https://rickandmortyapi.com/api/character/avatar/" + id + ".jpeg"} alt={rickandmorty.name} />
        <div className="app__info__infos">
        <h2 className="app__info__name">Nome: {rickandmorty.name}</h2>
        <h3 className="app__info__info">Origem: {rickandmorty.origin.name}</h3>
        <h3 className="app__info__info">Espécie: {rickandmorty.species}</h3>
        <h3 className="app__info__info">Status: {rickandmorty.status}</h3>
      </div>
    </div>
    <div className="app__info__button">
    <Link to="/"><button><strong>Voltar</strong></button></Link>
    </div>
    </div>
  )
}

 