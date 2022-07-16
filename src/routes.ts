import { Router } from "express";
import { createClientController } from "./useCase/Client/CreateClient";
import { deleteClientController } from "./useCase/Client/DeleteClient";
import { listClientController } from "./useCase/Client/ListClient";
import { updateClientController } from "./useCase/Client/UpdateClient";

import { createProfileController } from "./useCase/Profile/CreateProfile";

import { createProductCategoryController } from "./useCase/ProductCategory/CreateProductCategory";
const route = Router();

route.post("/clients", (req, resp) => {
  return createClientController.handle(req, resp);
});

route.get("/clients", (req, resp) => {
  return listClientController.listAll(req, resp);
});

route.get("/clients/:login", (req, resp) => {
  return listClientController.list(req, resp);
});

route.put("/clients/:id", (req, resp) => {
  return updateClientController.update(req, resp);
});

route.delete("/clients/:id", (req, resp) => {
  return deleteClientController.handle(req, resp);
});

route.post("/profiles", (req, res) => {
  return createProfileController.handle(req, res);
});

route.post("/product/category", (req, res) => {
  return createProductCategoryController.handle(req, res);
});

export { route };
