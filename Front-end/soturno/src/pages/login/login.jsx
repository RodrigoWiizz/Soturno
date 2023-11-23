import './login.scss';
import Header from '../../components/header/Header.jsx';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';


export default function Login() {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const navigate = useNavigate();

    async function login(event){

        event.preventDefault();
        let body = {
            email: email,
            senha: senha
        }

        try {
            let response = await axios.post(process.env.REACT_APP_BACKEND_URL + "/login", body)
            await Promise.all([
                localStorage.setItem("token", response.data.jwt),
                localStorage.setItem("tipo", response.data.tipo)
            ]).then(e =>{
                response.data.tipo == "admin" ? navigate("/admin") : navigate("/")
            });
        } catch (error) {   
            console.log(error)
            alert(error.response.data.message)
            
        }
    
    }

    return (

        <div className="pagina-login">
            

            <section className="login">

                <Header />

                <h1 className="login-legenda">Login</h1>

                <main className="login">

                    <input className="login login-email" type="text" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}/>
                    <input className="login login-senha" type="password" placeholder="Senha" value={senha} onChange={e => setSenha(e.target.value)}/>


                            <button className='login' onClick={login}>Login</button>

                            <Link className="login-pergunta" to="/cadastro">Não possui uma conta? Cadastre-se</Link>

                        </main>

                    </section>

                </div>

            )

}