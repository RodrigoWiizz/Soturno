import Header from "../../components/header/Header"
import "./cadastro-pocao.scss"
export default function CadastroPocao() {

    return (

        <body className="pagina-cadastroPocao">

            <section className="section-cadastroPocao">

                <Header/>
                <h1 className="h1-cadastroPocao">Cadastro Poção</h1>

                <main className="main-cadastroPocao">

                    <input className="input-cadastroPocao" type="text" placeholder="Nome"/>
                        <input className="input-cadastroPocao" type="text" placeholder="Preço"/>
                            <input className="input-cadastroPocao" type="text" placeholder="Criador"/>
                                <input className="input-cadastroPocao" type="text" placeholder="Tipo"/>
                                    <input className="input-cadastroPocao"  type="text" placeholder="Descrição"/>
                                        <input className="input-cadastroPocao" type="text" placeholder="Ingredientes"/>
                                            <input className="input-cadastroPocao" type="text" placeholder="Imagem"/>

                                            </main>

                                            <button className="button-cadastroPocao">Cadastrar</button>

                                        </section>

                                    </body>
                                    )
}