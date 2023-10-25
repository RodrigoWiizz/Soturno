import './header.scss';

function Header() {

    return (

        <header class="header-header">

            <figure class="figure-header">
                <a class="a-header-logo" href="./index.html"><img class="img-header" src="/assets/images/global/logo-soturno.png" alt="Logo da Loja Soturno" /></a>
                <a class="a-header-logo" href="./index.html">
                    <h1 class="header-titulo-logo">Soturno</h1>
                </a>
            </figure>

            <nav class="nav-header">
                <a class="a-header" href="/produtos">Produtos</a>
                <a class="a-header" href="../contato">Contato</a>
                <a class="a-header" href="../sobre">Sobre</a>
                <a class="a-header" href="../login">Login</a>
            </nav>

        </header>

    )

}

export default Header;