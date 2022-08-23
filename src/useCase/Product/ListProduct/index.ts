import { PostgresProductRepository } from "../../../repositories/implementations/PostgresProductRepository";
import { ListProductController } from "./ListProductController";
import { ListProductUseCase } from "./ListProductUseCase";

const postgresProductRepository = new PostgresProductRepository();

const listProductUseCase = new ListProductUseCase(postgresProductRepository);

const listProductController = new ListProductController(listProductUseCase);

export { listProductUseCase, listProductController };
