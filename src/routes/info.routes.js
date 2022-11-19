import { Router } from 'express'
import { infoController } from '../controllers/info.controller.js'

const routerInfo = Router()

// Randoms
routerInfo.get('/', infoController)

export default routerInfo