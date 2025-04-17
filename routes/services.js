import { Router } from 'express'
import { createService, deleteServiceByID, getAllServices, getServiceByID } from '../controllers/servicesController.js'
import { checkAdminOrOwner } from '../middlewares/checkAdminOrOwner.js'
import { upload } from '../middlewares/uploadFile.js'
import { verifyUser } from '../middlewares/verifyUser.js'

const servicesRouter = Router()


servicesRouter.get('/services', getAllServices)

servicesRouter.get('/service/:id', getServiceByID)

servicesRouter.post('/services', verifyUser, upload.single('image'), createService)

servicesRouter.delete('/service/:id', verifyUser, checkAdminOrOwner, deleteServiceByID)


export default servicesRouter