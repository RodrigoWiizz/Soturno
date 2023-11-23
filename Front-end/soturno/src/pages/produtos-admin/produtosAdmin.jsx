import { Link } from "react-router-dom"
import Header from "../../components/header-adm/header-admin"
import "./produtos.scss"

export default function ProdutosAdmin() {

    return (
        <body className="pagina-produtos">

            <section className="section-produtos">

                <Header />
                
                <section className="section-img">
                    <Link className="a-produtos" to="/pocoes">
                        <img className="img-produtos" src="/assets/images/produtos/esqueleto-pocao.png"
                            alt="Mão de esqueleto segurando uma placa escrito poção" />
                    </Link>

                    <Link className="a-produtos" to="/feiticos">
                        <img className="img-produtos" src="/assets/images/produtos/esqueleto-feitico.png"
                            alt="Mão de esqueleto segurando uma placa escrito feitiço" />
                    </Link>

                </section>

                <section className="section-a">

                    <Link className="a-produtos" to="/pocoes">Poção</Link>

                    <Link className="a-produtos" to="/feiticos">Feitiço</Link>

                </section>

            </section>

            <figure className="figure-chao-produtos">
                <img className="chao-produtos" src="/assets/images/produtos/chaodeossos-produtos.png"
                    alt="Chão de Ossos" />
            </figure>

        </body>
    )
}