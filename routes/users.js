import { Router } from 'express'
import { getUserProfile } from '../controllers/usersController'
import { verifyUser } from '../middlewares/verifyUser'

const userRouter = Router()

userRouter.get('/profile', verifyUser, getUserProfile)

export default userRouter