import { PostgresClientRepository } from "../../../repositories/implementations/PostgresClientRepository";
import { UpdateClientUseCase } from "./UpdateClientUseCase";
import { UpdateClientController } from "./UpdateClientController";

const postgresClientRepository = new PostgresClientRepository;

const updateClientUseCase = new UpdateClientUseCase (
  postgresClientRepository
)

const updateClientController = new UpdateClientController(
  updateClientUseCase
)

export { updateClientUseCase, updateClientController }
