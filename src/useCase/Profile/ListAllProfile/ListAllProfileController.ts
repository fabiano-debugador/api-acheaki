import { ListAllProfileUseCase } from "./ListAllProfileUseCase";
import { Response, Request } from "express";

export class ListAllProfileController {
  constructor(private listAllProfiletUseCase: ListAllProfileUseCase) {}

  async listAll(request: Request, response: Response): Promise<Response> {
    const { idLogin } = request.params;

    try {
      const profiles = await this.listAllProfiletUseCase.listAll({
        idLogin,
      });

      if (profiles) {
        return response.status(200).send({ profiles });
      }

      return response.status(404).send();
    } catch (error: any) {
      return response.status(400).json({
        message: error.message || "Unexpected error",
      });
    }
  }
}
