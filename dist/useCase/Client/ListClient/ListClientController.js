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
exports.ListClientController = void 0;
class ListClientController {
    constructor(listCLientUseCase) {
        this.listCLientUseCase = listCLientUseCase;
    }
    list(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { login } = request.params;
            try {
                const client = yield this.listCLientUseCase.execute({
                    login
                });
                if (!client) {
                    return response.status(404).send({ result: 'No client' });
                }
                return response.status(200).send({ client });
            }
            catch (error) {
                return response.status(400).json({
                    message: error || 'Unexpected error.'
                });
            }
        });
    }
    listAll(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const clients = yield this.listCLientUseCase.executeAll();
                if (!clients) {
                    return response.status(404).send('No clients');
                }
                return response.status(200).send({ clients });
            }
            catch (error) {
                return response.status(400).json({
                    message: error || 'Unexpected error.'
                });
            }
        });
    }
}
exports.ListClientController = ListClientController;
