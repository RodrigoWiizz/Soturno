import { Router } from "express";
import { cadastrarPocao } from "../repository/pocaoRepository";

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

export default endpoints;