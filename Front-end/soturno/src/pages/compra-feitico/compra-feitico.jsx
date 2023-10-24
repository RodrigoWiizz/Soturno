import './compra-feitico.scss'
import Header from '../../components/header/Header';
import CardCompraFeitico from '../../components/card-compra-feitico/CardCompraFeitico';

export default function CompraFeitico() {

    return (

        <body class="pagina-compra-feitico">

            <section class="section-card-feitico">

                <Header />

                <article class="article-card-feitico">

                    <h1 class="h1-card-feitico">Ativação de Feitiço</h1>
                    <p class="p-card-feitico">Você possui os métodos de criação do Feitiço, mas ele precisa ser ativado em sua alma, assim que comprar
                        o pacto será selado e você poderá realizar as instruções do feitiço.</p>

                </article>

                <main class="main-card-feitico">

                    <CardCompraFeitico/>

                </main>

            </section>

        </body>

    )

}