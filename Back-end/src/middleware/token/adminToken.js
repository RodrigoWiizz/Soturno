

export default function adminToken(req, res){

    const { auth } = req.headers
    if(!auth){

    }
    authToken(auth).then((user_dados) => {
        
    })
}