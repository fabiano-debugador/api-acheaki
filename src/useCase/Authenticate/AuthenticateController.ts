import { Request, Response } from "express";
import { AuthenticateUseCase } from "./AuthenticateUseCase";

export class AuthenticateController {
  constructor(private authenticateUseCase: AuthenticateUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { login, password } = request.body;

    try {
      const token = await this.authenticateUseCase.execute({ login, password });

      return response.status(200).send(token);
    } catch (error: any) {
      return response.status(401).json({ message: "Client not authozized" });
    }
  }
}
