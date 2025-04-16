import { Router } from 'express'
import { getAllUsers, getUserByID, getUserProfile } from '../controllers/usersController'
import { verifyUser } from '../middlewares/verifyUser'

const userRouter = Router()

userRouter.get('/profile', verifyUser, getUserProfile)

userRouter.get('/users', getAllUsers)
userRouter.get('/users/:id', getUserByID)

export default userRouter