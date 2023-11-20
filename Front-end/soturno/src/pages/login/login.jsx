import './login.scss';
import Header from '../../components/header/Header.jsx';
import { Link } from 'react-router-dom';

export default function Login() {

    return (

        <div className="pagina-login">
            

            <section className="login">

                <Header />

                <h1 className="login-legenda">Login</h1>

                <main className="login">

                    <input className="login login-email" type="text" placeholder="Email"/>
                    <input className="login login-senha" type="password" placeholder="Senha" />


                            <button className='login'>Login</button>

                            <Link className="login-pergunta" href="/cadastro/">Não possui uma conta? Cadastre-se</Link>

                        </main>

                    </section>

                </div>

            )

}