import Header from "../../components/header/Header";
import "./cadastro.scss"

export default function Cadastrar() {

    return (

        <body className="pagina-cadastro">

            <section className="section-cadastro">

                <Header/>

                <h1 className="h1-cadastro">Cadastro</h1>

                <main className="main-cadastro">

                    <input className="input-cadastro" type="text" placeholder="Email" />
                    <input className="input-cadastro" type="password" placeholder="Senha" />
                    <input className="input-cadastro" type="text" placeholder="Nome de Usuário" />

                    <button className="button-cadastro">Cadastro</button>

                    <a className="a-cadastro" href="/login/">Já possui uma conta? Faça o login</a>

                </main>

            </section>

        </body>
    )
}