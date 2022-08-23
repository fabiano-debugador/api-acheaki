import { Router } from "express";
import { createClientController } from "./useCase/Client/CreateClient";
import { deleteClientController } from "./useCase/Client/DeleteClient";
import { listClientController } from "./useCase/Client/ListClient";
import { updateClientController } from "./useCase/Client/UpdateClient";

import { createProfileController } from "./useCase/Profile/CreateProfile";

import { createProductCategoryController } from "./useCase/ProductCategory/CreateProductCategory";
import { updateProductCategoryController } from "./useCase/ProductCategory/UpdateProductCategory";
import { deleteProductCategoryController } from "./useCase/ProductCategory/DeleteProductCategory";
import { listProductCategoryController } from "./useCase/ProductCategory/ListProductCategory";

import { createProductController } from "./useCase/Product/CreateProduct";
import { updateProductController } from "./useCase/Product/UpdateProduct";
import { deleteProductController } from "./useCase/Product/DeleteProduct";

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

route.get("/product/category", (req, res) => {
  return listProductCategoryController.listAll(req, res);
});

route.get("/product/category/:id", (req, res) => {
  return listProductCategoryController.getOne(req, res);
});

// Products
route.post("/product", (req, res) => {
  return createProductController.handle(req, res);
});

route.put("/product/:id", (req, res) => {
  return updateProductController.handle(req, res);
});

route.delete("/product/:id", (req, res) => {
  return deleteProductController.handle(req, res);
});

export { route };
