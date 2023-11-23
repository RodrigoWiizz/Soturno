import { useContext, useEffect, useState } from "react";
import Header from "../../components/header-adm/header-admin"
import axios from "axios";
import "./cadastro-pocao.scss"
import { Context } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function CadastroPocao() {

    const {logado, isAdmin} = useContext(Context)
    const navigate = useNavigate();

    useEffect(() => {
        if(!(logado && isAdmin)){
            navigate("/Erro")
        }
    }, [])

    const [nome, setNome] = useState("");
    const [preco, setPreco] = useState(0);
    const [criador, setCriador] = useState("");
    const [tipo, setTipo] = useState("");
    const [descricao, setDescricao] = useState("");
    const [ingredientes, setIngredientes] = useState("");
    const [imagem, setImagem] = useState("");

    async function cadastrarPocao() {
        if(preco < 0){
            alert("não é permitido id ou preco negativo")
        }
        else{
            let cadastro = {

                nome: nome,
                preco: preco,
                criador: criador,
                tipo: tipo,
                descricao: descricao,
                ingredientes: ingredientes,
                imagem: imagem
    
            }
    
            try {
                let r = await axios.post(process.env.REACT_APP_BACKEND_URL + '/pocao', cadastro);
                let id = r.data.id;
    
                alert("Poção cadastrada com sucesso! ID " + id);
            } catch (error) {
                alert("Ocorreu um erro ao cadastrar a poção: " + error.message);
            }
        }
        
    }

    function cancelar() {
        // volta para a página anterior
        navigate(-1);
    }

    return (

        <div className="pagina-cadastroPocao">

            <section className="cadastroPocao">

                <Header />

                <h1 className="cadastroPocao">Cadastro Poção</h1>

                <form className="cadastroPocao">

                    <input className="cadastroPocao" type="text" placeholder="Nome" value={nome} onChange={e => setNome(e.target.value)} />
                    <input className="cadastroPocao" type="number" placeholder="Preço" value={preco} onChange={e => setPreco(e.target.value)} />
                    <input className="cadastroPocao" type="text" placeholder="Criador" value={criador} onChange={e => setCriador(e.target.value)} />
                    <input className="cadastroPocao" type="text" placeholder="Tipo" value={tipo} onChange={e => setTipo(e.target.value)} />
                    <input className="cadastroPocao" type="text" placeholder="Descrição" value={descricao} onChange={e => setDescricao(e.target.value)} />
                    <input className="cadastroPocao" type="text" placeholder="Ingredientes" value={ingredientes} onChange={e => setIngredientes(e.target.value)} />
                    <input className="cadastroPocao" type="text" placeholder="Imagem" value={imagem} onChange={e => setImagem(e.target.value)} />

                </form>

                <div className="botoes">
                    <button onClick={cadastrarPocao} className="botao botao1">Cadastrar</button>
                    <button onClick={cancelar} className='botao botao2'>Cancelar</button>
                </div>

            </section>

        </div>
    )
}