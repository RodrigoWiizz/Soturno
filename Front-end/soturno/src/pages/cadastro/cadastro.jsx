import { useState } from "react";
import { Link } from 'react-router-dom';
import Header from "../../components/header/Header";
import axios from "axios";
import "./cadastro.scss"

export default function Cadastrar() {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [nome, setNome] = useState("");

    async function cadastrarUsuario(evento) {

        evento.preventDefault();

        let cadastro = {

            nome: nome,
            senha: senha,
            email: email,
            tipo: "normal"

        }

        try {
            let r = await axios.post(process.env.REACT_APP_BACKEND_URL + '/usuario', cadastro);
            let id = r.data.id;

            alert("Usuário cadastrado com sucesso! ID " + id);
        } catch (error) {
            alert("Ocorreu um erro ao cadastrar o usuário: " + error.message);
        }
    }

    return (

        <div className="pagina-cadastro">

            <section className="cadastro">

                <Header/>

                <h1 className="cadastro">Cadastro</h1>

                <form className="cadastro">

                    <input className="cadastro" type="text" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}/>
                    <input className="cadastro" type="password" placeholder="Senha" value={senha} onChange={e => setSenha(e.target.value)}/>
                    <input className="cadastro" type="text" placeholder="Nome de Usuário" value={nome} onChange={e => setNome(e.target.value)} />

                    <button onClick={cadastrarUsuario} className="cadastro">Cadastro</button>

                    <Link className="cadastro" to="/login">Já possui uma conta? Faça o login</Link>

                </form>

            </section>

        </div>
    )
}