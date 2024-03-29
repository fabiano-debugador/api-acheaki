"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listOneProfileController = exports.listOneProfileUseCase = void 0;
const PostgresProfileRepository_1 = require("../../../repositories/implementations/PostgresProfileRepository");
const ListOneProfileController_1 = require("./ListOneProfileController");
const ListOneProfileUseCase_1 = require("./ListOneProfileUseCase");
const postgresProductRepository = new PostgresProfileRepository_1.PostgresProfileRepository();
const listOneProfileUseCase = new ListOneProfileUseCase_1.ListOneProfileUseCase(postgresProductRepository);
exports.listOneProfileUseCase = listOneProfileUseCase;
const listOneProfileController = new ListOneProfileController_1.ListOneProfileController(listOneProfileUseCase);
exports.listOneProfileController = listOneProfileController;
