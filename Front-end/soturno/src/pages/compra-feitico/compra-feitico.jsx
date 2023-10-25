import './compra-feitico.scss'
import Header from '../../components/header/Header.jsx';
import CardCompraFeitico from '../../components/card-compra-feitico/CardCompraFeitico';

export default function CompraFeitico() {

    return (

        <body className="pagina-compra-feitico">

            <section className="section-card-feitico">

                <Header />

                <article className="article-card-feitico">

                    <h1 className="h1-card-feitico">Ativação de Feitiço</h1>
                    <p className="p-card-feitico">Você possui os métodos de criação do Feitiço, mas ele precisa ser ativado em sua alma, assim que comprar
                        o pacto será selado e você poderá realizar as instruções do feitiço.</p>

                </article>

                <main className="main-card-feitico">

                    <CardCompraFeitico/>

                </main>

            </section>

        </body>

    )

}