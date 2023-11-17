import { Link } from "react-router-dom";
import Header from "../../components/header-adm/header-admin";
import "./gerenciamento.scss";

export default function Gerenciamento() {

    return (
        <div className="pagina-gerenciamento">
            
            <section className="section-gerenciamento">

                <Header/>

                <section className="section-gerenciamento-botao">

                    <Link to="/cadastro-poção" className="a-gerenciamento">Cadastro Poção</Link>
                    <Link to="/cadastro-feitico" className="a-gerenciamento">Cadastro Feitiço</Link>
                    <Link to="/listagem" className="a-gerenciamento">Listagem</Link>
                    <Link className="a-gerenciamento">Alterar</Link>
                    <Link className="a-gerenciamento">Exclusão</Link>

                </section>

            </section>

        </div>
    )
}