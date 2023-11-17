import jwt from "jsonwebtoken"; 
import dotenv from 'dotenv';

dotenv.config()

const authToken = ((req, res, next) => {

    const { authorization } = req.headers
    if(!authorization){
        res.status(401).send({message: "O usuário não está logado"})
    }
    else{
        const token = authorization.split(' ')[1];
        jwt.verify(token, process.env.SECRET, (erro, decode) =>{
            if(erro){
                res.status(401).json({ mensagem: 'Token inválido' });
            }
            else{
                req.tipo = decode.tipo
                next()
            }
        }) 
    }
})

export { authToken }