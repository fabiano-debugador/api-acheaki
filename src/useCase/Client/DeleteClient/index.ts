import { PostgresClientRepository } from "../../../repositories/implementations/PostgresClientRepository";
import { DeleteClientUseCase } from "./DeleteClientUseCase";
import { DeleteClientController } from "./DeleteClientController";

const postgresClientRepository = new PostgresClientRepository;

const deleteClientUseCase = new DeleteClientUseCase(
  postgresClientRepository
)

const deleteClientController = new DeleteClientController(
  deleteClientUseCase
)

export { deleteClientUseCase, deleteClientController }
