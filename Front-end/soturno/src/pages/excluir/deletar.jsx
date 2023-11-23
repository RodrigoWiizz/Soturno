import './deletar.scss';
import Header from '../../components/header-adm/header-admin';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { Context } from '../context/AuthContext';

export default function Deletar() {

    const {logado, isAdmin} = useContext(Context)
    const navigate = useNavigate();

    useEffect(() => {
        if(!(logado && isAdmin)){
            navigate("/Erro")
        }
    }, [])

    const [tipo, setTipo] = useState("usuarios")
    const [id, setId] = useState("")

    async function deletar(event){
        event.preventDefault()
        if(id < 0){
            alert("não é permitido id negativo")
        }
        else{
            try {
                let response = await axios.delete(`process.env.REACT_APP_BACKEND_URL/${tipo}/${id}`)
                // let response = await axios.delete(`http://localhost:5000/${tipo}/${id}`)
                alert(`Delete do tipo ${tipo} realizado com sucesso`)
            } catch (error) {
                alert(`Erro ao tentar buscar`)
            }
        }
        
    }

    return (

        <div className="pagina-deletar">

            <section className="deletar">

                <Header />

                <section className="deletar-conteudo">

                    <h1 className='deletar'>Excluir</h1>
                    <input className='deletar' placeholder='Id' type="text" value={id} onChange={event => setId(event.target.value)}/>
                    <select className='deletar' id="selecao" value={tipo} onChange={event => setTipo(event.target.value)}>
                        <option value="usuarios">Usuarios</option>
                        <option value="pocoes">Poções</option>
                        <option value="feiticos">Feitiços</option>
                    </select>
                    <button onClick={deletar} className='deletar'>Deletar</button>

                </section>

            </section>

        </div>

    )

}