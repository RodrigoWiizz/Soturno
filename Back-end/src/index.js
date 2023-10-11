import "dotenv/config";
import express from "express";
import cors from "cors";

const servidor = express()
servidor.use(cors())
servidor.use(express.json())

const port = process.env.PORT
servidor.listen(port, () => console.log(`API subiu na porta ${port}`))