import { useContext, useEffect, useState } from "react";
import Header from '../../components/header-adm/header-admin';
import axios from "axios";
import './deletar.scss';
import { Context } from '../context/AuthContext';
import { useNavigate } from "react-router-dom";

export default function Deletar() {

    const [id, setId] = useState("");
    const [selecao, setSelecao] = useState("usuario");
    const {logado, isAdmin} = useContext(Context)
    

    useEffect(() => {
        if(!(logado && isAdmin)){
            navigate("/Erro")
        }
    }, [])

    const navigate = useNavigate();

    async function deletarItem() {
        // exclui o item do banco de dados de acordo com o id e a seleção do usuário
        let rota = process.env.REACT_APP_BACKEND_URL + '/' + selecao + '/' + id;
        try {
            let r = await axios.delete(rota);
            alert("Item excluído com sucesso!");
        } catch (error) {
            alert("Ocorreu um erro ao excluir o item: " + error.message);
        }
    }

    function cancelar() {
        // volta para a página anterior
        navigate(-1);
    }

    return (

        <div className="pagina-deletar">

            <section className="deletar">

                <Header />

                <section className="deletar-conteudo">

                    <h1 className='deletar'>Excluir</h1>
                    <input className='deletar' placeholder='Id' type="text" value={id} onChange={event => setId(event.target.value)}/>
                    <select className='deletar' id="selecao" value={selecao} onChange={event => setSelecao(event.target.value)}>
                        <option value="usuario">Usuarios</option>
                        <option value="pocao">Poções</option>
                        <option value="feitico">Feitiços</option>
                    </select>
                    <div className="deletar">
                        <button onClick={deletarItem} className='deletar'>Deletar</button>
                        <button onClick={cancelar} className='deletar'>Cancelar</button>
                    </div>

                </section>

            </section>

        </div>

    )

}
