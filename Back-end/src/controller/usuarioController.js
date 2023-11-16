import { Router } from "express";
import dotenv from 'dotenv';
import jwt from "jsonwebtoken"; 
import { atualizarUsuario, cadastrarUsuario, listarUsuario, listarUsuarioPorEmail, listarUsuarioPorNome, removerUsuario, login} from "../repository/usuarioRepository.js"

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
            let token = jwt.sign({id: r.idUsuario, nome: r.nome, tipo: r.tipo}, process.env.SECRET, {expiresIn: 300})
            resp.status(200).send(token);
        }
    } catch (error) {
        resp.status(500).send({
            erro: error.message
        })
    }
})

usuarioEndpoints.post('/usuario', async (req, resp) => {
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

usuarioEndpoints.put('/usuario', async (req, resp) => {
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

usuarioEndpoints.get('/usuario', async (req, resp) => {
    try {
        let r = await listarUsuario()
        resp.send(r)
    } catch (error) {
        resp.status(500).send({
            erro: error.message
        })
    }
})

usuarioEndpoints.get('/usuario/email/:email', async (req, resp) => {
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

usuarioEndpoints.get('/usuario/nome/:nome', async (req, resp) => {
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

usuarioEndpoints.delete('/usuario/:id', async (req, resp) => {
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