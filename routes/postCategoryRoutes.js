const user_routes = require("express").Router();
const PostCategoryController = require("../controllers/PostCategoryController");

user_routes.post("/", PostCategoryController.create);
user_routes.get("/", PostCategoryController.getAll);
user_routes.get("/:post_id", PostCategoryController.getById);
user_routes.put("/:post_id", PostCategoryController.updateById);
user_routes.delete("/:post_id", PostCategoryController.deleteById);

module.exports = user_routes;