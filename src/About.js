import { Link } from 'react-router-dom';
import foto from './Styles/Img/foto.jpg';

export default function About() {
    return (
        <div className="app__about">
            <div className="app__about__header">
            <h1>Feito por:</h1>
            <img className="app__about__foto" src={foto} width="250px" ></img>
            <h3>Everton Vieira Leite</h3>
            </div>
            <div className="app__about__text">
            <p>Olá, me chamo Everton Vieira Leite, tenho 34 anos e sou estudante de Desenvolvimento Front-End, na BlueEdTech. Sou casado com a Francine, que é a pessoa mais especial que a vida me deu o privilégio de conhecer, e poder casar com ela, e também sou pai da Carolina, que hoje tem 7 anos, e que é a menina mais linda do mundo, e essa afirmação não tem nada a ver com ela ser minha filha(kkkk). </p>
            <p>Para fazer esse projeto utilizei a ferramenta React, que é uma ferramenta excelente para Desenvolvimento Web, estou gostando muito de aprender a usá-la, e sei que ainda tenho muuuuuita coisa para aprender. Gostaria de agradecer a profª Isabella, o profº Henrique, e o profº Matheus, que ajudaram muito, e que com certeza sem eles não teria chegado neste resultado.</p>
            <p>Se quiser ver mais alguns trabalhos seguem abaixo os links do github, e linkedin, segue lá...</p>
            </div>
        <div className="app__about__links">
            <a className="app__about__link" href="https://github.com/evertonleite1986" target="_blank" rel="noreferrer">
            <i class="im im-github"></i>
            </a>
            <a className="app__about__link" href="https://linkedin.com/in/everton-vieira-leite-94a957160" target="_blank" rel="noreferrer">
            <i class="im im-linkedin"></i>
          </a>
        </div>
        <div className="app__info__button">
            <Link to="/"><button><strong>Voltar</strong></button></Link>
        </div>
        </div>
    )
}