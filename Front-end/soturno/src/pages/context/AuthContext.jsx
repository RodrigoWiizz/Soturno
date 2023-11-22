import { createContext, useEffect, useState } from "react";

import axios from 'axios';

const Context = createContext();

export default function AuthProvider({children}){

    const [logado, setLogado] = useState(false)
    const [isAdmin, setIsAdmin] = useState(false)

    useEffect(() => {
        const token = localStorage.getItem("token")
        if(token){
            axios.defaults.headers.Authorization = `Bearer ${token}`
            setLogado(true)
            const tipo = localStorage.getItem("tipo")
            tipo == "admin" ? setIsAdmin(true) : setIsAdmin(false)
        }
    },[])

    return(
        <Context.Provider value={{logado, isAdmin}}>
            {children}
        </Context.Provider>
    );
}

export {Context}