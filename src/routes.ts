import { Router } from "express";
import { createClientController } from "./useCase/Client/CreateClient";
import { deleteClientController } from "./useCase/Client/DeleteClient";
import { listClientController } from "./useCase/Client/ListClient";
import { updateClientController } from "./useCase/Client/UpdateClient";

import { createProfileController } from "./useCase/Profile/CreateProfile";

import { createProductCategoryController } from "./useCase/ProductCategory/CreateProductCategory";
import { updateProductCategoryController } from "./useCase/ProductCategory/UpdateProductCategory";
import { deleteProductCategoryController } from "./useCase/ProductCategory/DeleteProductCategory";
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

route.put("/product/category/:id", (req, res) => {
  return updateProductCategoryController.handle(req, res);
});

route.delete("/product/category/:id", (req, res) => {
  return deleteProductCategoryController.handle(req, res);
});

export { route };
