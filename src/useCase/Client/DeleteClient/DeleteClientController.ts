import { Response, Request, response } from 'express';
import { DeleteClientUseCase } from './DeleteClientUseCase';

export class DeleteClientController {
  constructor (
      private deleteClientUseCase: DeleteClientUseCase
  ) {}

  async handle (request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    try {

      const isDeleted = await this.deleteClientUseCase.execute({ id });

      if(isDeleted) {
        return response.status(204).send();
      }

      return response.status(404).json({ message: 'Client not found' });
    } catch (error) {
      return response.status(400).json({
        message: error || 'Unexpected error'
      })
    }
  }
}
