import { Router } from 'express'
import { verifyUser } from '../middlewares/verifyUser.js'

const eventRouter = Router()

eventRouter.get('/events', verifyUser, (req, res) => {
    console.log(req.user)
    res.send('Welcome to my events' )
})

export default eventRouter