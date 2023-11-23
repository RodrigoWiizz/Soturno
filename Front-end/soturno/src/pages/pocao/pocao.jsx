import './pocao.scss';
import CardPocao from '../../components/card-pocao/CardPocao.jsx';
import Header from '../../components/header/Header';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Pocao() {
    const [pocao, setPocao] = useState([]);

    useEffect(() => {
        const buscarPocoes = async () => {
            try {
                const resposta = await axios.get(process.env.REACT_APP_BACKEND_URL + '/pocao');
                setPocao(resposta.data);
            } catch (error) {
                console.log(error);
            }
        };
        buscarPocoes();
    }, []);

    const cardsCura = [];
    const cardsAtaque = [];
    const cardsDefesa = [];
    const cardsOutros = [];

    pocao.forEach((item) => {
        const tipoLowerCase = item.tipo.toLowerCase();

        switch (tipoLowerCase) {
            case 'cura':
                cardsCura.push(
                    <CardPocao
                        key={item.nome}
                        nome={item.nome}
                        descricao={item.descricao}
                        imagem={item.imagem}
                        preco={item.preco}
                        criador={item.criador}
                        tipo={item.tipo}
                        ingredientes={item.ingredientes}
                    />
                );
                break;
            case 'ataque':
                cardsAtaque.push(
                    <CardPocao
                        key={item.nome}
                        nome={item.nome}
                        descricao={item.descricao}
                        imagem={item.imagem}
                        preco={item.preco}
                        criador={item.criador}
                        tipo={item.tipo}
                        ingredientes={item.ingredientes}
                    />
                );
                break;
            case 'defesa':
                cardsDefesa.push(
                    <CardPocao
                        key={item.nome}
                        nome={item.nome}
                        descricao={item.descricao}
                        imagem={item.imagem}
                        preco={item.preco}
                        criador={item.criador}
                        tipo={item.tipo}
                        ingredientes={item.ingredientes}
                    />
                );
                break;
            default:
                cardsOutros.push(
                    <CardPocao
                        key={item.nome}
                        nome={item.nome}
                        descricao={item.descricao}
                        imagem={item.imagem}
                        preco={item.preco}
                        criador={item.criador}
                        tipo={item.tipo}
                        ingredientes={item.ingredientes}
                    />
                );
                break;
        }
    });

    return (
        <div className="pagina-pocao">
            <section className="pocao">
                <Header />

                <h1 className="pocao">Cura</h1>

                <div className='pocao-cards'>{cardsCura}</div>

                <h1 className="pocao">Ataque</h1>

                <div className='pocao-cards'>{cardsAtaque}</div>
                
                <h1 className="pocao">Defesa</h1>

                <div className='pocao-cards'>{cardsDefesa}</div>

                <h1 className="pocao">Outros</h1>

                <div className='pocao-cards'>{cardsOutros}</div>
                
            </section>
        </div>
    );
}
