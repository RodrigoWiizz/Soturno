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
        if(!(logado && isAdmin)){
            navigate("/Erro")
        }
    }, [])

    const [nome, setNome] = useState("");
    const [preco, setPreco] = useState(0);
    const [criador, setCriador] = useState("");
    const [descricao, setDescricao] = useState("");

    async function cadastrarFeitico() {
        if(preco < 0){
            alert("não é permitido id ou preco negativo")
        }
        else{
            let cadastro = {

                nome: nome,
                preco: preco,
                criador: criador,
                descricao: descricao
    
            }
    
            try {
                let r = await axios.post(process.env.REACT_APP_BACKEND_URL + '/feitico', cadastro);
                let id = r.data.id;
    
                alert("Feitiço cadastrado com sucesso! ID " + id);
            } catch (error) {
                // aqui você pode tratar o erro como quiser
                // por exemplo, mostrar uma mensagem de erro para o usuário
                alert("Ocorreu um erro ao cadastrar o feitiço: " + error.message);
            }
        }
        
    }

    function cancelar() {
        // volta para a página anterior
        navigate(-1);
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

                <div className="botoes">
                    <button onClick={cadastrarFeitico} className="botao botao1">Cadastrar</button>
                    <button onClick={cancelar} className='botao botao2'>Cancelar</button>
                </div>

            </section>

        </div>
    )
}