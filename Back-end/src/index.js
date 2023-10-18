import "dotenv/config";
import express from "express";
import cors from "cors";
import pocaoEndpoints from "./controller/pocaoController.js";

const servidor = express()
servidor.use(cors())
servidor.use(express.json())
servidor.use(pocaoEndpoints)

const port = process.env.PORT
servidor.listen(port, () => console.log(`API subiu na porta ${port}`))