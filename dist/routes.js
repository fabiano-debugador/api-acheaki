"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.route = void 0;
const express_1 = require("express");
const CreateClient_1 = require("./useCase/Client/CreateClient");
const DeleteClient_1 = require("./useCase/Client/DeleteClient");
const ListClient_1 = require("./useCase/Client/ListClient");
const UpdateClient_1 = require("./useCase/Client/UpdateClient");
const route = (0, express_1.Router)();
exports.route = route;
route.post('/clients', (req, resp) => {
    return CreateClient_1.createClientController.handle(req, resp);
});
route.get('/clients', (req, resp) => {
    return ListClient_1.listClientController.listAll(req, resp);
});
route.get('/clients/:login', (req, resp) => {
    return ListClient_1.listClientController.list(req, resp);
});
route.put('/clients/:id', (req, resp) => {
    return UpdateClient_1.updateClientController.update(req, resp);
});
route.delete('/clients/:id', (req, resp) => {
    return DeleteClient_1.deleteClientController.handle(req, resp);
});
