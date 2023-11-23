import { useContext, useEffect, useState } from 'react';
import Header from '../../components/header-adm/header-admin';
import axios from 'axios';
import './listagem.scss';
import { Context } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function Listagem() {

    

    const {logado, isAdmin} = useContext(Context)
    const navigate = useNavigate();

    useEffect(() => {
        if(!(logado && isAdmin)){
            navigate("/Erro")
        }
    }, [])

    const [lista, setLista] = useState([]);
    const [selectedOption, setSelectedOption] = useState(null);

    async function listar() {

        let r;

        if (document.getElementById('usuarios').checked) {
            try {
                r = await axios.get(process.env.REACT_APP_BACKEND_URL + '/usuario');
                setLista(r.data);
                setSelectedOption('usuarios');
            } catch (error) {
                console.log(error)
            }
            
        } else if (document.getElementById('pocao').checked) {
            try {
                r = await axios.get(process.env.REACT_APP_BACKEND_URL + '/pocao');
                setLista(r.data);
                setSelectedOption('pocao');
            } catch (error) {
                console.log(error)
            }
            
        } else if (document.getElementById('feitico').checked) {
            try {
                r = await axios.get(process.env.REACT_APP_BACKEND_URL + '/feitico');
                setLista(r.data);
                setSelectedOption('feitico');
            } catch (error) {
                console.log(error)
            }
            
        } else {
            alert('Selecione uma opção');
        }

    }

    function cancelar() {
        // volta para a página anterior
        navigate(-1);
    }

    function tabelaUsuario() {

        return (
            
            <div className='div-listagem-tabela'>
                <table className='table-listagem'>
                    <thead className='thead-listagem'>
                        <tr className='tr-listagem'>Id</tr>
                        <tr className='tr-listagem'>Nome</tr>
                        <tr className='tr-listagem'>Senha</tr>
                        <tr className='tr-listagem'>Email</tr>
                        <tr className='tr-listagem'>Tipo</tr>
                    </thead>
                </table>
                <table className='table-listagem'>
                    {lista.map(item =>
                        
                        <thead className='thead-listagem thead-listagem-itens'>
                            <tr className='tr-listagem tr-listagem-itens'>{item.idUsuario}</tr>
                            <tr className='tr-listagem tr-listagem-itens'>{item.nome}</tr>
                            <tr className='tr-listagem tr-listagem-itens'>{item.senha}</tr>
                            <tr className='tr-listagem tr-listagem-itens'>{item.email}</tr>
                            <tr className='tr-listagem tr-listagem-itens'>{item.tipo}</tr>
                        </thead>

                    )}
                </table>
            </div>

            

        
        )
    }

    function tabelaPocao() {

        return (
            <div className='div-listagem-tabela'>
                <table className='table-listagem'>
                    <thead className='thead-listagem'>
                        <tr className='tr-listagem'>Id</tr>
                        <tr className='tr-listagem'>Nome</tr>
                        <tr className='tr-listagem'>Preço</tr>
                        <tr className='tr-listagem'>Criador</tr>
                        <tr className='tr-listagem'>Tipo</tr>
                    </thead>
                </table>
                <table className='table-listagem'>
                    {lista.map(item =>
                        
                        <thead className='thead-listagem thead-listagem-itens'>
                            <tr className='tr-listagem tr-listagem-itens'>{item.idPocoes}</tr>
                            <tr className='tr-listagem tr-listagem-itens'>{item.nome}</tr>
                            <tr className='tr-listagem tr-listagem-itens'>{item.preco}</tr>
                            <tr className='tr-listagem tr-listagem-itens'>{item.criador}</tr>
                            <tr className='tr-listagem tr-listagem-itens'>{item.tipo}</tr>
                        </thead>

                    )}
                </table>
            </div>
        )
    }

    function tabelaFeitico() {

        return (
            <div className='div-listagem-tabela'>
                <table className='table-listagem'>
                    <thead className='thead-listagem'>
                        <tr className='tr-listagem'>Id</tr>
                        <tr className='tr-listagem'>Nome</tr>
                        <tr className='tr-listagem'>Preço</tr>
                        <tr className='tr-listagem'>Criador</tr>
                    </thead>
                </table>
                <table className='table-listagem'>
                    {lista.map(item =>
                        
                        <thead className='thead-listagem thead-listagem-itens'>
                            <tr className='tr-listagem tr-listagem-itens'>{item.idFeiticos}</tr>
                            <tr className='tr-listagem tr-listagem-itens'>{item.nome}</tr>
                            <tr className='tr-listagem tr-listagem-itens'>{item.preco}</tr>
                            <tr className='tr-listagem tr-listagem-itens'>{item.criador}</tr>
                        </thead>

                    )}
                </table>
            </div>
        )
    }

    return (

        <div className="pagina-listagem">

            <section className="section-listagem">

                <Header />

                <h1 className="h1-listagem">Listagem</h1>

                <main className="main-listagem">

                    <article className="article-listagem">
                        <input className='radio-listagem' id='usuarios' type="radio" name='escolha' />
                        <label className='label-listagem' for="usuarios">Usuários</label>
                    </article>

                    <article className="article-listagem">
                        <input className='radio-listagem' id='pocao' type="radio" name='escolha' />
                        <label className='label-listagem' for="pocao">Poção</label>
                    </article>

                    <article className="article-listagem">
                        <input className='radio-listagem' id='feitico' type="radio" name='escolha' />
                        <label className='label-listagem' for="feitico">Feitiço</label>
                    </article>

                </main>

                <div className="botoes">
                    <button onClick={listar} className="botao botao1">Listar</button>
                    <button onClick={cancelar} className='botao botao2'>Cancelar</button>
                </div>

                <section className='section-listagem-tabela'>

                {selectedOption === 'usuarios' &&
                    tabelaUsuario()
                }

                {selectedOption === 'pocao' &&
                    tabelaPocao()
                }

                {selectedOption === 'feitico' &&
                    tabelaFeitico()
                }  

</section>


            </section>

        </div>

    )

}