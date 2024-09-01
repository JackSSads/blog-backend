const category_routes = require("express").Router();
const CategoryController = require("../controllers/CategoryController");

category_routes.post("/", CategoryController.create);
category_routes.get("/", CategoryController.getAll);
category_routes.get("/:category_id", CategoryController.getById);
category_routes.put("/:category_id", CategoryController.updateById);
category_routes.delete("/:category_id", CategoryController.deleteById);

module.exports = category_routes;