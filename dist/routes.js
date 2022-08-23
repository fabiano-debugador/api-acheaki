"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.route = void 0;
const express_1 = require("express");
const CreateClient_1 = require("./useCase/Client/CreateClient");
const DeleteClient_1 = require("./useCase/Client/DeleteClient");
const ListClient_1 = require("./useCase/Client/ListClient");
const UpdateClient_1 = require("./useCase/Client/UpdateClient");
const CreateProfile_1 = require("./useCase/Profile/CreateProfile");
const CreateProductCategory_1 = require("./useCase/ProductCategory/CreateProductCategory");
const UpdateProductCategory_1 = require("./useCase/ProductCategory/UpdateProductCategory");
const DeleteProductCategory_1 = require("./useCase/ProductCategory/DeleteProductCategory");
const ListProductCategory_1 = require("./useCase/ProductCategory/ListProductCategory");
const CreateProduct_1 = require("./useCase/Product/CreateProduct");
const UpdateProduct_1 = require("./useCase/Product/UpdateProduct");
const DeleteProduct_1 = require("./useCase/Product/DeleteProduct");
const route = (0, express_1.Router)();
exports.route = route;
route.post("/clients", (req, resp) => {
    return CreateClient_1.createClientController.handle(req, resp);
});
route.get("/clients", (req, resp) => {
    return ListClient_1.listClientController.listAll(req, resp);
});
route.get("/clients/:login", (req, resp) => {
    return ListClient_1.listClientController.list(req, resp);
});
route.put("/clients/:id", (req, resp) => {
    return UpdateClient_1.updateClientController.update(req, resp);
});
route.delete("/clients/:id", (req, resp) => {
    return DeleteClient_1.deleteClientController.handle(req, resp);
});
route.post("/profiles", (req, res) => {
    return CreateProfile_1.createProfileController.handle(req, res);
});
route.post("/product/category", (req, res) => {
    return CreateProductCategory_1.createProductCategoryController.handle(req, res);
});
route.put("/product/category/:id", (req, res) => {
    return UpdateProductCategory_1.updateProductCategoryController.handle(req, res);
});
route.delete("/product/category/:id", (req, res) => {
    return DeleteProductCategory_1.deleteProductCategoryController.handle(req, res);
});
route.get("/product/category", (req, res) => {
    return ListProductCategory_1.listProductCategoryController.listAll(req, res);
});
route.get("/product/category/:id", (req, res) => {
    return ListProductCategory_1.listProductCategoryController.getOne(req, res);
});
// Products
route.post("/product", (req, res) => {
    return CreateProduct_1.createProductController.handle(req, res);
});
route.put("/product/:id", (req, res) => {
    return UpdateProduct_1.updateProductController.handle(req, res);
});
route.delete("/product/:id", (req, res) => {
    return DeleteProduct_1.deleteProductController.handle(req, res);
});
