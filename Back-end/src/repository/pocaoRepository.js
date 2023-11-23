import { con } from "./connection.js";

export async function cadastrarPocao(pocao){
    const sql = `INSERT INTO pocoes (nome, preco, criador, imagem, tipo, descricao, ingredientes)
                                    VALUES(?, ?, ?, ?, ?, ?, ?)`

    const [info] = await con.query(sql, [pocao.nome, pocao.preco, pocao.criador, pocao.imagem, pocao.tipo, pocao.descricao, pocao.ingredientes])
    pocao.id = info.insertId;

    return pocao;
}

export async function atualizarPocao(pocao){
    const sql = `UPDATE pocoes SET 
                nome = ?, preco = ?, criador = ?, imagem = ?, tipo = ?, descricao = ?, ingredientes = ?
                WHERE nome = ?`

    const [info] = await con.query(sql, [pocao.nome, pocao.preco, pocao.criador, pocao.imagem, pocao.tipo, pocao.descricao, pocao.ingredientes, pocao.nome])
    return info
}

export async function listarPocao(){
    const sql = `SELECT * FROM pocoes`
    const [linhas] = await con.query(sql)
    return linhas
}

export async function listarPocaoPorNome(nome){
    const sql = `SELECT * FROM pocoes WHERE nome like ?`
    const [linhas] = await con.query(sql, ['%'+nome+'%'])
    return linhas
}

export async function removerPocao(id){
    const sql = `DELETE FROM pocoes WHERE idPocoes = ?`
    const [info] = await con.query(sql, [id])
    return info.affectedRows
}