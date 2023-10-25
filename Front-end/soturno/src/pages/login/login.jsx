import './login.scss';
import Header from '../../components/header/Header.jsx';

export default function Login() {

    return (

        <body className="pagina-login">

            <section className="section-login">

                <Header />

                <h1 className="h1-login-legenda">Login</h1>

                <main className="main-login">

                    <input className="input-login input-login-email" type="text" placeholder="Email"/>
                    <input className="input-login input-login-senha" type="password" placeholder="Senha" />


                            <button>Login</button>

                            <a className="a-login-pergunta" href="/cadastro/">Não possui uma conta? Cadastre-se</a>

                        </main>

                    </section>

                </body>

            )

}