import { PostgresProfileRepository } from "../../../repositories/implementations/PostgresProfileRepository";
import { ListAllProfileController } from "./ListAllProfileController";
import { ListAllProfileUseCase } from "./ListAllProfileUseCase";

const postgresProductRepository = new PostgresProfileRepository();

const listAllProfileUseCase = new ListAllProfileUseCase(
  postgresProductRepository
);

const listAllProfileController = new ListAllProfileController(
  listAllProfileUseCase
);

export { listAllProfileUseCase, listAllProfileController };
