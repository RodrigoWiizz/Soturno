import './CardCompraFeitico.scss'

export default function CardCompraFeitico() {

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

            <h1 className="h1-compra-feitico-card">Chapolin</h1>
            <pre className="pre-compra-feitico-card"> {`
                    • Dance por 1 hora, no topo de um prédio;
                    • Assista 5 horas do programa do Chaves sem parar;
                    • Durma dentro de um barril junto de um martelo de borracha
                    • Após 5 dias fale as palavras “E agora? quem poderá nos defender?”
                    • Após isso o Chapolin Colorado surgira ao seu lado.
                                                        `}
            </pre>

            <article className="article-compra-feitico-card-texto">
                <h1 className="h1-compra-feitico-card-criador">Mago/Bruxa Criador:</h1>
                <h2 className="h2-compra-feitico-card-criador">Ms.JOPtionPane</h2>
            </article>

            <article className="article-compra-feitico-card-botao">
                <div className="div-compra-feitico-card">
                    <h1 className="h1-compra-feitico-card-preco">Preço:</h1>
                    <h2 className="h2-compra-feitico-card-preco">20% da sua alma</h2>
                </div>
                <button>Comprar</button>
            </article>

        </section>

    )

}