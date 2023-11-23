import { con } from "./connection.js";

export async function cadastrarFeitico(feitico){
    const sql = `INSERT INTO feiticos (nome, preco, criador, descricao)
                                    VALUES(?, ?, ?, ?)`

    const [info] = await con.query(sql, [feitico.nome, feitico.preco, feitico.criador, feitico.descricao])
    feitico.id = info.insertId;

    return feitico;
}

export async function atualizarFeitico(feitico){
    const sql = `UPDATE feiticos SET 
                nome = ?, preco = ?, criador = ?, descricao = ? 
                WHERE nome = ?`

    const [info] = await con.query(sql, [feitico.nome, feitico.preco, feitico.criador, feitico.descricao,  feitico.nome])
    return info
}

export async function listarFeitico(){
    const sql = `SELECT * FROM feiticos`
    const [linhas] = await con.query(sql)
    return linhas
}

export async function listarFeiticoPorNome(nome){
    const sql = `SELECT * FROM feiticos WHERE nome LIKE ?`
    const [linhas] = await con.query(sql, ['%'+nome+'%'])
    return linhas
}

export async function removerFeitico(id){
    const sql = `DELETE FROM feiticos WHERE idFeiticos = ?`
    const [info] = await con.query(sql, [id])
    return info.affectedRows
}