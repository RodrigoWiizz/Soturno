import { useState } from "react";
import Header from "../../components/header/Header"
import axios from "axios";
import "./cadastro-pocao.scss"
export default function CadastroPocao() {

    const [nome, setNome] = useState("");
    const [preco, setPreco] = useState(0);
    const [criador, setCriador] = useState("");
    const [tipo, setTipo] = useState("");
    const [descricao, setDescricao] = useState("");
    const [ingredientes, setIngredientes] = useState("");
    const [imagem, setImagem] = useState("");

    async function cadastrarPocao() {
        let cadastro = {

            nome: nome,
            preco: preco,
            criador: criador,
            tipo: tipo,
            descricao: descricao,
            ingredientes: ingredientes,
            imagem: imagem

        }

        let r = await axios.post("http://191.233.24.27:5000/pocao", cadastro);
        let id = r.data.id;

        alert("Poção cadastrada com sucesso! ID " + id);
    }

    return (

        <body className="pagina-cadastroPocao">

            <section className="section-cadastroPocao">

                <Header />
                <h1 className="h1-cadastroPocao">Cadastro Poção</h1>

                <main className="main-cadastroPocao">

                    <input className="input-cadastroPocao" type="text" placeholder="Nome" value={nome} onChange={e => setNome(e.target.value)}/>
                    <input className="input-cadastroPocao" type="number" placeholder="Preço" value={preco} onChange={e => setPreco(e.target.value)}/>
                    <input className="input-cadastroPocao" type="text" placeholder="Criador" value={criador} onChange={e => setCriador(e.target.value)}/>
                    <input className="input-cadastroPocao" type="text" placeholder="Tipo" value={tipo} onChange={e => setTipo(e.target.value)}/>
                    <input className="input-cadastroPocao" type="text" placeholder="Descrição" value={descricao} onChange={e => setDescricao(e.target.value)}/>
                    <input className="input-cadastroPocao" type="text" placeholder="Ingredientes" value={ingredientes} onChange={e => setIngredientes(e.target.value)}/>
                    <input className="input-cadastroPocao" type="text" placeholder="Imagem" value={imagem} onChange={e => setImagem(e.target.value)}/>

                </main>

                <button onClick={cadastrarPocao} className="button-cadastroPocao">Cadastrar</button>

            </section>

        </body>
    )
}