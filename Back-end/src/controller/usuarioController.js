import { Router } from "express";
import { atualizarUsuario, cadastrarUsuario, listarUsuario, listarUsuarioPorNome, removerUsuario, login} from "../repository/usuarioRepository.js"

const usuarioEndpoints = Router();

usuarioEndpoints.post('/login', async(req, resp) => {
    try {
        let usuario = req.body
        let r = await login(usuario)
        if(!r){
            resp.status(404).send({message: "Usuário não encontrado"})
        }
        //Gerar jwt token 
        resp.status(200).send(r);
    } catch (error) {
        resp.status(400).send({
            erro: error.message
        })
    }
})

//antes de cadastrar, buscar por email no banco, garantindo a integradade
usuarioEndpoints.post('/usuario', async (req, resp) => {
    try {
        let usuario = req.body;
        let r = await cadastrarUsuario(usuario);
        resp.status(200).send(r);
    } catch (error) {
        resp.status(400).send({
            erro: error.message
        })
    }
})

usuarioEndpoints.put('/usuario', async (req, resp) => {
    try {
        let usuario = req.body;
        let r = await atualizarUsuario(usuario)
        if(!r){
            resp.status(404).send({message: "Usuário não encontrado"})
        }
        resp.status(200).send(r)
    } catch (error) {
        resp.status(400).send({
            erro: error.message
        })
    }
})

usuarioEndpoints.get('/usuario', async (req, resp) => {
    try {
        let r = await listarUsuario()
        resp.send(r)
    } catch (error) {
        resp.status(400).send({
            erro: error.message
        })
    }
})

//repensar o endpoint 
usuarioEndpoints.get('/usuario/buscar/asd', async (req, resp) => {
    try {
        let email = req.query.email
        let r = await listarUsuarioPorEmail(email)
        resp.send(r)
    } catch (error) {
        resp.status(400).send({
            erro: error.message
        })
    }
})

usuarioEndpoints.get('/usuario/buscar/', async (req, resp) => {
    try {
        let nome = req.query.nome
        let r = await listarUsuarioPorNome(nome)
        resp.send(r)
    } catch (error) {
        resp.status(400).send({
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
        resp.status(400).send({
            erro: error.message
        })
    }
})

export default usuarioEndpoints;