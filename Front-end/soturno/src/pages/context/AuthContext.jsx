import { createContext, useEffect, useState } from "react";

import axios from 'axios';

const Context = createContext();

export default function AuthProvider({children}){

    const [logado, setLogado] = useState(false)
    const [isAdmin, setIsAdmin] = useState(false)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const token = localStorage.getItem("token")
        if(token){
            axios.defaults.headers.Authorization = `Bearer ${token}`
            setLogado(true)
            const tipo = localStorage.getItem("tipo")
            tipo === "admin" ? setIsAdmin(true) : setIsAdmin(false)
        }
        setLoading(false)
    },[])

    if(loading){
        return <h1>loading...</h1>
    }

    return(
        <Context.Provider value={{logado, isAdmin}}>
            {children}
        </Context.Provider>
    );
}

export {Context}