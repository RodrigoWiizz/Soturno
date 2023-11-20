import { Link } from "react-router-dom";
import Header from "../../components/header-adm/header-admin";
import "./gerenciamento.scss";

export default function Gerenciamento() {

    return (

        <div className="pagina-gerenciamento">
            
            <section className="gerenciamento">

                <Header/>

                <section className="gerenciamento-botao">

                    <Link to="/cadastro-poção" className="gerenciamento">Cadastro Poção</Link>
                    <Link to="/cadastro-feitico" className="gerenciamento">Cadastro Feitiço</Link>
                    <Link to="/listagem" className="gerenciamento">Listagem</Link>
                    <Link to="/alterar-pocao" className="gerenciamento">Alterar Poção</Link>
                    <Link to="/alterar-feitico" className="gerenciamento">Alterar Feitiço</Link>
                    <Link to="/deletar" className="gerenciamento">Exclusão</Link>

                </section>

            </section>

        </div>
    )
}