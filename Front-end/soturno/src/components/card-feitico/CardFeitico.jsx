import { useNavigate } from 'react-router-dom'
import './CardFeitico.scss'

export default function CardFeitico(props) {

    const navigate = useNavigate()

    function navegar() {

        navigate('/compra-feitico', { state: { nome: props.nome, preco: props.preco, criador: props.criador, 
        descricao: props.descricao} })
    }

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

                <button onClick={navegar} className='button-cardFeitico'>Comprar</button>

            </section>

    )

}