import { PostgresClientRepository } from "../../../repositories/implementations/PostgresClientRepository";
import { CreateClientController } from "./CreateClientController";
import { CreateClientUseCase } from "./CreateClientUseCase";

const postgresClientRepository = new PostgresClientRepository();

const createClientUseCase = new CreateClientUseCase(postgresClientRepository);

const createClientController = new CreateClientController(createClientUseCase);

export { createClientUseCase, createClientController };
