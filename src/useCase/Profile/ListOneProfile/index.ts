import { PostgresProfileRepository } from "../../../repositories/implementations/PostgresProfileRepository";
import { ListOneProfileController } from "./ListOneProfileController";
import { ListOneProfileUseCase } from "./ListOneProfileUseCase";

const postgresProductRepository = new PostgresProfileRepository();

const listOneProfileUseCase = new ListOneProfileUseCase(
  postgresProductRepository
);

const listOneProfileController = new ListOneProfileController(
  listOneProfileUseCase
);

export { listOneProfileUseCase, listOneProfileController };
