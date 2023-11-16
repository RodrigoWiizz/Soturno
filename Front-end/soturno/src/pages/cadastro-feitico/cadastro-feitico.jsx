import './cadastro-feitico.scss'
import Header from '../../components/header/Header.jsx';
import axios from 'axios';
import { useState } from 'react';

export default function CadastroFeitico() {

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

        let r = await axios.post("http://191.233.24.27:5000/feitico", cadastro);
        let id = r.data.id;

        alert("Poção cadastrada com sucesso! ID " + id);
    }

    return (

        <body className='pagina-cadastro-feitico'>

            <section className='section-cadastro-feitico'>

                <Header />

                <h1 className='h1-cadastro-feitico'>Cadastro Feitiço</h1>

                <main className='main-cadastro-feitico'>

                    <input className='input-cadastro-feitico' type="text" placeholder="Nome" value={nome} onChange={e => setNome(e.target.value)}/>
                    <input className='input-cadastro-feitico' type="number" placeholder="Preço" value={preco} onChange={e => setPreco(e.target.value)}/>
                    <input className='input-cadastro-feitico' type="text" placeholder="Criador" value={criador} onChange={e => setCriador(e.target.value)}/>
                    <input className='input-cadastro-feitico' type="text" placeholder="Descrição" value={descricao} onChange={e => setDescricao(e.target.value)}/>

                </main>

                <button onClick={cadastrarPocao}>Cadastrar</button>

            </section>

        </body>
    )
}