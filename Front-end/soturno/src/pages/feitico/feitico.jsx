import './feitico.scss'
import Header from '../../components/header/Header.jsx';
import CardFeitico from '../../components/card-feitico/CardFeitico.jsx';

export default function Feitico() {

    return (

        <body class="pagina-feitico">

            <section class="section-feitico">

                <Header />

                <main class="main-feitico">

                    <CardFeitico />
                    <CardFeitico />
                    <CardFeitico />
                    <CardFeitico />

                </main>

            </section>

        </body>

    )

}