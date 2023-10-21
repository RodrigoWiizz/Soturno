import './header.scss';

function Header() {

    return (

        <header>

            <figure>
                <a href="./index.html"><img src="/assets/images/global/logo-soturno.png" alt="Logo da Loja Soturno" /></a>
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

    )

}

export default Header;