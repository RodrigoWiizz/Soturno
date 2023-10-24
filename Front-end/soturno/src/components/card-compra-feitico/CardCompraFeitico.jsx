import './CardCompraFeitico.scss'

export default function CardCompraFeitico() {

    return (

        <section class="section-compra-feitico-card">

            <img class="img-compra-feitico-card compra-feitico-card-inferior-esquerdo"
                src="/assets/images/global/flor-canto.png" alt="Flor canto Card" />
            <img class="img-compra-feitico-card compra-feitico-card-inferior-direito" src="/assets/images/global/flor-canto.png"
                alt="Flor canto Card" />
            <img class="img-compra-feitico-card compra-feitico-card-superior-esquerdo"
                src="/assets/images/global/flor-canto.png" alt="Flor canto Card" />
            <img class="img-compra-feitico-card compra-feitico-card-superior-direito" src="/assets/images/global/flor-canto.png"
                alt="Flor canto Card" />

            <h1 class="h1-compra-feitico-card">Chapolin</h1>
            <pre class="pre-compra-feitico-card"> {`
                    • Dance por 1 hora, no topo de um prédio;
                    • Assista 5 horas do programa do Chaves sem parar;
                    • Durma dentro de um barril junto de um martelo de borracha
                    • Após 5 dias fale as palavras “E agora? quem poderá nos defender?”
                    • Após isso o Chapolin Colorado surgira ao seu lado.
                                                        `}
            </pre>

            <article class="article-compra-feitico-card-texto">
                <h1 class="h1-compra-feitico-card-criador">Mago/Bruxa Criador:</h1>
                <h2 class="h2-compra-feitico-card-criador">Ms.JOPtionPane</h2>
            </article>

            <article class="article-compra-feitico-card-botao">
                <div class="div-compra-feitico-card">
                    <h1 class="h1-compra-feitico-card-preco">Preço:</h1>
                    <h2 class="h2-compra-feitico-card-preco">20% da sua alma</h2>
                </div>
                <button>Comprar</button>
            </article>

        </section>

    )

}