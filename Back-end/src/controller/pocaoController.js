import { Router } from "express";
import { cadastrarPocao, listarPocao, remover } from "../repository/pocaoRepository";

const endpoints = Router();

endpoints.post('/pocao', async (req, resp) => {
    try {
        let pocao = req.body;
        let r = await cadastrarPocao(pocao);
        resp.status(200).send(r);
    } catch (error) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

endpoints.get('/filmes', async (req, resp) => {
    try {
        let r = await listarPocao()
        resp.send(r)
    } catch (error) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

endpoints.delete('/delete/:id', async (req, resp) => {
    try {
        let id = req.params.id
        let lenhasAfetadas = await remover(id)
    } catch (error) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

export default endpoints;