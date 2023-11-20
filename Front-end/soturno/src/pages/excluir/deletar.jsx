import './deletar.scss';
import Header from '../../components/header-adm/header-admin';

export default function Deletar() {

    return (

        <div className="pagina-deletar">

            <section className="deletar">

                <Header />

                <section className="deletar-conteudo">

                    <h1 className='deletar'>Excluir</h1>
                    <input className='deletar' placeholder='Id' type="text" />
                    <select className='deletar' id="selecao">
                        <option value="usuarios">Usuarios</option>
                        <option value="pocoes">Poções</option>
                        <option value="feiticos">Feitiços</option>
                    </select>
                    <button className='deletar'>Deletar</button>

                </section>

            </section>

        </div>

    )

}