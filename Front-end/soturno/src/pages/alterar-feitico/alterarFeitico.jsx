import './alterarFeitico.scss'
import Header from '../../components/header-adm/header-admin';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Context } from '../context/AuthContext';

export default function CadastroFeitico() {

    const {logado, isAdmin} = useContext(Context)
    const {nome,  setNome} = useState("")
    const {preco,  setPreco} = useState("")
    const {descricao,  setDescricao} = useState("")
    const {criador,  setCriador} = useState("")

    const navigate = useNavigate();

    useEffect(() => {
        if(!(logado && isAdmin)){
            navigate("/Erro")
            
        }
    }, [])

    return (

        <div className='pagina-alterarFeitico'>

            <section className='alterarFeitico'>

                <Header />

                <h1 className='alterarFeitico'>Alterar Feitiço</h1>

                <form className='alterarFeitico'>

                    <div className='alterarFeitico'>
                        <input value={nome} onChange={e => {setNome(e.target.value)}} className="alterarFeitico alterarFeitico-ok" type="text" placeholder="Nome" />
                        <button className='alterarFeitico-ok'>Ok</button>
                    </div>
                    <input value={preco} onChange={e => {setPreco(e.target.value)}} className='alterarFeitico' type="number" placeholder="Preço" />
                    <input value={criador} onChange={e => {setCriador(e.target.value)}}className='alterarFeitico' type="text" placeholder="Criador" />
                    <input value={descricao} onChange={e => {setDescricao(e.target.value)}}className='alterarFeitico' type="text" placeholder="Descrição" />

                </form>

                <button className='alterarFeitico'>Alterar</button>

            </section>

        </div>
    )
}
