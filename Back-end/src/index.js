import dotenv from 'dotenv';
import express from "express";
import cors from "cors";
import pocaoEndpoints from "./controller/pocaoController.js";
import usuarioEndpoints from "./controller/usuarioController.js";
import feiticoEndpoints from "./controller/feiticosController.js";

const servidor = express()
dotenv.config();
servidor.use(cors())
servidor.use(express.json())


servidor.use(pocaoEndpoints)
servidor.use(usuarioEndpoints)
servidor.use(feiticoEndpoints)

const port = process.env.PORT
servidor.listen(port, () => console.log(`API subiu na porta ${port}`))