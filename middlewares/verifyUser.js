import jwt from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET

export const verifyUser = async (req, res, next) => {
    
    const token = req.headers.authorization?.split(' ')[1]
    if (!token) {
        return res.status(405).json(`Access refused : no token provided`)
    }
    try {
        // The token being verified
        const decoded = await jwt.verify(token, JWT_SECRET)
        // I may pass through the req.user the decoded token
        req.user = decoded
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
