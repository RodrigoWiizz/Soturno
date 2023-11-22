import './cadastro-feitico.scss'
import Header from '../../components/header-adm/header-admin';
import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Context } from '../context/AuthContext';

export default function CadastroFeitico() {

    const {logado, isAdmin} = useContext(Context)
    const navigate = useNavigate();

    useEffect(() => {
        if(!logado && !isAdmin){
            navigate("/")
            alert("Só administradores podem acessar essa página")
        }
    }, [])

    const [nome, setNome] = useState("");
    const [preco, setPreco] = useState(0);
    const [criador, setCriador] = useState("");
    const [descricao, setDescricao] = useState("");

    async function cadastrarPocao() {
        let cadastro = {

            nome: nome,
            preco: preco,
            criador: criador,
            descricao: descricao

        }

        let r = await axios.post(process.env.REACT_APP_BACKEND_URL + '/feitico', cadastro);
        let id = r.data.id;

        alert("Poção cadastrada com sucesso! ID " + id);
    }

    return (

        <div className='pagina-cadastroFeitico'>

            <section className='cadastroFeitico'>

                <Header />

                <h1 className='cadastroFeitico'>Cadastro Feitiço</h1>

                <form className='cadastroFeitico'>

                    <input className='cadastroFeitico' type="text" placeholder="Nome" value={nome} onChange={e => setNome(e.target.value)} />
                    <input className='cadastroFeitico' type="number" placeholder="Preço" value={preco} onChange={e => setPreco(e.target.value)} />
                    <input className='cadastroFeitico' type="text" placeholder="Criador" value={criador} onChange={e => setCriador(e.target.value)} />
                    <input className='cadastroFeitico' type="text" placeholder="Descrição" value={descricao} onChange={e => setDescricao(e.target.value)} />

                </form>

                <button className='cadastroFeitico' onClick={cadastrarPocao}>Cadastrar</button>

            </section>

        </div>
    )
}