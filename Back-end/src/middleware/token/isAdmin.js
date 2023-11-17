const isAdmin = ((req, res, next) => {
    req.tipo != "admin" ? res.status(403).send({message: "Permissão inválida"}) : next()          
})

export { isAdmin }