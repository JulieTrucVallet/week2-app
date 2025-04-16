import { Router } from 'express'
import { createService, getAllServices, getServiceByID } from '../controllers/servicesController.js'
import { upload } from '../middlewares/uploadFile.js'
import { verifyUser } from '../middlewares/verifyUser.js'

const servicesRouter = Router()


servicesRouter.get('/services', getAllServices)

servicesRouter.get('/service/:id', getServiceByID)

servicesRouter.post('/services', verifyUser, upload.single('image'), createService)


export default servicesRouter