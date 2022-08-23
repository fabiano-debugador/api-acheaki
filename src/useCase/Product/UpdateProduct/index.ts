import { PostgresProductRepository } from "../../../repositories/implementations/PostgresProductRepository";
import { UpdateProductController } from "./UpdateProductController";
import { UpdateProductUseCase } from "./UpdateProductUseCase";

const postgresProductRepository = new PostgresProductRepository();

const updateProductUseCase = new UpdateProductUseCase(
  postgresProductRepository
);

const updateProductController = new UpdateProductController(
  updateProductUseCase
);

export { updateProductUseCase, updateProductController };
