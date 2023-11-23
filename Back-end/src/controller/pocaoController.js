import { Router } from "express";
import { atualizarPocao, cadastrarPocao, listarPocao, listarPocaoPorNome, removerPocao} from "../repository/pocaoRepository.js"
import { authToken } from "../middleware/token/authToken.js";
import { isAdmin } from "../middleware/token/isAdmin.js";

const pocaoEndpoints = Router();

pocaoEndpoints.post('/pocao', authToken, isAdmin, async (req, resp) => {
    try {
        let pocao = req.body
        let r = await cadastrarPocao(pocao)
        resp.status(200).send(r)
    } catch (error) {
        resp.status(400).send({
            erro: error.message
        })
    }
})

pocaoEndpoints.put('/pocao', authToken, isAdmin, async (req, resp) => {
    try {
        let pocao = req.body;
        let r = await atualizarPocao(pocao)
        resp.status(200).send(r)
    } catch (error) {
        resp.status(400).send({
            erro: error.message
        })
    }
})


pocaoEndpoints.get('/pocao',  authToken, async (req, resp) => {
    try {
        let r = await listarPocao()
        resp.send(r)
    } catch (error) {
        resp.status(400).send({
            erro: error.message
        })
    }
})

pocaoEndpoints.get('/pocao/buscar/', authToken, async (req, resp) => {
    try {
        let nome = req.query.nome
        let r = await listarPocaoPorNome(nome)
        resp.send(r)
    } catch (error) {
        resp.status(400).send({
            erro: error.message
        })
    }
})

pocaoEndpoints.delete('/pocao/:id', authToken, isAdmin, async (req, resp) => {
    try {
        let id = req.params.id
        let linhasAfetadas = await removerPocao(id)
        if (linhasAfetadas == 0)
            throw new Error("Poção não encontrada")
        resp.send() 
    } catch (error) {
        resp.status(400).send({
            erro: error.message
        })
    }
})

export default pocaoEndpoints;