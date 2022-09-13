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
exports.UpdateClientUseCase = void 0;
class UpdateClientUseCase {
    constructor(clientRepository) {
        this.clientRepository = clientRepository;
    }
    execute(data) {
        return __awaiter(this, void 0, void 0, function* () {
            // const clientAlredyExists = await this.clientRepository.findByLogin(
            //   data.login
            // );
            // if (clientAlredyExists) {
            //   throw new Error("Login already exists.");
            // }
            yield this.clientRepository.update(data);
        });
    }
}
exports.UpdateClientUseCase = UpdateClientUseCase;
