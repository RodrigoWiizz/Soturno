import Header from "../../components/header/Header"
import "./produtos.scss"

export default function Produtos() {

    return (
        <body className="pagina-produtos">

            <section className="section-produtos">

                <Header />
                
                <section className="section-img">
                    <a className="a-produtos" href="/poções">
                        <img className="img-produtos" src="/assets/images/produtos/esqueleto-pocao.png"
                            alt="Mão de esqueleto segurando uma placa escrito poção" />
                    </a>

                    <a className="a-produtos" href="/feiticos">
                        <img className="img-produtos" src="/assets/images/produtos/esqueleto-feitico.png"
                            alt="Mão de esqueleto segurando uma placa escrito feitiço" />
                    </a>

                </section>

                <section className="section-a">

                    <a className="a-produtos" href="/pocoes">Poção</a>

                    <a className="a-produtos" href="/feiticos">Feitiço</a>

                </section>

            </section>

            <figure className="figure-chao-produtos">
                <img className="chao-produtos" src="/assets/images/produtos/chaodeossos-produtos.png"
                    alt="Chão de Ossos" />
            </figure>

        </body>
    )
}