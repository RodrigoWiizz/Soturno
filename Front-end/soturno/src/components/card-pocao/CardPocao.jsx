import './CardPocao.scss';

export default function CardPocao() {

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

            <h1 className="h1-card-pocao">Andorinha (Swallow)</h1>

            <section className="section-card-pocao-conteudo">

                <img className="img-card-pocao img-card-pocao-pocao" src="/assets/images/pocao/Andorinha(Swallow).png"
                    alt="Foto Poção Andorinha (Swallow)" />
                <p className="p-card-pocao">Efeito: Acelera a regeneração de Vitalidade por 20 segundos. A regeneração para por 2
                    segundos após receber dano. 80 pontos de Vitalidade ou 40 durante o combate.</p>

            </section>

        </section>

    )

}