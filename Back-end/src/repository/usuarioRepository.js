import { con } from "./connection.js";

export async function login(usuario){
    const sql = `SELECT * FROM usuarios WHERE email = ? AND senha = ?`
    const [user] = await con.query(sql, [usuario.email, usuario.senha])
    return user;
}

export async function cadastrarUsuario(usuario){
    const sql = `INSERT INTO usuarios (nome, senha, email, tipo)
                                    VALUES(?, ?, ?, ?)`

    const [info] = await con.query(sql, [usuario.nome, usuario.senha, usuario.email, usuario.tipo])
    usuario.id = info.insertId;

    return usuario;
}

export async function atualizarUsuario(usuario){
    const sql = `UPDATE usuarios SET 
                nome = ?, senha = ?, email = ?, tipo = ?
                WHERE idUsuario = ?`

    const [info] = await con.query(sql, [usuario.nome, usuario.senha, usuario.email, usuario.tipo, usuario.idUsuario])
    return info
}

export async function listarUsuario(){
    const sql = `SELECT * FROM usuarios`
    const [linhas] = await con.query(sql)
    return linhas
}

export async function listarUsuarioPorEmail(email){
    const sql = `SELECT * FROM usuarios WHERE email = ?`
    const[user] = await con.query(sql, [email])
    return user;
}

export async function listarUsuarioPorNome(nome){
    const sql = `SELECT * FROM usuarios WHERE nome LIKE ?`
    const [linhas] = await con.query(sql, ['%'+nome+'%'])
    return linhas
}

export async function removerUsuario(id){
    const sql = `DELETE FROM usuarios WHERE idUsuario = ?`
    const [info] = await con.query(sql, [id])
    return info.affectedRows
}