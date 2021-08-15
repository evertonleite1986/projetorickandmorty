import { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Card(props) {

  const [rickandmorty, setRickAndMorty] = useState(props.info);

  const getData = useCallback(() => {
    fetch(props.info.url)
      .then(res => res.json())
      .then((resultado) => {
        setRickAndMorty(resultado)
      })
  }, [props.info.url]);
  
  useEffect(() => {
    getData();
  }, [getData])

  let id = rickandmorty.id;

  return (
    <div className="app__card">
      <Link className="app__card__link" to={{ pathname: "/info/" + rickandmorty.id, state: rickandmorty}}>
        <img className="app__card__img" src={"https://rickandmortyapi.com/api/character/avatar/" + id + ".jpeg"} alt={rickandmorty.name} />
      </Link>
        <div className="app__card__info">
          <p className="app__card__id">{id}</p>
          <h3 className="app__card__name">{rickandmorty.name}</h3>
        </div>
      
    </div>
  )
}