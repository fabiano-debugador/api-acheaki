import { PostgresClientRepository } from "../../../repositories/implementations/PostgresClientRepository";
import { ListClientController } from "./ListClientController";
import { ListClientUseCase } from "./ListClientUseCase";

const postgresClientRepository = new PostgresClientRepository;

const listCLientUseCase = new ListClientUseCase (
  postgresClientRepository
)

const listClientController = new ListClientController(
  listCLientUseCase
)

export { listCLientUseCase, listClientController }
