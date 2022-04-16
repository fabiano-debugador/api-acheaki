import { Request, Response } from 'express';
import { ListClientUseCase } from './ListClientUseCase';

export class ListClientController {
  constructor (
    private listCLientUseCase: ListClientUseCase
  ) {}

  async list(request: Request, response: Response): Promise<Response> {
    const { login } = request.params;
    try {
      const client = await this.listCLientUseCase.execute({
        login
      })

      if (!client) {
        return response.status(404).send({result : 'No client'});
      }

      return response.status(200).send({client});
    } catch (error) {
        return response.status(400).json({
        message: error || 'Unexpected error.'
      })
    }
  }

  async listAll(request: Request, response: Response): Promise<Response> {

    try {
      const clients = await this.listCLientUseCase.executeAll();

      if (!clients) {
        return response.status(404).send('No clients')
      }

      return response.status(200).send({clients})
    } catch (error) {
       return response.status(400).json({
        message: error || 'Unexpected error.'
      })
    }
  }
}
