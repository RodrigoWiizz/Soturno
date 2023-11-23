import { Router } from "express";
import dotenv from 'dotenv';
import jwt from "jsonwebtoken"; 
import { atualizarUsuario, cadastrarUsuario, listarUsuario, listarUsuarioPorEmail, listarUsuarioPorNome, removerUsuario, login} from "../repository/usuarioRepository.js"
import { isAdmin } from "../middleware/token/isAdmin.js";
import { authToken } from "../middleware/token/authToken.js";

dotenv.config()
const usuarioEndpoints = Router();

usuarioEndpoints.post('/login', async(req, resp) => {
    try {
        let usuario = req.body
        let r = await login(usuario)
        if(!r.length){
            resp.status(404).send({message: "Usuário não encontrado"})
        }
        else{
            let token = jwt.sign({id: r[0].idUsuario, nome: r[0].nome, tipo: r[0].tipo}, process.env.SECRET, {expiresIn: 3600})
            resp.status(200).send({jwt: token, tipo: r[0].tipo});
        }
    } catch (error) {
        resp.status(500).send({
            erro: error.message
        })
    }
})

usuarioEndpoints.post('/usuario', async (req, resp) => {
    console.log(req.tipo)
    try {
        let usuarios = await listarUsuarioPorEmail(req.body.email)
        if(!usuarios.length){
            let usuario = req.body;
            let r = await cadastrarUsuario(usuario); 
            resp.status(200).send(r);
        }else{
            resp.status(409).send({mensagem: 'Usuário já cadastrado.'})
        }
        
    } catch (error) {
        resp.status(500).send({
            erro: error.message
        })
    }
})

usuarioEndpoints.put('/usuario', authToken, isAdmin, async (req, resp) => {
    try {
        let usuario = req.body;
        let r = await atualizarUsuario(usuario)
        if(!r.length){
            resp.status(404).send({message: "Usuário não encontrado"})
        }
        else{
            resp.status(200).send(r)
        }
    } catch (error) {
        resp.status(500).send({
            erro: error.message
        })
    }
})

usuarioEndpoints.get('/usuario', authToken, isAdmin,  async (req, resp) => {
    try {
        let r = await listarUsuario()
        resp.send(r)
    } catch (error) {
        resp.status(500).send({
            erro: error.message
        })
    }
})

usuarioEndpoints.get('/usuario/email/:email', authToken, isAdmin, async (req, resp) => {
    try {
        let email = req.params.email
        let r = await listarUsuarioPorEmail(email)
        resp.send(r)
    } catch (error) {
        resp.status(500).send({
            erro: error.message
        })
    }
})

usuarioEndpoints.get('/usuario/nome/:nome', authToken, isAdmin, async (req, resp) => {
    try {
        let nome = req.params.nome
        let r = await listarUsuarioPorNome(nome)
        resp.send(r)
    } catch (error) {
        resp.status(500).send({
            erro: error.message
        })
    }
})

usuarioEndpoints.delete('/usuario/:id', authToken, isAdmin, async (req, resp) => {
    try {
        let id = req.params.id
        let linhasAfetadas = await removerUsuario(id)
        if (linhasAfetadas == 0)
            resp.status(404).send("Usuario não encontrado")
        resp.send() 
    } catch (error) {
        resp.status(500).send({
            erro: error.message
        })
    }
})

export default usuarioEndpoints;