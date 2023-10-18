import { con } from "./connection.js";

export async function cadastrarusuario(usuario){
    const sql = `INSERT INTO usuarios (nome, senha, email, tipo)
                                    VALUES(?, ?, ?, ?)`

    const [info] = await con.query(sql, [usuario.nome, usuario.senha, usuario.email, usuario.tipo])
    usuario.id = info.insertId;

    return usuario;
}

export async function listarusuario(){
    const sql = `SELECT * FROM usuarios`
    const [linhas] = await con.query(sql)
    return linhas
}

export async function listarusuarioPorNome(nome){
    const sql = `SELECT * FROM usuarios WHERE nome = ?`
    const [linhas] = await con.query(sql, [nome])
    return linhas
}

export async function removerusuario(id){
    const sql = `DELETE FROM usuarios WHERE idUsuarios = ?`
    const [info] = await con.query(sql, [id])
    return info.affectedRows
}