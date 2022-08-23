import { PostgresProductRepository } from "../../../repositories/implementations/PostgresProductRepository";
import { DeleteProductController } from "./DeleteProductController";
import { DeleteProductUseCase } from "./DeleteProductUseCase";

const postgresProductRepository = new PostgresProductRepository();

const deleteProductUseCase = new DeleteProductUseCase(
  postgresProductRepository
);

const deleteProductController = new DeleteProductController(
  deleteProductUseCase
);

export { deleteProductUseCase, deleteProductController };
