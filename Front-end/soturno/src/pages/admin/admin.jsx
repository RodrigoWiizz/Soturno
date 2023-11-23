import { useContext, useEffect } from "react";
import HeaderAdmin from "../../components/header-adm/header-admin";
import "./admin.scss";
import { Context } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Admin() {

    const {logado, isAdmin} = useContext(Context)
    const navigate = useNavigate();

    useEffect(() => {
        if(!(logado && isAdmin)){
            navigate("/Erro")
        }
    }, [])

    return (

        <div className="pagina-admin">

            <section className="admin">

                <HeaderAdmin />

                <main className="admin">

                    <p className="admin">
                        Na Soturno, a magia ganha vida! Prepare-se para entrar em um mundo repleto de mistério,
                        maravilha e poderes sobrenaturais. Seja você um bruxo experiente ou um curioso novato,
                        a Poções e Feitiços Mágicos é o lugar perfeito para explorar o inexplicável.
                    </p>

                </main>

            </section>
            
        </div>
    )
}