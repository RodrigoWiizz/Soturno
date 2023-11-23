import { useNavigate } from 'react-router-dom'
import './CardCompraFeitico.scss'

export default function CardCompraFeitico(props) {
    

    return (

        <section className="section-compra-feitico-card">

            <img className="img-compra-feitico-card compra-feitico-card-inferior-esquerdo"
                src="/assets/images/global/flor-canto.png" alt="Flor canto Card" />
            <img className="img-compra-feitico-card compra-feitico-card-inferior-direito" src="/assets/images/global/flor-canto.png"
                alt="Flor canto Card" />
            <img className="img-compra-feitico-card compra-feitico-card-superior-esquerdo"
                src="/assets/images/global/flor-canto.png" alt="Flor canto Card" />
            <img className="img-compra-feitico-card compra-feitico-card-superior-direito" src="/assets/images/global/flor-canto.png"
                alt="Flor canto Card" />

            <h1 className="h1-compra-feitico-card">{props.nome}</h1>
            <pre className="pre-compra-feitico-card"> {
                props.descricao
            }
                    
            </pre>

            <article className="article-compra-feitico-card-texto">
                <h1 className="h1-compra-feitico-card-criador">Mago/Bruxa Criador:</h1>
                <h2 className="h2-compra-feitico-card-criador">{props.criador}</h2>
            </article>

            <article className="article-compra-feitico-card-botao">
                <div className="div-compra-feitico-card">
                    <h1 className="h1-compra-feitico-card-preco">Preço:</h1>
                    <h2 className="h2-compra-feitico-card-preco">{props.preco}% da sua alma</h2>
                </div>
                <button className='button-cardCompraFeitico'>Comprar</button>
            </article>

        </section>

    )

}