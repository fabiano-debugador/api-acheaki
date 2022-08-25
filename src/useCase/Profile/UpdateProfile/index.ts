import { PostgresProfileRepository } from "../../../repositories/implementations/PostgresProfileRepository";
import { UpdateProfileController } from "./UpdateProfileController";
import { UpdateProfileUseCase } from "./UpdateProfileUseCase";

const postgresProfileRepository = new PostgresProfileRepository();

const updateProfileUseCase = new UpdateProfileUseCase(
  postgresProfileRepository
);

const updateProfileController = new UpdateProfileController(
  updateProfileUseCase
);

export { updateProfileUseCase, updateProfileController };
