import { Request, Response } from "express";
import { CreateClientUseCase } from "./CreateClientUseCase";

export class CreateClientController {
  constructor(private createClientUseCase: CreateClientUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { login, password } = request.body;

    try {
      await this.createClientUseCase.execute({
        login,
        password,
      });

      return response.status(201).send();
    } catch (err: any) {
      return response.status(400).json({
        message: err.message || "Unexpected error.",
      });
    }
  }
}
