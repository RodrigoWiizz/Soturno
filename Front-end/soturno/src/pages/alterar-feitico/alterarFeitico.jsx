import './alterarFeitico.scss'
import Header from '../../components/header-adm/header-admin';
import { useContext, useEffect } from 'react';
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

    return (

        <div className='pagina-alterarFeitico'>

            <section className='alterarFeitico'>

                <Header />

                <h1 className='alterarFeitico'>Alterar Feitiço</h1>

                <form className='alterarFeitico'>

                    <div className='alterarFeitico'>
                        <input className="alterarFeitico alterarFeitico-ok" type="text" placeholder="Nome" />
                        <button className='alterarFeitico-ok'>Ok</button>
                    </div>
                    <input className='alterarFeitico' type="number" placeholder="Preço" />
                    <input className='alterarFeitico' type="text" placeholder="Criador" />
                    <input className='alterarFeitico' type="text" placeholder="Descrição" />

                </form>

                <button className='alterarFeitico'>Alterar</button>

            </section>

        </div>
    )
}
