import './compra-pocao.scss'
import Header from '../../components/header/Header.jsx';
import { useLocation } from 'react-router-dom';

export default function CompraPocao() {

    const { state: { imagem, nome, preco, descricao, ingredientes, criador, tipo} } = useLocation();

    return (

        <div className='pagina-compra-pocao'>

            <section className='section-compra-pocao'>

                <Header/>

                <main className='main-compra-pocao'>

                    <figure className='figure-compra-pocao'>

                        <img className='img-compra-pocao' src={imagem} alt="Poção Andorinha(Swallow)" />

                    </figure>

                    <section className='section-compra-pocao-titulo'>

                        <article className="article-compra-pocao-titulo">

                            <h1 className='h1-compra-pocao'>{nome}</h1>

                        </article>

                        <section className='section-compra-pocao-direito'>

                            <article className='article-compra-pocao-efeito'>

                                <p className='p-compra-pocao'>{descricao}</p>

                            </article>

                            <article className='article-compra-pocao-ingredientes'>

                                <pre className='pre-compra-pocao'>
                                    {ingredientes}
                                </pre>

                            </article>

                        </section>

                    </section>

                </main>

                <footer className='footer-compra-pocao'>

                    <section className="section-compra-pocao-footer-titulo">


                        <div className="div-compra-pocao-footer-cima">
                            <h1 className='h1-compra-pocao-mago'>Mago/Bruxa Criador:</h1>
                            <h2 className='h2-compra-pocao-mago'> {criador}</h2>
                        </div>

                        <div className="div-compra-pocao-footer-baixo">
                            <h3 className='h3-compra-pocao-preco'>Preço:</h3>
                            <h4 className='h4-compra-pocao-preco'>R$ {preco}</h4>
                        </div>

                    </section>

                    <section className='section-compra-pocao-botao'>

                        <button className='button-compraPocao' >Comprar</button>

                    </section>

                </footer>

            </section>

        </div>

    )

}