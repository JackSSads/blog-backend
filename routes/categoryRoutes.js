const category_routes = require("express").Router();
const CategoryController = require("../controllers/CategoryController");

category_routes.post("/", CategoryController.create);
category_routes.get("/", CategoryController.getAll);
category_routes.get("/", CategoryController.getById);
category_routes.put("/", CategoryController.updateById);
category_routes.delete("/", CategoryController.deleteById);

module.exports = category_routes;