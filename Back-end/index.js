import "dotenv/config";
import express from "express";
import cors from "cors";
import pocaoEndpoints from "./src/controller/pocaoController.js";
import usuarioEndpoints from "./src/controller/usuarioController.js";
import feiticoEndpoints from "./src/controller/feiticosController.js";

const servidor = express()
servidor.use(cors())
servidor.use(express.json())

servidor.use(pocaoEndpoints)
servidor.use(usuarioEndpoints)
servidor.use(feiticoEndpoints)

const port = process.env.PORT
servidor.listen(port, () => console.log(`API subiu na porta ${port}`))