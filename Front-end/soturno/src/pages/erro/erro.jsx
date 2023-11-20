import './erro.scss';
import { useNavigate } from 'react-router-dom'

export default function Erro() {

    const navigate = useNavigate();

    function navegar() {
        navigate('/');
    }

    return (

        <div className="pagina-erro">

            <section className="erro">
                <h1 className='erro'>ERROR</h1>
                <h2 className='erro'>Você tentou acessar algo que não deveria...</h2>
                <h2 className='erro'>Clique no botão abaixo e tudo voltara ao normal</h2>
                <button onClick={navegar} className='erro'>Clique Aqui</button>
            </section>

        </div>

    )

}