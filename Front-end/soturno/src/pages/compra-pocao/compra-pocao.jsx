import './compra-pocao.scss'
import Header from '../../components/header/Header.jsx';

export default function CompraPocao() {

    return (

        <body className='pagina-compra-pocao'>

            <section className='section-compra-pocao'>

                <Header/>

                <main className='main-compra-pocao'>

                    <figure className='figure-compra-pocao'>

                        <img className='img-compra-pocao' src="/assets/images/pocao/Andorinha(Swallow).png" alt="Poção Andorinha(Swallow)" />

                    </figure>

                    <section className='section-compra-pocao-titulo'>

                        <article className="article-compra-pocao-titulo">

                            <h1 className='h1-compra-pocao'>Andorinha(Swallow)</h1>

                        </article>

                        <section className='section-compra-pocao-direito'>

                            <article className='article-compra-pocao-efeito'>

                                <p className='p-compra-pocao'>Efeito: Aumenta a capacidade de respiração debaixo d’água em 50%, além de melhorar em 50% a
                                    visibilidade ao mergulhar por 180 segundos.</p>

                            </article>

                            <article className='article-compra-pocao-ingredientes'>

                                <pre className='pre-compra-pocao'>
                                    
{`Ingredientes:
2x Destilado Anão (Dwarven Spirit)
5x Fruta de Balisa (Balisse fruit)
6x Cáscara (Buckthorn)
5x Língua de Afogador (Drowner tongue)
                                    `}
                                </pre>

                            </article>

                        </section>

                    </section>

                </main>

                <footer className='footer-compra-pocao'>

                    <section className="section-compra-pocao-footer-titulo">


                        <div className="div-compra-pocao-footer-cima">
                            <h1 className='h1-compra-pocao-mago'>Mago/Bruxa Criador:</h1>
                            <h2 className='h2-compra-pocao-mago'>Ms. JOPtionPane</h2>
                        </div>

                        <div className="div-compra-pocao-footer-baixo">
                            <h3 className='h3-compra-pocao-preco'>Preço:</h3>
                            <h4 className='h4-compra-pocao-preco'>R$ 200.000,00</h4>
                        </div>

                    </section>

                    <section className='section-compra-pocao-botao'>

                        <button onclick="window.location.href='../CompraPocao/index.html'">Comprar</button>

                    </section>

                </footer>

            </section>

        </body>

    )

}