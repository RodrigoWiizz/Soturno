import './pocao.scss'
import CardPocao from '../../components/card-pocao/CardPocao.jsx';
import Header from '../../components/header/Header';


export default function Pocao() {

    return (

        <body className="pagina-pocao">

            <section className="section-pocao">

                <Header />

                <h1 className="h1-pocao">Cura</h1>

                

                    <main className="main-pocao">


                        <CardPocao />
                        

                        <CardPocao />
                        

                        <CardPocao />
                        

                        <CardPocao />
                        

                    </main>


                



            </section>

        </body>

    )

}