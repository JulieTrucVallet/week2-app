import User from "../models/User"

export const checkAdmin = async (req, res, next) => {
    const {id} = req.user
    try{
        const user = await User.findById(id)
        if(user.role != 'admin' ) {
            return res.status(405).json(`Access refused : admin only`)
        }
        next()
    }
    catch (error) {
        if (error instanceof jwt.JsonWebTokenError) {
            return res.status(403).json({ error: "Invalid token : incorrect signature" });
        }
        if (error instanceof jwt.TokenExpiredError) {
            return res.status(403).json({ error: "Token expired, please login again" });
        }
        return res.status(500).json({ error: "Error while verifating the token" });
    }
}