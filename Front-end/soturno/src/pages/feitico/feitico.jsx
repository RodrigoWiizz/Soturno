import './feitico.scss'
import Header from '../../components/header/Header.jsx';
import CardFeitico from '../../components/card-feitico/CardFeitico.jsx';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Feitico() {

    const [feitico, setFeitico] = useState([])

    useEffect(() => {
        const buscarFeiticos = async () => {
            const resposta = await axios.get(process.env.REACT_APP_BACKEND_URL + '/feitico')
            setFeitico(resposta.data)
        }
        buscarFeiticos()
    }, [])

    return (

        <body className="pagina-feitico">

            <section className="section-feitico">

                <Header />

                <main className="main-feitico">

                    {feitico.map((item) => {
                        return (
                            <CardFeitico
                                nome={item.nome}
                                descricao={item.descricao}
                            />
                        )
                    })}

                </main>

            </section>

        </body>

    )

}