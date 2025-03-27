import { Router } from 'express'
import { verifyUser } from '../middlewares/verifyUser.js'

const eventsRouter = Router()


eventsRouter.get('/events', verifyUser, (req, res) => {
    console.log(req.user)
    res.send(`Welcome to my events`)    
})


export default eventsRouter



