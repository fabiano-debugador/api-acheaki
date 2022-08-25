"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createClientController = exports.createClientUseCase = void 0;
const PostgresClientRepository_1 = require("../../../repositories/implementations/PostgresClientRepository");
const CreateClientController_1 = require("./CreateClientController");
const CreateClientUseCase_1 = require("./CreateClientUseCase");
const postgresClientRepository = new PostgresClientRepository_1.PostgresClientRepository();
const createClientUseCase = new CreateClientUseCase_1.CreateClientUseCase(postgresClientRepository);
exports.createClientUseCase = createClientUseCase;
const createClientController = new CreateClientController_1.CreateClientController(createClientUseCase);
exports.createClientController = createClientController;
