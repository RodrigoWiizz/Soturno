import { con } from "./connection.js";

export async function cadastrarFeitico(feitico){
    const sql = `INSERT INTO feiticos (nome, preco, criador, imagem, descricao)
                                    VALUES(?, ?, ?, ?, ?)`

    const [info] = await con.query(sql, [feitico.nome, feitico.preco, feitico.criador, feitico.imagem, feitico.descricao])
    feitico.id = info.insertId;

    return feitico;
}

export async function listarFeitico(){
    const sql = `SELECT * FROM feiticos`
    const [linhas] = await con.query(sql)
    return linhas
}

export async function listarFeiticoPorNome(nome){
    const sql = `SELECT * FROM feiticos WHERE nome = ?`
    const [linhas] = await con.query(sql, [nome])
    return linhas
}

export async function removerFeitico(id){
    const sql = `DELETE FROM feiticos WHERE idFeiticos = ?`
    const [info] = await con.query(sql, [id])
    return info.affectedRows
}