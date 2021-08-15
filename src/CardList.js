import { useEffect, useState } from 'react';
import Card from './Card';
import SearchBox from './SearchBox';

export default function CardList() {
  const [rickandmorty, setRickAndMorty] = useState([]);
  const [busca, setBusca] = useState([]);

  const getData = (url) => {
    if(url != null) {
      fetch(url)
      .then(resposta => resposta.json())
      .then(resultado => {
        //completeData = [...completeData, ...resultado.results];
        setRickAndMorty(resultado.results)
        setBusca(resultado.results)
        //getData(resultado.info.next); 
        /* não consegui tratar corretamente os dados que chegaram da api, quando implemento o getData(resultado.info.next) ele renderiza os dados porém sobrepõe sobre os que já estavam sendo mostrados, ainda não achei a solução para que os que já estão na tela não sejam sobrepostos */
      })
    }
  }

  const filterRickandMorty = (e) => {
    const filtered = busca.filter(item => item.name.includes(e.target.value));
    setRickAndMorty(filtered)
  }

  useEffect(() => {
    getData('https://rickandmortyapi.com/api/character')
  },[]);

    return (
    <div>
      <SearchBox placeholder="Buscar personagem..." action={filterRickandMorty}></SearchBox>
      <div className="app__list">
        
        {
          (
            rickandmorty.map((item) => (
              <Card key={item.name} info={item}></Card>
            ))
          )
        } 
      </div>
    </div>
    )
}

