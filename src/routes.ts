import { request, Router } from "express";
import { createClientController } from "./useCase/Client/CreateClient";
import { listClientController } from "./useCase/Client/ListClient";
import { updateClientController } from "./useCase/Client/UpdateClient";
const route = Router();

route.post('/clients', (req, resp) => {
    return createClientController.handle(req, resp);
})

route.get('/clients', (req, resp) => {
  return listClientController.listAll(req,resp)
})

route.get('/clients/:login', (req, resp) => {
  return listClientController.list(req,resp)
})

route.put('/clients/:id', (req, resp) => {
  return updateClientController.update(req, resp)
})

export { route }
