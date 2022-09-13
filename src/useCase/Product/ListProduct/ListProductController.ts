import { ListProductUseCase } from "./ListProductUseCase";
import { Response, Request } from "express";

export class ListProductController {
  constructor(private listProductUseCase: ListProductUseCase) {}

  async listAll(request: Request, response: Response): Promise<Response> {
    const { idLogin } = request.params;

    try {
      const product = await this.listProductUseCase.listAll({
        idLogin,
      });

      if (product) {
        return response.status(200).send({ product });
      }

      return response.status(404).send();
    } catch (error: any) {
      return response.status(400).json({
        message: error.message || "Unexpected error",
      });
    }
  }

  async getOne(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    try {
      const product = await this.listProductUseCase.listOne({ id });

      if (product) {
        return response.status(200).send(product);
      }

      return response.status(404).send();
    } catch (error: any) {
      return response.status(400).json({
        message: error.message || "Unexpected error",
      });
    }
  }
}
