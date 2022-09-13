import { Request, Response } from "express";
import { UpdateClientUseCase } from "./UpdateClientUseCase";

export class UpdateClientController {
  constructor(private updateClientUseCase: UpdateClientUseCase) {}

  async update(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { login, password } = request.body;

    try {
      await this.updateClientUseCase.execute({
        id,
        login,
        password,
      });

      return response.status(204).send();
    } catch (error: any) {
      return response.status(400).json({
        message: error.message || "Unexpected error.",
      });
    }
  }
}
