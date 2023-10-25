import Header from "../../components/header/Header";
import "./gerenciamento.scss";

export default function Gerenciamento() {

    return (
        <body className="pagina-gerenciamento">

            <section className="section-gerenciamento">

                <Header/>
                <section class="section-img">
                    <a className="a-gerenciamento" href="../CadastroPocao/index.html">
                        <img src="/assets/images/Produtos/esqueleto-pocao.png"
                            alt="Mão de esqueleto segurando uma placa escrito poção"/>
                    </a>

                    <a className="a-gerenciamento" href="../CadastroFeitico/index.html">
                        <img src="/assets/images/Produtos/esqueleto-feitico.png"
                            alt="Mão de esqueleto segurando uma placa escrito feitiço"/>
                    </a>

                </section>

                <section class="section-a">

                    <a className="a-gerenciamento" href="../CadastroPocao/index.html">Poção</a>

                    <a className="a-gerenciamento" href="../CadastroFeitico/index.html">Feitiço</a>

                </section>

            </section>

            <figure class="figure-chao-produtos">
                <img class="chao-produtos" src="/assets/images/Produtos/chaodeossos-produtos.png"
                    alt="Chão de Ossos"/>
            </figure>

        </body>
    )
}