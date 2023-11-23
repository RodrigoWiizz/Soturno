import './alterarPocao.scss'
import Header from "../../components/header-adm/header-admin"
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Context } from '../context/AuthContext';
import axios from 'axios';

export default function AlterarPocao() {

    const {logado, isAdmin} = useContext(Context)
    const [nome, setNome] = useState("")
    const [preco, setPreco] = useState("")
    const [descricao, setDescricao] = useState("")
    const [criador, setCriador] = useState("")
    const [tipo, setTipo] = useState("")
    const [ingredientes, setIngredientes] = useState("")
    const [imagem, setImagem] = useState("")

    const navigate = useNavigate();

    useEffect(() => {
        if(!(logado && isAdmin)){
            navigate("/Erro")
        }
    }, [])

    async function autoComplete(event){
        event.preventDefault()
        try {
            let response = await axios.get(process.env.REACT_APP_BACKEND_URL + '/pocao/buscar/?nome=' + nome)
            if(!response.data || response.data.length === 0){
                alert("Essa Poção não existe")
                setNome("")
                setDescricao("")
                setPreco("")
                setCriador("")
                setTipo("")
                setIngredientes("")
                setImagem("")                
            }
            else{
                setNome(response.data[0].nome)
                setDescricao(response.data[0].descricao)
                setPreco(response.data[0].preco)
                setCriador(response.data[0].criador)
                setTipo(response.data[0].tipo)
                setIngredientes(response.data[0].ingredientes)
                setImagem(response.data[0].imagem)
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
                tipo: tipo,
                ingredientes: ingredientes,
                imagem: imagem
            }
            try {
                let response = await axios.put(process.env.REACT_APP_BACKEND_URL + '/pocao/', body)
                if(response.data == null){
                    alert("Essa poção não existe")
                }
                else{
                    alert(`Poção alterada com sucesso`)
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

        <div className="pagina-alterarPocao">

            <section className="alterarPocao">

                <Header />

                <h1 className="alterarPocao">Alterar Poção</h1>

                <form className="alterarPocao">

                    <div className='alterarPocao'>
                        <input value={nome} onChange={e => setNome(e.target.value)} className="alterarPocao alterarPocao-ok" type="text" placeholder="Nome" />
                        <button onClick={autoComplete} className='alterarPocao-ok'>Ok</button>
                    </div>
                    <input value={preco} onChange={e => setPreco(e.target.value)} className="alterarPocao" type="number" placeholder="Preço" />
                    <input value={criador} onChange={e => setCriador(e.target.value)} className="alterarPocao" type="text" placeholder="Criador" />
                    <input value={tipo} onChange={e => setTipo(e.target.value)} className="alterarPocao" type="text" placeholder="Tipo" />
                    <input value={descricao} onChange={e => setDescricao(e.target.value)} className="alterarPocao" type="text" placeholder="Descrição" />
                    <input value={ingredientes} onChange={e => setIngredientes(e.target.value)} className="alterarPocao" type="text" placeholder="Ingredientes" />
                    <input value={imagem} onChange={e => setImagem(e.target.value)} className="alterarPocao" type="text" placeholder="Imagem" />

                </form>

                <div className="botoes">
                    <button onClick={update} className="botao botao1">Alterar</button>
                    <button onClick={cancelar} className='botao botao2'>Cancelar</button>
                </div>

            </section>

        </div>

    )

}
