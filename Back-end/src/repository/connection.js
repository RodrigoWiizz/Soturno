import mysql2 from "mysql2/promise";

const con = await mysql2.createConnection({
    user: process.env.USER,
    password: process.env.PWS,
    database: process.env.DATABASE
})

console.log("Banco conectado")

export { con }