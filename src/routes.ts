import { request, Router } from "express";
import { createClientController } from "./useCase/Client/CreateClient";

const route = Router();

route.post('/clients', (req, resp) => {
    return createClientController.handle(req, resp);
})

export { route }
