import { Router } from 'express'
import { createService, getAllServices } from '../controllers/servicesController.js'
import { verifyUser } from '../middlewares/verifyUser.js'

const servicesRouter = Router()


servicesRouter.get('/services', getAllServices)
servicesRouter.post('/services', verifyUser, createService)

export default servicesRouter