import './pocao.scss'
import CardPocao from '../../components/card-pocao/CardPocao.jsx';
import Header from '../../components/header/Header';
import { useEffect, useState } from 'react';
import axios from 'axios';


export default function Pocao() {

    const [pocao , setPocao] = useState([])

    useEffect(() => {
        const buscarPocoes = async () => {
            const resposta = await axios.get('http://191.233.24.27:5000/pocao')
            setPocao(resposta.data)
        }
        buscarPocoes()
    }, [])

    return (

        <body className="pagina-pocao">

            <section className="section-pocao">

                <Header />

                <h1 className="h1-pocao">Cura</h1>

                

                    <main className="main-pocao">


                        {pocao.map((item) => {
                            return (
                                <CardPocao
                                    nome={item.nome}
                                    descricao={item.descricao}
                                    imagem={item.imagem}
                                    preco={item.preco}
                                    criador={item.criador}
                                    tipo={item.tipo}
                                    ingredientes={item.ingredientes}
                                />
                            )
                        })}
                        

                    </main>


                



            </section>

        </body>

    )

}