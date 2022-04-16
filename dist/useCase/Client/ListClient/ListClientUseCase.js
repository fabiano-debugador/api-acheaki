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
exports.ListClientUseCase = void 0;
class ListClientUseCase {
    constructor(clientsRepository) {
        this.clientsRepository = clientsRepository;
    }
    execute(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const clientSearch = yield this.clientsRepository.findByLogin(data.login);
            if (!clientSearch) {
                return null;
            }
            return clientSearch;
        });
    }
    executeAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const clients = this.clientsRepository.findAll();
            if (!clients) {
                throw new Error('Clients not found');
            }
            return clients;
        });
    }
}
exports.ListClientUseCase = ListClientUseCase;
