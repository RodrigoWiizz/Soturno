import './CardFeitico.scss'

export default function CardFeitico() {

    return (

        <section className="section-card-feitico">
                
                <img className="img-card-feitico card-feitico-inferior-esquerdo" src="/assets/images/global/flor-canto.png" alt="Flor canto Card"/>
                <img className="img-card-feitico card-feitico-inferior-direito" src="/assets/images/global/flor-canto.png" alt="Flor canto Card"/>
                <img className="img-card-feitico card-feitico-superior-esquerdo" src="/assets/images/global/flor-canto.png" alt="Flor canto Card"/>
                <img className="img-card-feitico card-feitico-superior-direito" src="/assets/images/global/flor-canto.png" alt="Flor canto Card"/>

                <h1 className="h1-card-feitico-titulo">Chapolin</h1>

                <pre className="pre-card-feitico">
                    {`
• Dance por 1 hora, no topo de um prédio;
• Assista 5 horas do programa do Chaves sem parar;
• Durma dentro de um barril junto de um martelo de borracha
• Após 5 dias fale as palavras “E agora? quem poderá nos defender?”
• Após isso o Chapolin Colorado surgira ao seu lado.
                    `}
                </pre>

                <button>Comprar</button>

            </section>

    )

}