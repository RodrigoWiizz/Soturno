import { useState } from "react";
import Header from "../../components/header/Header";
import axios from "axios";
import "./cadastro.scss"

export default function Cadastrar() {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [nome, setNome] = useState("");

    async function cadastrarUsuario() {
        let cadastro = {

            nome: nome,
            senha: senha,
            email: email,
            tipo: "normal"

        }

        let r = await axios.post(process.env.REACT_APP_BACKEND_URL + '/usuario', cadastro);
        let id = r.data.id;

        alert("Usuário cadastrado com sucesso! ID " + id);
    }

    return (

        <body className="pagina-cadastro">

            <section className="section-cadastro">

                <Header/>

                <h1 className="h1-cadastro">Cadastro</h1>

                <main className="main-cadastro">

                    <input className="input-cadastro" type="text" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}/>
                    <input className="input-cadastro" type="password" placeholder="Senha" value={senha} onChange={e => setSenha(e.target.value)}/>
                    <input className="input-cadastro" type="text" placeholder="Nome de Usuário" value={nome} onChange={e => setNome(e.target.value)} />

                    <button onClick={cadastrarUsuario} className="button-cadastro">Cadastro</button>

                    <a className="a-cadastro" href="/login/">Já possui uma conta? Faça o login</a>

                </main>

            </section>

        </body>
    )
}