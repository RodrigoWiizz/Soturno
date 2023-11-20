import './alterarPocao.scss'
import Header from "../../components/header-adm/header-admin"

export default function AlterarPocao() {

    return (

        <div className="pagina-alterarPocao">

            <section className="alterarPocao">

                <Header />

                <h1 className="alterarPocao">Alterar Poção</h1>

                <form className="alterarPocao">

                    <div className='alterarPocao'>
                        <input className="alterarPocao alterarPocao-ok" type="text" placeholder="Nome" />
                        <button className='alterarPocao-ok'>Ok</button>
                    </div>

                    <input className="alterarPocao" type="number" placeholder="Preço" />
                    <input className="alterarPocao" type="text" placeholder="Criador" />
                    <input className="alterarPocao" type="text" placeholder="Tipo" />
                    <input className="alterarPocao" type="text" placeholder="Descrição" />
                    <input className="alterarPocao" type="text" placeholder="Ingredientes" />
                    <input className="alterarPocao" type="text" placeholder="Imagem" />

                </form>

                <button className="alterarPocao">Alterar</button>

            </section>

        </div>

    )

}