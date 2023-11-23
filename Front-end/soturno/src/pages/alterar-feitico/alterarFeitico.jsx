import './alterarFeitico.scss'
import Header from '../../components/header-adm/header-admin';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Context } from '../context/AuthContext';
import axios from 'axios';

export default function CadastroFeitico() {

    const {logado, isAdmin} = useContext(Context)
    const [nome, setNome] = useState("")
    const [preco, setPreco] = useState("")
    const [descricao, setDescricao] = useState("")
    const [criador, setCriador] = useState("")

    const navigate = useNavigate();


    useEffect(() => {
        if(!(logado && isAdmin)){
            navigate("/Erro")
            
        }
    }, [])

    async function autoComplete(event){
        event.preventDefault()
        try {
            let response = await axios.get(process.env.REACT_APP_BACKEND_URL + '/feitico/buscar/?nome=' + nome)
            if(!response.data || response.data.length === 0){
                alert("Esse Feitiço não existe")
                setNome("")
                setDescricao("")
                setPreco("")
                setCriador("")                
            }
            else{
                setNome(response.data[0].nome)
                setDescricao(response.data[0].descricao)
                setPreco(response.data[0].preco)
                setCriador(response.data[0].criador)
                console.log(response.data) 
            }
        } catch (error) {
            alert(`Erro ao tentar buscar`)
        }
    }

    async function update(event){
        event.preventDefault()
        if(preco < 0){
            alert("não é permitido id ou preco negativo")
        }
        else{
            let body = {
                nome: nome,
                preco: preco,
                criador: criador,
                descricao: descricao,
            }
            try {
                let response = await axios.put(process.env.REACT_APP_BACKEND_URL + '/feitico/', body)
                if(response.data == null){
                    alert("Esse feitiço não existe")
                }
                else{
                    alert(`Feitiço alterado com sucesso`)
                }
            } catch (error) {
                alert(error.response.data.message)
            }
        }
    }

    function cancelar() {
        // volta para a página anterior
        navigate(-1);
    }

    return (

        <div className='pagina-alterarFeitico'>

            <section className='alterarFeitico'>

                <Header />

                <h1 className='alterarFeitico'>Alterar Feitiço</h1>

                <form className='alterarFeitico'>

                    <div className='alterarFeitico'>
                        <input value={nome} onChange={e => setNome(e.target.value)} className="alterarFeitico alterarFeitico-ok" type="text" placeholder="Nome" />
                        <button onClick={autoComplete} className='alterarFeitico-ok'>Ok</button>
                    </div>
                    <input value={preco} onChange={e => setPreco(e.target.value)} className='alterarFeitico' type="number" placeholder="Preço" />
                    <input value={criador} onChange={e => setCriador(e.target.value)} className='alterarFeitico' type="text" placeholder="Criador" />
                    <input value={descricao} onChange={e => setDescricao(e.target.value)} className='alterarFeitico' type="text" placeholder="Descrição" />

                </form>

                <div className="botoes">
                    <button onClick={update} className="botao botao1">Alterar</button>
                    <button onClick={cancelar} className='botao botao2'>Cancelar</button>
                </div>

            </section>

        </div>
    )
}
