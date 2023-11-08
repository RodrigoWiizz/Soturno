import { useState } from 'react';
import Header from '../../components/header/Header';
import axios from 'axios';
import './listagem.scss';

export default function Listagem() {

    const [lista, setLista] = useState([]);
    const [selectedOption, setSelectedOption] = useState(null);

    async function listar() {

        let r;

        if (document.getElementById('usuarios').checked) {
            r = await axios.get('http://localhost:5000/usuario');
            setLista(r.data);
            setSelectedOption('usuarios');

        } else if (document.getElementById('pocao').checked) {
            r = await axios.get('http://localhost:5000/pocao');
            setLista(r.data);
            setSelectedOption('pocao');

        } else if (document.getElementById('feitico').checked) {
            r = await axios.get('http://localhost:5000/feitico');
            setLista(r.data);
            setSelectedOption('feitico');

        } else {
            alert('Selecione uma opção');
        }

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
                <tbody className='tbody-listagem'>
                    {lista.map(item =>
                        
                        <tr className='tr-listagem'>
                            <td className='td-listagem'>{item.idUsuario}</td>
                            <td className='td-listagem'>{item.nome}</td>
                            <td className='td-listagem'>{item.senha}</td>
                            <td className='td-listagem'>{item.email}</td>
                            <td className='td-listagem'>{item.tipo}</td>
                        </tr>

                    )}
                </tbody>
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
                <tbody className='tbody-listagem'>
                    {lista.map(item =>
                        
                        <tr className='tr-listagem'>
                            <td className='td-listagem'>{item.idPocoes}</td>
                            <td className='td-listagem'>{item.nome}</td>
                            <td className='td-listagem'>{item.preco}</td>
                            <td className='td-listagem'>{item.criador}</td>
                            <td className='td-listagem'>{item.tipo}</td>
                        </tr>

                    )}
                </tbody>
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
                        <tr className='tr-listagem'>Descrição</tr>
                    </thead>
                </table>
                <tbody className='tbody-listagem'>
                    {lista.map(item =>
                        
                        <tr className='tr-listagem'>
                            <td className='td-listagem'>{item.idFeiticos}</td>
                            <td className='td-listagem'>{item.nome}</td>
                            <td className='td-listagem'>{item.preco}</td>
                            <td className='td-listagem'>{item.criador}</td>
                            <td className='td-listagem'>{item.tipo}</td>
                        </tr>

                    )}
                </tbody>
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

                <button onClick={listar} className="button-listagem">Listar</button>

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

        </div>

    )

}