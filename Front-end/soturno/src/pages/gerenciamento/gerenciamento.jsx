import Header from "../../components/header/Header";
import "./gerenciamento.scss";

export default function Gerenciamento() {

    return (
        <body className="pagina-gerenciamento">

            <section className="section-gerenciamento">

                <Header/>
                <section className="section-img">
                    <a className="a-gerenciamento" href="/cadastro-poção">
                        <img src="/assets/images/produtos/esqueleto-pocao.png"
                            alt="Mão de esqueleto segurando uma placa escrito poção"/>
                    </a>

                    <a className="a-gerenciamento" href="/cadastro-feitiço">
                        <img src="/assets/images/produtos/esqueleto-feitico.png"
                            alt="Mão de esqueleto segurando uma placa escrito feitiço"/>
                    </a>

                </section>

                <section className="section-a">

                    <a className="a-gerenciamento" href="/cadastro-poção">Poção</a>

                    <a className="a-gerenciamento" href="/cadastro-feitiço">Feitiço</a>

                </section>

            </section>

            <figure className="figure-chao-produtos">
                <img className="chao-produtos" src="/assets/images/produtos/chaodeossos-produtos.png"
                    alt="Chão de Ossos"/>
            </figure>

        </body>
    )
}