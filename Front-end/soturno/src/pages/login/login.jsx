import './login.scss';
import Header from '../../components/header/Header.jsx';

export default function Login() {

    return (

        <body class="pagina-login">

            <section class="section-login">

                <Header />

                <h1 class="h1-login-legenda">Login</h1>

                <main class="main-login">

                    <input class="input-login input-login-email" type="text" placeholder="Email"/>
                    <input class="input-login input-login-senha" type="password" placeholder="Senha" />


                            <button>Login</button>

                            <a class="a-login-pergunta" href="/cadastro/">Não possui uma conta? Cadastre-se</a>

                        </main>

                    </section>

                </body>

            )

}