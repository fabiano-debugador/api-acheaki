"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.route = void 0;
const express_1 = require("express");
const CreateClient_1 = require("./useCase/Client/CreateClient");
const route = (0, express_1.Router)();
exports.route = route;
route.post('/clients', (req, resp) => {
    return CreateClient_1.createClientController.handle(req, resp);
});
