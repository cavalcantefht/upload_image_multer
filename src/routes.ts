import express from 'express'

import multer from 'multer'
import multerConfig from './config/multer'

import UploadsController from './controllers/UploadsController'

const upload = multer(multerConfig)

const routes = express.Router()
const uploadsController = new UploadsController()

routes.get('/', uploadsController.index)
routes.post('/upload',
  upload.single('image'),
  uploadsController.store
)

export default routes
