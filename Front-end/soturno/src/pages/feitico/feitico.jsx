import './feitico.scss'
import Header from '../../components/header/Header.jsx';
import CardFeitico from '../../components/card-feitico/CardFeitico.jsx';

export default function Feitico() {

    return (

        <body className="pagina-feitico">

            <section className="section-feitico">

                <Header />

                <main className="main-feitico">

                    <CardFeitico />
                    <CardFeitico />
                    <CardFeitico />
                    <CardFeitico />

                </main>

            </section>

        </body>

    )

}