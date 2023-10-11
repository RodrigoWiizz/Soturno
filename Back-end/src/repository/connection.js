import mysql2 from "mysql2/promise";

const con = await mysql2.createConnection({
    host: process.env.HOST,
    database: process.env.DATABASE,
    password: process.env.PWS,
    user: process.env.USERNAME
})

console.log("Banco conectado")

export { con }