import { Router } from "express";
import { atualizarFeitico, cadastrarFeitico, listarFeitico, listarFeiticoPorNome, removerFeitico} from "../repository/feiticoRepository.js"
import { authToken } from "../middleware/token/authToken.js";
import { isAdmin } from "../middleware/token/isAdmin.js";

const feiticoEndpoints = Router();

feiticoEndpoints.post('/feitico', authToken, isAdmin, async (req, resp) => {
    try {
        let feitico = req.body;
        let r = await cadastrarFeitico(feitico);
        resp.status(200).send(r);
    } catch (error) {
        resp.status(400).send({
            erro: error.message
        })
    }
})

feiticoEndpoints.put('/feitico', authToken, isAdmin, async (req, resp) => {
    try {
        let feitico = req.body;
        let r = await atualizarFeitico(feitico)
        resp.status(200).send(r)
    } catch (error) {
        resp.status(400).send({
            erro: error.message
        })
    }
})

feiticoEndpoints.get('/feitico', authToken, async (req, resp) => {
    try {
        let r = await listarFeitico()
        resp.send(r)
    } catch (error) {
        resp.status(400).send({
            erro: error.message
        })
    }
})

feiticoEndpoints.get('/feitico/buscar/', authToken, async (req, resp) => {
    try {
        let nome = req.query.nome
        let r = await listarFeiticoPorNome(nome)
        resp.send(r)
    } catch (error) {
        resp.status(400).send({
            erro: error.message
        })
    }
})

feiticoEndpoints.delete('/feitico/:id', authToken, isAdmin, async (req, resp) => {
    try {
        let id = req.params.id
        let linhasAfetadas = await removerFeitico(id)
        if (linhasAfetadas == 0)
            throw new Error("Poção não encontrada")
        resp.send() 
    } catch (error) {
        resp.status(400).send({
            erro: error.message
        })
    }
})

export default feiticoEndpoints;