import './header-adm.scss';

function HeaderAdmin() {

    return (

        <header className="header-header-admin">

            <figure className="figure-header">
                <a className="a-header-logo" href="./admin"><img className="img-header" src="/assets/images/global/logo-soturno.png" alt="Logo da Loja Soturno" /></a>
                <a className="a-header-logo" href="./admin">
                    <h1 className="header-titulo-logo">Soturno</h1>
                </a>
            </figure>

            <nav className="nav-header">
                <a className="a-header" href="/gerenciamento">Gerenciamento</a>
                <a className="a-header" href="../produtos-admin">Produtos</a>
                <a className="a-header" href="../contato">Contato</a>
                <a className="a-header" href="../sobre">Sobre</a>
            </nav>

        </header>

    )

}

export default HeaderAdmin;