"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateClientUseCase = void 0;
const Client_1 = require("../../../entities/Client");
class CreateClientUseCase {
    constructor(clientsRepository) {
        this.clientsRepository = clientsRepository;
    }
    execute(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const clientAlreadyExists = yield this.clientsRepository.findByLogin(data.login);
            if (clientAlreadyExists) {
                throw new Error("Client already exists.");
            }
            const client = new Client_1.Client(data);
            yield this.clientsRepository.save(client);
            if (client.id) {
                yield this.clientsRepository.createProfile(client.id);
            }
        });
    }
}
exports.CreateClientUseCase = CreateClientUseCase;
