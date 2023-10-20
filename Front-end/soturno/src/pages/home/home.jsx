import './home.scss';

import { Link } from 'react-router-dom';


export default function Home() {

    return (
        <body>
            <section>

                <header>

                    <figure>
                        <a href="./index.html"><img src="../../../public/assets/images/global/logo-soturno.png" alt="Logo da Loja Soturno"/></a>
                        <a href="./index.html">
                            <h1 class="titulo-logo">Soturno</h1>
                        </a>
                    </figure>

                    <nav>
                        <a href="../Produtos/index.html">Produtos</a>
                        <a href="../Contato/index.html">Contato</a>
                        <a href="../Sobre/index.html">Sobre</a>
                        <a href="../Login/index.html">Login</a>
                    </nav>

                </header>

                <main>

                    <p>
                        Na Soturno, a magia ganha vida! Prepare-se para entrar em um mundo repleto de mistério,
                        maravilha e poderes sobrenaturais. Seja você um bruxo experiente ou um curioso novato,
                        a Poções e Feitiços Mágicos é o lugar perfeito para explorar o inexplicável.
                    </p>

                </main>

            </section>
        </body>
    )

}