import mysql2 from "mysql2/promise";

const con = await mysql2.createConnection({
    host: '20.82.140.127',
    user: 'admin',
    password: '@dm!n',
    database: 'soturno',
})

console.log("Banco conectado")

export { con }