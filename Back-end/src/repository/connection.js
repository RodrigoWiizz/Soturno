import mysql2 from "mysql2/promise";

const con = await mysql2.createConnection({
    user: 'root',
    password: 'ravanelli8',
    database: 'soturno',
})

console.log("Banco conectado")

export { con }