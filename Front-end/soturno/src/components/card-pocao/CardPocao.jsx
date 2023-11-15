import './CardPocao.scss';

export default function CardPocao(props) {

    return (

        <section className="section-card-pocao">


            <img className="img-card-pocao img-card-pocao-inferior-esquerdo"
                src="/assets/images/global/flor-canto.png" alt="Flor canto Card" />
            <img className="img-card-pocao img-card-pocao-inferior-direito"
                src="/assets/images/global/flor-canto.png" alt="Flor canto Card" />
            <img className="img-card-pocao img-card-pocao-superior-esquerdo"
                src="/assets/images/global/flor-canto.png" alt="Flor canto Card" />
            <img className="img-card-pocao img-card-pocao-superior-direito"
                src="/assets/images/global/flor-canto.png" alt="Flor canto Card" />

            <h1 className="h1-card-pocao">{props.nome}</h1>

            <section className="section-card-pocao-conteudo">

                <img className="img-card-pocao img-card-pocao-pocao" src={props.imagem}
                    alt="Foto Poção" />
                <p className="p-card-pocao">{props.descricao}</p>

            </section>

        </section>

    )

}