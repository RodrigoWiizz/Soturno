import Header from "../../components/header/Header";
import "./consulta.scss"

export default function Consulta() {

    return (
        <body className="pagina-consulta">

            <section className="section-consulta">

                <Header />
                <h1 className="h1-consulta">Consulta</h1>

                <main className="main-consulta">

                    <input className="input-consulta" type="text" placeholder="Nome"/>
                        <input className="input-consulta" type="text" placeholder="Preço"/>
                            <input className="input-consulta" type="text" placeholder="Criador"/>
                                <input className="input-consulta" type="text" placeholder="Tipo"/>

                                </main>

                                <button className="button-consulta">Pesquisar</button>

                            </section>

                        </body>
                        )
}