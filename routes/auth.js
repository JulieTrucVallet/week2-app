import { Router } from 'express'
import { createUser, loginUser } from '../controllers/authController.js'

const authRouter = Router()
const JWT_SECRET = process.env.JWT_SECRET

authRouter.post(`/register`, createUser)

authRouter.post('/login', loginUser)

export default authRouter