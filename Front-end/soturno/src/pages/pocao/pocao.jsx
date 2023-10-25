import './pocao.scss'
import Header from '../../components/header/Header.jsx';
import CardPocao from '../../components/card-pocao/CardPocao';



export default function Pocao() {

    return (

        <body class="pagina-pocao">

            <section class="section-pocao">

            <Header/>

                <h1 class="h1-pocao">Cura</h1>

                <div class="div-pocao">

                    <main class="main-pocao">


                        <CardPocao />
                        <button>Comprar</button>

                        <CardPocao />
                        <button>Comprar</button>

                        <CardPocao />
                        <button>Comprar</button>

                        <CardPocao />
                        <button>Comprar</button>

                    </main>


                </div>



            </section>

        </body>

    )

}