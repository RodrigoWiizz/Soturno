import './header.scss';

function Header() {

    return (

        <header className="header-header">

            <figure className="figure-header">
                <a className="a-header-logo" href="/"><img className="img-header" src="/assets/images/global/logo-soturno.png" alt="Logo da Loja Soturno" /></a>
                <a className="a-header-logo" href="/">
                    <h1 className="header-titulo-logo">Soturno</h1>
                </a>
            </figure>

            <nav className="nav-header">
                <a className="a-header" href="/produtos">Produtos</a>
                <a className="a-header" href="../contato">Contato</a>
                <a className="a-header" href="../sobre">Sobre</a>
                <a className="a-header" href="../login">Login</a>
            </nav>

        </header>

    )

}

export default Header;