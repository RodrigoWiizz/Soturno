import { con } from "./connection.js";

export async function cadastrarPocao(pocao){
    const sql = `INSERT INTO pocoes (nome, preco, criador, imagem, tipo, descricao, ingredientes)
                                    VALUES(?, ?, ?, ?, ?, ?, ?)`

    const [info] = await con.query(sql, [pocao.nome, pocao.preco, pocao.criador, pocao.imagem, pocao.tipo, pocao.descricao, pocao.ingredientes])
    pocao.id = info.insertId;

    return sql;
}