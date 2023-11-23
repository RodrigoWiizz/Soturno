import './feitico.scss'
import Header from '../../components/header/Header.jsx';
import CardFeitico from '../../components/card-feitico/CardFeitico.jsx';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Feitico() {

    const [feitico, setFeitico] = useState([])

    useEffect(() => {
        const buscarFeiticos = async () => {
            try {
                const resposta = await axios.get(process.env.REACT_APP_BACKEND_URL + '/feitico')
                setFeitico(resposta.data)
            } catch (error) {
                console.log(error)
            }
        }
        buscarFeiticos()
    }, [])

    return (

        <div className="pagina-feitico">

            <section className="feitico">

                <Header />

                <main className="feitico">

                    {feitico.map((item) => {
                        return (
                            <CardFeitico
                                nome={item.nome}
                                descricao={item.descricao}
                                criador={item.criador}
                                preco={item.preco}
                            />
                        )
                    })}

                </main>

            </section>

        </div>

    )
}