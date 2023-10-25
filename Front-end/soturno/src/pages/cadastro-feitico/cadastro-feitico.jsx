import './cadastro-feitico.scss'
import Header from '../../components/header/Header.jsx';

export default function CadastroFeitico() {

    return (

        <body className='pagina-cadastro-feitico'>

            <section className='section-cadastro-feitico'>

                <Header />

                <h1 className='h1-cadastro-feitico'>Cadastro Feitiço</h1>

                <main className='main-cadastro-feitico'>

                    <input className='input-cadastro-feitico' type="text" placeholder="Nome" />
                    <input className='input-cadastro-feitico' type="text" placeholder="Preço" />
                    <input className='input-cadastro-feitico' type="text" placeholder="Criador" />
                    <input className='input-cadastro-feitico' type="text" placeholder="Descrição" />

                </main>

                <button>Cadastrar</button>

            </section>

        </body>
    )
}