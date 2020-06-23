import { Request, Response } from 'express'
import knex from '../database/connection'

class UploadsController {
  async index (request: Request, response: Response) {
    const data = await knex('uploads').select('*')
    return response.json(data)
  }

  async store (request: Request, response: Response) {
    const data = {
      image: request.file.filename
    }
    await knex('uploads').insert(data)
    return response.json({
      message: 'Upload realizado com sucesso!'
    })
  }
}
export default UploadsController
