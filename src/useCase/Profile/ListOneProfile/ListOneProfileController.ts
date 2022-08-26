import { ListOneProfileUseCase } from "./ListOneProfileUseCase";
import { Response, Request } from "express";

export class ListOneProfileController {
  constructor(private listOneProfiletUseCase: ListOneProfileUseCase) {}

  async getOne(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    try {
      const profile = await this.listOneProfiletUseCase.listOne({ id });

      if (profile) {
        return response.status(200).send(profile);
      }

      return response.status(404).send();
    } catch (error: any) {
      return response.status(400).json({
        message: error.message || "Unexpected error",
      });
    }
  }
}
