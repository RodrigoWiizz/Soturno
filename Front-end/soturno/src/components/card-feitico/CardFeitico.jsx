import './CardFeitico.scss'

export default function CardFeitico(props) {

    return (

        <section className="section-card-feitico">
                
                <img className="img-card-feitico card-feitico-inferior-esquerdo" src="/assets/images/global/flor-canto.png" alt="Flor canto Card"/>
                <img className="img-card-feitico card-feitico-inferior-direito" src="/assets/images/global/flor-canto.png" alt="Flor canto Card"/>
                <img className="img-card-feitico card-feitico-superior-esquerdo" src="/assets/images/global/flor-canto.png" alt="Flor canto Card"/>
                <img className="img-card-feitico card-feitico-superior-direito" src="/assets/images/global/flor-canto.png" alt="Flor canto Card"/>

                <h1 className="h1-card-feitico-titulo">{props.nome}</h1>

                <pre className="pre-card-feitico">
                    {props.descricao}
                </pre>

                <button className='button-cardFeitico'>Comprar</button>

            </section>

    )

}