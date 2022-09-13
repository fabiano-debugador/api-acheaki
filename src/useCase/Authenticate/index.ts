import { PostgresAuthenticateRepository } from "../../repositories/implementations/PostgresAuthenticateRepository";
import { AuthenticateController } from "./AuthenticateController";
import { AuthenticateUseCase } from "./AuthenticateUseCase";

const postgresAuthenticateRepository = new PostgresAuthenticateRepository();

const authenticateUseCase = new AuthenticateUseCase(
  postgresAuthenticateRepository
);

const authenticateController = new AuthenticateController(authenticateUseCase);

export { authenticateUseCase, authenticateController };
