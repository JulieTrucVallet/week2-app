import jwt from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET

export const verifyUser = async (req, res, next) => {
    const token = req.headers.authorization.split(' ')[1]
    if(!token){
        return res.status(405).json(`Access refused : no token provided`)
    }
    try{
        const verify = await jwt.verify(token, JWT_SECRET)
        if(!verify){
            return res.status(405).json(`Access denied, wrong token`)
        }
        req.user = verify
        next()
    }
    catch(err){
        console. log(err)
        return res.status(500).json(`Internal server error`, err)
    }
}